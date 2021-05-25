import React, { FC, useState, ReactNode, useEffect, useCallback } from 'react'
import './Tooltip.scss'

const Tooltip = ({
  children,
  content,
  direction,
  delayShow,
  delayHide,
  withTooltip,
  extraMargin
}) => {
  let timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delayShow || 400)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setTimeout(() => {
      setActive(false)
    }, delayHide || 100)
  }

  const additionalStyles = extraMargin
    ? {
        top: `${extraMargin}px`
      }
    : {}

  if (!withTooltip) {
    return <>{children}</>
  }

  return (
    <div
      className='Tooltip-Wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          style={additionalStyles}
          className={`Tooltip-Tip ${direction || 'top'}`}
        >
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip
