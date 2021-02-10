import React from 'react'
import ButtonDownload from './GalleryBottomComponents/ButtonDownload'
import ButtonForward from './GalleryBottomComponents/ButtonForward'
import ButtonRotate from './GalleryBottomComponents/ButtonRotate'
import PhotoCounter from './GalleryBottomComponents/PhotoCounter'
import ButtonFavourites from './GalleryBottomComponents/ButtonFavourites'

const GalleryBottom = ({
  photos,
  avatarElement,
  currentIndex,
  onDownload,
  onForward,
  onRotate,
  toFavourites,
  isFavourite
}) => {
  const mediaItem = photos[currentIndex]
  const { caption, subcaption, fileId } = mediaItem

  const _onDownload = () => {
    onDownload(fileId)
  }

  return (
    <div className='gallery-bottom__inner'>
      <div className='bottom-inner__avatar-container'>
        <div className='bottom-inner__avatar'>{avatarElement}</div>
        <div className='bottom-inner__name-data'>
          <div className='bottom-inner__name'>
            <>{caption}</>
          </div>
          <div className='bottom-inner__date'>
            <p>{subcaption}</p>
          </div>
        </div>
      </div>
      <div className='bottom-inner__buttons-container'>
        <div className='bottom-inner__buttons-container-inner'>
          <ButtonDownload onDownload={_onDownload} />
          <ButtonForward onForward={onForward} />
          {mediaItem.type === 'image' && <ButtonRotate onRotate={onRotate} />}
        </div>
      </div>
      <div className='bottom-inner__right-buttons'>
        <div className='bottom-inner__right-buttons-inner'>
          <PhotoCounter
            currentIndex={currentIndex + 1}
            totalCount={photos.length}
          />
          <ButtonFavourites
            isFavourite={isFavourite}
            toFavourites={toFavourites}
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryBottom
