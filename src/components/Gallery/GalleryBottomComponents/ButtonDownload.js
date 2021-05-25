import React, { useMemo } from 'react'
import Tooltip from '../../Tooltip/Tooltip'

const ButtonDownload = ({ onDownload, isGold }) => {
  const styles = useMemo(
    () => ({
      cursor: 'pointer'
    }),
    []
  )
  return (
    <div
      className='bottom__button-download'
      onClick={onDownload}
      style={styles}
    >
      <Tooltip
        content='Скачать'
        direction='top'
        withTooltip={true}
        delayShow={450}
        delayHide={150}
      >
        <svg
          width='88'
          height='88'
          viewBox='0 0 88 88'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d)'>
            <circle cx='43' cy='34' r='15' fill='black' fill-opacity='0.01' />
          </g>
          <g filter='url(#filter1_d)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M36.9289 20.0711C40.8342 16.1658 47.1658 16.1658 51.0711 20.0711L58.9289 27.9289C62.8342 31.8342 62.8342 38.1658 58.9289 42.0711L51.0711 49.9289C47.1658 53.8342 40.8342 53.8342 36.9289 49.9289L29.0711 42.0711C25.1658 38.1658 25.1658 31.8342 29.0711 27.9289L36.9289 20.0711Z'
              fill='white'
            />
          </g>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M51.3928 40.2373C51.0841 40.2373 50.8355 40.4739 50.8355 40.7636C50.8355 41.8432 50.0014 42.741 48.9111 42.879L48.7537 42.8935L48.6205 42.8973H39.3796C38.1571 42.8973 37.1646 41.943 37.1646 40.7636C37.1646 40.4739 36.916 40.2373 36.6073 40.2373C36.2986 40.2373 36.05 40.4739 36.05 40.7636C36.05 42.4025 37.3469 43.7625 39.0241 43.9322L39.212 43.9461L39.3796 43.95H48.6205C50.4603 43.95 51.95 42.5225 51.95 40.7636C51.95 40.4739 51.7015 40.2373 51.3928 40.2373ZM44.0001 26.05C42.7788 26.05 41.7639 26.9224 41.6138 28.0571L41.5988 28.2134L41.5946 28.3498L41.5446 32.2569H39.4209C39.09 32.2569 38.7687 32.3626 38.5081 32.5571C37.9437 32.9783 37.7828 33.7169 38.099 34.3088L38.1741 34.4332L38.249 34.5343L42.8282 40.1836C42.9034 40.2764 42.9905 40.3599 43.0873 40.4322C43.6562 40.8567 44.4539 40.8237 44.9795 40.3801L45.0878 40.2787L45.172 40.1836L49.7512 34.5343C49.9519 34.2867 50.0607 33.9827 50.0607 33.67C50.0607 32.9779 49.5364 32.3952 48.839 32.2784L48.6973 32.2613L48.5793 32.2569L46.4055 32.2069V28.3498C46.4055 27.0806 45.3295 26.05 44.0001 26.05ZM44.0001 27.1028C44.6239 27.1028 45.151 27.5323 45.2673 28.1119L45.2859 28.2383L45.291 28.3498V32.7833C45.291 33.017 45.4539 33.2193 45.6809 33.286L45.7688 33.3045L45.8483 33.3096H48.4216C48.6635 33.3096 48.8595 33.5057 48.8595 33.7476C48.8595 33.8229 48.8401 33.8965 48.8037 33.9615L48.7618 34.0233L44.3403 39.4781C44.188 39.666 43.9122 39.6948 43.7243 39.5425L43.6904 39.512L43.6599 39.4781L39.2384 34.0233C39.0861 33.8354 39.1149 33.5597 39.3028 33.4074C39.3613 33.3599 39.4307 33.3287 39.5041 33.316L39.5786 33.3096H42.1519C42.4014 33.3096 42.6145 33.1542 42.6845 32.9404L42.7038 32.8577L42.7092 32.7833V28.3498C42.7092 27.6602 43.288 27.1028 44.0001 27.1028Z'
            fill={isGold ? '#91586a' : '#FF4A7D'}
          />
          <defs>
            <filter
              id='filter0_d'
              x='22'
              y='15'
              width='42'
              height='42'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.191898 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d'
              x='0.142151'
              y='0.142136'
              width='87.7157'
              height='87.7157'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              />
              <feOffset dy='9' />
              <feGaussianBlur stdDeviation='13' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.613989 0 0 0 0 0.613989 0 0 0 0 0.613989 0 0 0 0.45 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </Tooltip>
    </div>
  )
}

export default ButtonDownload
