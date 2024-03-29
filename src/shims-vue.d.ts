declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  const source: string;
  export default source;
}

declare module '*.svg' {
  const source: string;
  export default source;
}
