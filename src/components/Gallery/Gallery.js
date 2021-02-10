import React, { PureComponent } from "react";
import "../../scss/style.scss";
import { getYoutubeVideoIdFromUrl } from "./getYoutubeVideoIdFromUrl";
import { galleryPropTypes, galleryDefaultProps } from "../../common";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Photo from "../Photo";
import Video from "../Video/Video";
import Caption from "../Caption";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import GalleryBottom from "./GalleryBottom";
import GallerySignature from "./GallerySignature";
import GalleryZoomButtons from "./GalleryZoomButtons";

import { DIRECTION_NEXT, DIRECTION_PREV } from "../../constants";

const propTypes = {
  ...galleryPropTypes,
};

const defaultProps = {
  ...galleryDefaultProps,
};

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    const { activePhotoIndex, photos, wrap } = this.props;
    this.state = {
      activePhotoIndex,
      hidePrevButton: wrap && activePhotoIndex === 0,
      hideNextButton: wrap && activePhotoIndex === photos.length - 1,
      controlsDisabled: true,
      touchStartInfo: null,
      touchEndInfo: null,
      touchMoved: false,
      signatureVisible: false,
      rotation: 0,
    };
    this.lastPreloadIndex = 0;
    this.preloadedPhotos = [];
    this.hasPhotos = photos.length > 0;
    this.hasMoreThanOnePhoto = photos.length > 1;
    this.onGetActivePhotoIndex = this.state.activePhotoIndex;
    this.move = this.move.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.onPhotoLoad = this.onPhotoLoad.bind(this);
    this.onPhotoError = this.onPhotoError.bind(this);
    this.onPhotoPress = this.onPhotoPress.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onThumbnailPress = this.onThumbnailPress.bind(this);
    this.onPrevButtonPress = this.onPrevButtonPress.bind(this);
    this.onNextButtonPress = this.onNextButtonPress.bind(this);
    this.toggleSignature = this.toggleSignature.bind(this);
    this.hideSignature = this.hideSignature.bind(this);
    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
    this.onResetTransform = this.onResetTransform.bind(this);
    this.onRotate = this.onRotate.bind(this);
  }

  componentDidMount() {
    this.checkInitialIndex();
    this.onCheckFullScreen();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activePhotoIndex !== this.state.activePhotoIndex) {
      this.onResetTransform();
      this.onResetRotation();
    }
    this.onCheckFullScreen();
  }

  onCheckFullScreen = () => {
    const currentType = this.getPhotoByIndex(this.state.activePhotoIndex).type;
    if (currentType === "video") {
      this.props.onShowFullScreen();
    }
    if (currentType === "image") {
      this.props.onHideFullScreen();
    }
  };

  checkInitialIndex = () => {
    if (this.props.initialIndex) {
      this.setState({ activePhotoIndex: this.props.initialIndex });
    }
  };

  onResetRotation = () => {
    this.setState({
      rotation: 0,
    });
  };

  onNextButtonPress() {
    const { nextButtonPressed } = this.props;
    this.next();
    nextButtonPressed();
  }

  onPrevButtonPress() {
    const { prevButtonPressed } = this.props;
    this.prev();
    prevButtonPressed();
  }

  onPhotoLoad() {
    return this.setState({ controlsDisabled: false });
  }

  onPhotoError() {
    return this.setState({ controlsDisabled: false });
  }

  onPhotoPress() {
    // const { activePhotoPressed } = this.props;
    // this.move(DIRECTION_NEXT);
    // activePhotoPressed();
  }

  onTouchStart(event) {
    this.setState({
      touchStartInfo: event.targetTouches[0],
    });
  }

  onTouchMove(event) {
    this.setState({
      touchMoved: true,
      touchEndInfo: event.targetTouches[0],
    });
  }

  onTouchEnd() {
    const { touchStartInfo, touchEndInfo, touchMoved } = this.state;

    if (touchMoved) {
      if (touchStartInfo.screenX < touchEndInfo.screenX) {
        this.onPrevButtonPress();
      } else if (touchStartInfo.screenX > touchEndInfo.screenX) {
        this.onNextButtonPress();
      }
    }

    this.setState({ touchMoved: false });
  }

  onThumbnailPress(index) {
    this.to(index);
  }

  getPhotoByIndex(index) {
    const { photos } = this.props;
    return photos[index];
  }

  getItemByDirection(direction, activeIndex) {
    const { photos, wrap } = this.props;

    const isNextDirection = direction === DIRECTION_NEXT;
    const isPrevDirection = direction === DIRECTION_PREV;

    const lastItemIndex = photos.length - 1;
    const isGoingToWrap =
      (isPrevDirection && activeIndex === 0) ||
      (isNextDirection && activeIndex === lastItemIndex);

    if (isGoingToWrap && wrap) {
      return activeIndex;
    }

    const delta = isPrevDirection ? -1 : 1;
    const itemIndex = (activeIndex + delta) % photos.length;
    return itemIndex === -1 ? photos.length - 1 : itemIndex;
  }

  getStyles() {
    const { backgroundColor } = this.props;

    return {
      backgroundColor,
    };
  }

  prev() {
    this.onResetTransform();
    return this.move(DIRECTION_PREV);
  }

  next() {
    this.onResetTransform();
    return this.move(DIRECTION_NEXT);
  }

  move(direction, index = false) {
    const { activePhotoIndex } = this.state;

    const nextElementIndex =
      index !== false
        ? index
        : this.getItemByDirection(direction, activePhotoIndex);

    this.wrapCheck(direction, nextElementIndex);

    this.setState({
      activePhotoIndex: nextElementIndex,
    });
  }

  to(index) {
    const { photos } = this.props;
    const { activePhotoIndex } = this.state;

    if (index > photos.length - 1 || index < 0 || activePhotoIndex === index) {
      return; // nothing to do
    }

    const direction =
      index > activePhotoIndex ? DIRECTION_NEXT : DIRECTION_PREV;

    this.move(direction, index);
  }

  wrapCheck(direction, nextElementIndex) {
    const { photos, wrap } = this.props;

    if (wrap) {
      this.setState({
        hideNextButton: nextElementIndex === photos.length - 1,
        hidePrevButton: nextElementIndex === 0,
      });
    }
  }

  renderControls() {
    const { light } = this.props;

    const { hidePrevButton, hideNextButton, controlsDisabled } = this.state;

    const controls = [];

    if (this.hasMoreThanOnePhoto) {
      // previous control
      if (!hidePrevButton) {
        controls.push(
          <PrevButton
            key=".prevControl"
            disabled={controlsDisabled}
            onPress={this.onPrevButtonPress}
            light={light}
          />
        );
      }

      // next control
      if (!hideNextButton) {
        controls.push(
          <NextButton
            key=".nextControl"
            disabled={controlsDisabled}
            onPress={this.onNextButtonPress}
            light={light}
          />
        );
      }
    }

    return controls;
  }

  renderPreloadPhotos(current) {
    const { photos, preloadSize } = this.props;
    let counter = 1;
    let index = current;
    let photo = null;
    const preloadPhotos = [];

    while (index < photos.length && counter <= preloadSize) {
      photo = photos[index];
      preloadPhotos.push(
        <img key={photo.photo} alt={photo.photo} src={photo.photo} />
      );
      index += 1;
      counter += 1;
    }
  }

  onRotate() {
    this.setState(
      (prevState) => ({
        rotation: prevState.rotation + 90,
      }),
      () => {
        if (this.state.rotation > 270) {
          this.setState({
            rotation: 0,
          });
        }
      }
    );
  }

  transformerProps(current) {
    if (current.type === "video") {
      return {
        disabled: true,
      };
    }
    return {
      disabled: false,
    };
  }

  hideSignature() {
    if (this.state.signatureVisible) {
      this.setState({
        signatureVisible: false,
      });
    }
  }

  toggleSignature() {
    if (!this.state.signatureVisible) {
      this.setState({
        signatureVisible: true,
      });
    }
  }

  onZoomIn() {}

  onZoomOut() {}

  onResetTransform() {}

  render() {
    const {
      photos,
      showThumbnails,
      phrases,
      onDownload,
      onForward,
      avatarElement,
      toFavourites,
      isFavourite,
    } = this.props;

    const { noPhotosProvided: emptyMessage } = phrases;

    const { activePhotoIndex } = this.state;

    // preload photos
    const galleryModalPreloadPhotos = this.renderPreloadPhotos(
      activePhotoIndex
    );

    const controls = this.renderControls();

    const current = this.getPhotoByIndex(activePhotoIndex);

    const galleryStyles = this.getStyles();

    const youtubeRegex = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
    const isYoutube = (url) => youtubeRegex.test(url);

    const renderVideo = (url) => {
      if (isYoutube(url)) {
        return (
          <iframe
            className="fslightbox-youtube"
            src={`https://www.youtube.com/embed/${getYoutubeVideoIdFromUrl(
              url
            )}`}
            allowFullScreen={true}
            title={getYoutubeVideoIdFromUrl(url)}
          />
        );
      } else {
        return (
          <>
            <Video source={url} onFullScreen={this.props.onFullScreen} />
          </>
        );
      }
    };

    return (
      <div className="gallery" style={galleryStyles}>
        <div className="one">
          {controls}
          <div
            className="two"
            onMouseOver={this.toggleSignature}
            onMouseLeave={this.hideSignature}
          >
            <div className="three">
              {this.hasPhotos ? (
                <>
                  <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={0}
                    defaultPositionY={0}
                    options={this.transformerProps(current)}
                  >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => {
                      this.onZoomIn = zoomIn;
                      this.onZoomOut = zoomOut;
                      this.onResetTransform = resetTransform;
                      return (
                        <TransformComponent>
                          <>
                            <div className="photo-2">
                              {current.type === "image" ? (
                                <Photo
                                  photo={current}
                                  onLoad={this.onPhotoLoad}
                                  onError={this.onPhotoError}
                                  onPress={this.onPhotoPress}
                                  onTouchStart={this.onTouchStart}
                                  onTouchMove={this.onTouchMove}
                                  onTouchEnd={this.onTouchEnd}
                                  rotation={this.state.rotation}
                                />
                              ) : (
                                renderVideo(current.photo)
                              )}
                            </div>
                          </>
                        </TransformComponent>
                      );
                    }}
                  </TransformWrapper>

                  {this.state.signatureVisible && (
                    <GallerySignature
                      photos={photos}
                      currentIndex={activePhotoIndex}
                      toggleSignature={this.toggleSignature}
                      hideSignature={this.hideSignature}
                    />
                  )}
                </>
              ) : (
                <div className="gallery-empty">{emptyMessage}</div>
              )}
              {/* <div className="box">

              </div> */}
            </div>
            {/* {this.hasPhotos ? (
              <>
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={0}
                  defaultPositionY={0}
                  options={this.transformerProps(current)}
                >
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => {
                    this.onZoomIn = zoomIn;
                    this.onZoomOut = zoomOut;
                    this.onResetTransform = resetTransform;
                    return (
                      <TransformComponent>
                        <>
                          <div className="gallery-photo">
                            <div className="gallery-photo--current">
                              {current.type === "image" ? (
                                <Photo
                                  photo={current}
                                  onLoad={this.onPhotoLoad}
                                  onError={this.onPhotoError}
                                  onPress={this.onPhotoPress}
                                  onTouchStart={this.onTouchStart}
                                  onTouchMove={this.onTouchMove}
                                  onTouchEnd={this.onTouchEnd}
                                  rotation={this.state.rotation}
                                />
                              ) : (
                                renderVideo(current.photo)
                              )}
                            </div>
                          </div>
                        </>
                      </TransformComponent>
                    );
                  }}
                </TransformWrapper>

                {this.state.signatureVisible && (
                  <GallerySignature
                    photos={photos}
                    currentIndex={activePhotoIndex}
                    toggleSignature={this.toggleSignature}
                    hideSignature={this.hideSignature}
                  />
                )}
              </>
            ) : (
              <div className="gallery-empty">{emptyMessage}</div>
            )} */}
          </div>
        </div>

        {current.type === "image" && (
          <GalleryZoomButtons
            onZoomIn={this.onZoomIn}
            onZoomOut={this.onZoomOut}
          />
        )}

        <div className="gallery-bottom">
          <GalleryBottom
            photos={photos}
            currentIndex={activePhotoIndex}
            onDownload={onDownload}
            onForward={onForward}
            onRotate={this.onRotate}
            toFavourites={toFavourites}
            isFavourite={isFavourite}
          />
        </div>
        {/* {showThumbnails && current && (
          <Caption
            phrases={phrases}
            current={activePhotoIndex}
            photos={photos}
            onPress={this.onThumbnailPress}
            onDownload={onDownload}
          />
        )} */}
      </div>
    );
  }
}

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
