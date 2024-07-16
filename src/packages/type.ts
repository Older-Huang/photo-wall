export type ImgListItemType = {
  title: string
  name: string
  img: string | URL
}

export interface PhotoWallProps {
  options: ImgListItemType[]
}
