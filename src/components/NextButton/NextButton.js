import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Control from '../Control'

import { forbidExtraProps } from '../../common/prop-types'
import noop from '../../utils/noop'

const NEXT_ARROW =
  'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z'

const propTypes = forbidExtraProps({
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  light: PropTypes.bool
})

const defaultProps = {
  onPress: noop,
  disabled: false,
  light: false
}

class NextButton extends PureComponent {
  render() {
    const { onPress, disabled, light, isGold } = this.props

    return (
      <Control
        className='gallery-control--next'
        onPress={onPress}
        arrow={NEXT_ARROW}
        light={light}
        isGold={isGold}
      />
    )
  }
}

NextButton.propTypes = propTypes
NextButton.defaultProps = defaultProps

export default NextButton
