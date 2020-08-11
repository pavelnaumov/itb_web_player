import { THUMBNAIL_WIDTH } from '../constants'

export default function calculateThumbnailsContainerDimension(total) {
  let THUMBNAIL_OFFSET = window.innerWidth < 1920 ? 18 : 15
  return THUMBNAIL_WIDTH * total + (THUMBNAIL_OFFSET * total - THUMBNAIL_OFFSET)
}
