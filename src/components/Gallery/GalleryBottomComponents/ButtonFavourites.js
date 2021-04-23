import React from 'react'

const ButtonFavourites = ({ toFavourites, isFavourite, isGold }) => {
  if (!isFavourite) {
    return (
      <div
        className={`bottom-button-to-favourites${isGold ? '-gold' : ''}`}
        onClick={toFavourites}
      >
        <p>В избранное</p>
      </div>
    )
  }
  return (
    <div
      className={`bottom-button-from-favourites${isGold ? '-gold' : ''}`}
      onClick={toFavourites}
    >
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8 16C12.3789 16 16 12.3789 16 8C16 3.61316 12.3789 0 7.99202 0C3.61316 0 0 3.61316 0 8C0 12.3789 3.62114 16 8 16ZM8 14.9631C4.13958 14.9631 1.03689 11.8524 1.03689 8C1.03689 4.13958 4.13958 1.02891 7.99202 1.02891C11.8524 1.02891 14.9631 4.13958 14.9711 8C14.9711 11.8524 11.8604 14.9631 8 14.9631ZM7.13858 11.7966C7.33799 11.7966 7.50548 11.7009 7.62512 11.5174L11.5015 5.45563C11.5733 5.34397 11.6451 5.2004 11.6451 5.07278C11.6451 4.8016 11.3978 4.61815 11.1426 4.61815C10.9831 4.61815 10.8315 4.71386 10.7119 4.88933L7.10668 10.5922L5.27218 8.32702C5.12861 8.14357 4.98504 8.07976 4.81755 8.07976C4.55434 8.07976 4.33898 8.29511 4.33898 8.57428C4.33898 8.70987 4.39482 8.83749 4.48255 8.95713L6.61216 11.5174C6.77169 11.7089 6.93121 11.7966 7.13858 11.7966Z'
          fill='white'
        />
      </svg>

      <p>В избранном</p>
    </div>
  )
}

export default ButtonFavourites
