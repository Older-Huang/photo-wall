import type { App } from 'vue'
import type { ImgListItemType } from '@/packages/type'
import PhotoWall from '@/packages/PhotoWall.vue'

PhotoWall.install = function (app: App) {
  app.component(PhotoWall.name as string, PhotoWall)
}

export { PhotoWall }
export type { ImgListItemType }

declare module 'vue' {
  export interface GlobalComponents {
    PhotoWall: typeof PhotoWall
  }
}

export default PhotoWall
