/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "true" sur le site de recette (branche release) */
  readonly VITE_RECETTE?: string
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}