import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import omit from 'lodash/omit'
import classnames from 'classnames'

import Image from '../Image'
import PhotoShape from '../../shapes/PhotoShape'

import { imagePropTypes, imageDefaultProps } from '../../common'
import { forbidExtraProps } from '../../common/prop-types'
import noop from '../../utils/noop'

const propTypes = forbidExtraProps({
  ...imagePropTypes,
  photo: PhotoShape,
  onPress: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchEnd: PropTypes.func
})

const defaultProps = {
  ...imageDefaultProps,
  photo: null,
  onPress: noop,
  onTouchStart: noop,
  onTouchMove: noop,
  onTouchEnd: noop
}

class Photo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      height: 300,
      width: 300
    }
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    const { onPress } = this.props
    onPress()
  }

  imageLoaded = (height, width) => {
    this.setState({
      height,
      width
    })
  }

  renderPhoto() {
    const { photo, onTouchStart, onTouchMove, onTouchEnd, ...rest } = this.props

    if (!photo) {
      return null
    }

    const { onLoad, onError, style } = omit(rest, ['onPress'])

    const className =
      this.state.width < this.state.height ? 'photo-vertical' : 'photo'

    return (
      <Image
        alt={photo.caption || ''}
        className={className}
        src={photo.photo}
        onLoad={onLoad}
        onError={onError}
        style={style}
        imageLoaded={this.imageLoaded}
      />
    )
  }

  get onGetRotation() {
    const { rotation } = this.props
    switch (rotation) {
      case 0:
        return ''
      case 90:
        return 'rotate-90'

      case 180:
        return 'rotate-180'

      case 270:
        return 'rotate-270'

      case 360:
        return ''

      default:
        return ''
    }
  }

  render() {
    // const className = classnames(
    //   "gallery-media-photo",
    //   "gallery-media-photo--block",
    //   "gallery-media-cover",
    //   "gallery-media-test"
    // );

    const className = classnames('gallery-media-test')

    const { toggleSignature, hideSignature, rotation } = this.props

    const photoRendered = this.renderPhoto()

    return (
      <ul className={`gallery-images--ul ${this.onGetRotation}`}>
        <li className={className}>{photoRendered}</li>
      </ul>
    )
  }
}

Photo.propTypes = propTypes
Photo.defaultProps = defaultProps

export default Photo
