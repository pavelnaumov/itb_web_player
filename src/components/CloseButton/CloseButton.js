import React from 'react'
import PropTypes from 'prop-types'

import { forbidExtraProps } from '../../common/prop-types'
import noop from '../../utils/noop'

import { NORMAL_COLOR, INVERSE_COLOR } from '../../constants'

const CLOSE_PATH =
  'm23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22'

const buttonStyle = {
  height: '2em',
  width: '2em',
  display: 'block',
  fill: NORMAL_COLOR
}

const buttonStyleLight = {
  fill: INVERSE_COLOR
}

const propTypes = forbidExtraProps({
  onPress: PropTypes.func,
  light: PropTypes.bool
})

const defaultProps = {
  onPress: noop,
  light: false
}

const CloseButton = ({ onPress, light, isGold }) => (
  <button
    onClick={onPress}
    className='gallery-close'
    type='button'
    aria-busy={false}
  >
    {isGold ? (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='12' r='12' fill='url(#paint0_linear)' />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.47719 6.66804L12.0005 11.1903L16.5237 6.66808C16.72 6.47176 17.0282 6.44555 17.2532 6.60144L17.3659 6.69819C17.5563 6.89149 17.5563 7.25376 17.3329 7.47722L12.8086 11.9985L17.3328 16.5237C17.5292 16.72 17.5554 17.0282 17.3995 17.2532L17.3027 17.3659C17.1094 17.5563 16.7472 17.5563 16.5237 17.3329L12.0005 12.8086L7.47715 17.3329C7.28091 17.5292 6.97273 17.5554 6.74771 17.3995L6.63507 17.3027C6.4446 17.1094 6.4446 16.7472 6.66806 16.5237L11.1903 11.9985L6.668 7.47716C6.47175 7.28091 6.44555 6.97273 6.60144 6.74771L6.69819 6.63507C6.89148 6.4446 7.25375 6.4446 7.47719 6.66804Z'
          fill='white'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='-3.80945'
            y1='-6.31797'
            x2='-3.55151'
            y2='26.257'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FFEB9E' stop-opacity='0.8' />
            <stop offset='1' stop-color='#7C667B' stop-opacity='0.698039' />
          </linearGradient>
        </defs>
      </svg>
    ) : (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='12' r='12' fill='black' fill-opacity='0.8' />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.47671 6.66755L12 11.1899L16.5232 6.66759C16.7195 6.47127 17.0277 6.44507 17.2527 6.60095L17.3654 6.69771C17.5558 6.891 17.5558 7.25327 17.3324 7.47673L12.8081 11.998L17.3324 16.5232C17.5287 16.7195 17.5549 17.0277 17.399 17.2527L17.3022 17.3654C17.1089 17.5558 16.7467 17.5558 16.5232 17.3324L12 12.8081L7.47667 17.3324C7.28042 17.5287 6.97224 17.5549 6.74722 17.399L6.63458 17.3022C6.44411 17.1089 6.44411 16.7467 6.66757 16.5232L11.1899 11.998L6.66751 7.47667C6.47127 7.28042 6.44506 6.97224 6.60095 6.74722L6.6977 6.63458C6.89099 6.44411 7.25326 6.44411 7.47671 6.66755Z'
          fill={'#AEAEAE'}
        />
      </svg>
    )}
  </button>
)

CloseButton.propTypes = propTypes
CloseButton.defaultProps = defaultProps

export default CloseButton
