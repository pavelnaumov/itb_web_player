import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import { forbidExtraProps } from '../../common/prop-types'
import noop from '../../utils/noop'

import { NORMAL_COLOR, INVERSE_COLOR } from '../../constants'

const controlStyle = {
  height: '2.8em',
  width: '2.8em',
  fill: NORMAL_COLOR
}

const controlStyleLight = {
  fill: INVERSE_COLOR
}

const propTypes = forbidExtraProps({
  arrow: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool
})

const defaultProps = {
  arrow: null,
  onPress: noop,
  label: '',
  className: null,
  disabled: false,
  light: false
}

class Control extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    const { onPress } = this.props
    onPress()
    return false
  }

  render() {
    const { arrow, label, className, disabled, light, isGold } = this.props

    return (
      <button
        type='button'
        className={classnames('gallery-control', className)}
        onClick={this.onButtonPress}
        disabled={disabled}
        aria-label={label}
      >
        <svg
          width='44'
          height='44'
          viewBox='0 0 44 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M29.0711 7.07107C25.1658 3.16583 18.8342 3.16583 14.9289 7.07107L7.07108 14.9289C3.16583 18.8342 3.16582 25.1658 7.07107 29.0711L14.9289 36.9289C18.8342 40.8342 25.1658 40.8342 29.0711 36.9289L36.9289 29.0711C40.8342 25.1658 40.8342 18.8342 36.9289 14.9289L29.0711 7.07107Z'
            fill={isGold ? 'white' : 'black'}
            fill-opacity={isGold ? '1' : '0.8'}
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M19.1811 12.2262C18.9191 12.5106 18.9446 12.9501 19.2369 13.2036L28.0662 20.8609L28.1501 20.9439C28.7812 21.6359 28.7158 22.6678 28.0165 23.2676L19.2398 30.7939C18.946 31.0458 18.9181 31.4852 19.1785 31.771C19.4343 32.0517 19.8717 32.0777 20.1602 31.8304L28.9369 24.304C29.4846 23.8343 29.8395 23.2015 29.9491 22.5154L29.9968 22.1117L30 21.9762C29.9997 21.9064 29.9936 21.8275 29.9828 21.753L29.9143 21.3872C29.8073 20.9014 29.5642 20.4331 29.2067 20.0408C29.1261 19.9524 29.0402 19.8686 28.9495 19.79L20.163 12.1721C19.876 11.9232 19.4384 11.9469 19.1811 12.2262Z'
            fill={isGold ? '#91586a' : 'white'}
          />
        </svg>
      </button>
    )
  }
}

Control.propTypes = propTypes
Control.defaultProps = defaultProps

export default Control
