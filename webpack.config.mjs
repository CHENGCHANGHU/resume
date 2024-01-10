import path, { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { CustomCleanPlugin } from './webpack/plugins/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDevelopment = process.env.NODE_ENV !== 'production';

console.log('isDevelopment', isDevelopment);

const config = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  entry: {
    index: join(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: join(__dirname),
    filename: 'dist/js/[name].[contenthash].js',
    chunkFilename: 'dist/js/[name].[contenthash].chunk.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['vue', '.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
				test: /\.ttf$/,
				type: 'asset/resource'
			},
      {
        test: /\.svg/,
        type: 'asset/source'
      },
      {
        test: /\.md$/,
        use: [{
          loader: path.join(__dirname, 'webpack', 'loaders', 'MarkdownLoader.mjs'),
          options: {},
        }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new HTMLWebpackPlugin({
      name: 'index.html',
      template: join(__dirname, '.', 'public', 'index.html'),
      chunks: ['index'],
      publicPath: isDevelopment ? '/' : '/resume',
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/css/[name].[contenthash].css',
    }),
    // isDevelopment ? undefined : new CleanWebpackPlugin(),
    new CustomCleanPlugin([
      join(__dirname, 'dist'),
      join(__dirname, 'index.html'),
    ]),
    new VueLoaderPlugin(),
  ].filter(Boolean),
};

export default config;
