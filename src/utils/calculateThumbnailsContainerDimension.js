import { THUMBNAIL_WIDTH, THUMBNAIL_OFFSET } from '../constants'

export default function calculateThumbnailsContainerDimension(total) {
  const thumbnailOffset = window.innerWidth < 1920 ? 15 : THUMBNAIL_OFFSET
  return THUMBNAIL_WIDTH * total + (thumbnailOffset * total - thumbnailOffset)
}
