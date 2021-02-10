/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";
import { Portal } from "react-portal";
import screenfull from "screenfull";

import omit from "lodash/omit";
import classnames from "classnames";

import Gallery from "./components/Gallery";
import CloseButton from "./components/CloseButton";
import FullScreenButton from "./components/FullScreen/FullScreenButton";

import opacityValidation from "./common/opacityValidation";
import noop from "./utils/noop";
import getPhotos from "./utils/getPhotos";

import {
  ARROW_LEFT_KEYCODE,
  ARROW_RIGHT_KEYCODE,
  ESC_KEYCODE,
  DEFAULT_OPACITY,
  DEFAULT_Z_INDEX,
} from "./constants";

import { galleryPropTypes, galleryDefaultProps } from "./common";

import { forbidExtraProps, nonNegativeInteger } from "./common/prop-types";

import "./scss/style.scss";

const propTypes = forbidExtraProps({
  ...galleryPropTypes,
  leftKeyPressed: PropTypes.func,
  onClose: PropTypes.func,
  rightKeyPressed: PropTypes.func,
  show: PropTypes.bool,
  keyboard: PropTypes.bool,
  opacity: opacityValidation,
  zIndex: nonNegativeInteger,
});

const defaultProps = {
  ...galleryDefaultProps,
  leftKeyPressed: noop,
  onClose: noop,
  rightKeyPressed: noop,
  show: false,
  keyboard: true,
  opacity: DEFAULT_OPACITY,
  zIndex: DEFAULT_Z_INDEX,
};

class ReactBnbGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      showFullScreen: false,
    };
    this.gallery = React.createRef();
    this.close = this.close.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onShowFullScreen = this.onShowFullScreen.bind(this);
    this.onHideFullScreen = this.onHideFullScreen.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.photos !== state.photos) {
      return {
        photos: getPhotos(props.photos),
      };
    }
    return null;
  }

  onShowFullScreen() {
    if (!this.state.showFullScreen) {
      this.setState({
        showFullScreen: true,
      });
    }
  }

  onHideFullScreen() {
    if (this.state.showFullScreen) {
      this.setState({
        showFullScreen: false,
      });
    }
  }

  onFullScreen = (cb) => {
    const videoPlayer = document.getElementById("fullscreen-wrapper");
    screenfull.toggle(videoPlayer);
  };

  onKeyDown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    switch (event.which) {
      case ESC_KEYCODE:
        event.preventDefault();
        this.close();
        break;

      case ARROW_LEFT_KEYCODE:
        event.preventDefault();
        this.gallery.current.prev();
        break;

      case ARROW_RIGHT_KEYCODE:
        event.preventDefault();
        this.gallery.current.next();
        break;

      default:
    }
  }

  getModalOverlayStyles() {
    const { opacity, backgroundColor } = this.props;

    return {
      opacity,
      backgroundColor,
    };
  }

  close() {
    const { onClose } = this.props;
    onClose();
  }

  render() {
    const {
      show,
      phrases,
      keyboard,
      light,
      zIndex,
      onDownload,
      onForward,
      toFavourites,
      isFavourite,
    } = this.props;

    const { photos } = this.state;

    if (!show) {
      return null; // nothing to return
    }

    const {
      wrap,
      activePhotoIndex,
      activePhotoPressed,
      direction,
      nextButtonPressed,
      prevButtonPressed,
      showThumbnails,
      preloadSize,
      initialIndex,
      onAssignIndex,
    } = omit(this.props, [
      "onClose",
      "leftKeyPressed",
      "rightKeyPressed",
      "show",
      "photos",
      "opacity",
      "backgroundColor",
      "zIndex",
      "keyboard",
    ]);

    // modal overlay customization styles
    const galleryModalOverlayStyles = this.getModalOverlayStyles();

    const modalStyle = {
      zIndex,
    };

    return (
      <Portal>
        <FocusTrap>
          <div
            className={classnames(["gallery-modal", light && "mode-light"])}
            onKeyDown={keyboard && this.onKeyDown}
            tabIndex="-1"
            role="dialog"
            style={modalStyle}
          >
            <div
              style={galleryModalOverlayStyles}
              className="gallery-modal--overlay"
            />
            <div className="gallery-modal--container">
              <div className="gallery-modal--table">
                <div className="gallery-modal--cell">
                  <div className="gallery-modal--content">
                    <div className="gallery-modal--close">
                      {this.state.showFullScreen && (
                        <FullScreenButton onFullScreen={this.onFullScreen} />
                      )}
                      <CloseButton onPress={this.close} light={light} />
                    </div>
                    <div className="gallery-content">
                      {/* TODO: */}
                      {/**
                       * avatarElement: ReactNode
                       * onDownload: () => void
                       * onForward: () => void
                       * toFavourites: () = void
                       * isFavourite: boolean
                       *
                       */}
                      <Gallery
                        phrases={phrases}
                        ref={this.gallery}
                        photos={photos}
                        wrap={wrap}
                        activePhotoIndex={activePhotoIndex}
                        activePhotoPressed={activePhotoPressed}
                        direction={direction}
                        nextButtonPressed={nextButtonPressed}
                        prevButtonPressed={prevButtonPressed}
                        showThumbnails={showThumbnails}
                        preloadSize={preloadSize}
                        backgroundColor={null}
                        light={light}
                        initialIndex={initialIndex}
                        onDownload={onDownload}
                        onForward={onForward}
                        toFavourites={toFavourites}
                        isFavourite={isFavourite}
                        onShowFullScreen={this.onShowFullScreen}
                        onHideFullScreen={this.onHideFullScreen}
                        onFullScreen={this.onFullScreen}
                        onAssignIndex={onAssignIndex}
                        forwardOverlay={this.props.forwardOverlay}
                        forwardOverlayVisible={this.props.forwardOverlayVisible}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FocusTrap>
      </Portal>
    );
  }
}

ReactBnbGallery.propTypes = propTypes;
ReactBnbGallery.defaultProps = defaultProps;

export default ReactBnbGallery;
