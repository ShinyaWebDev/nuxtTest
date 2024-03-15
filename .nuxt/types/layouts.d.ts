import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "my-career" | "my-resume" | "main" | "my-profile" | "myprofile-layout"
declare module "../../node_modules/.pnpm/nuxt@3.10.3_sass@1.72.0_vite@5.1.6/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}