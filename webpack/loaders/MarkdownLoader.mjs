export default function(source) {
  const options = this.getOptions();
  return `export default ${JSON.stringify(source)}`;
}
