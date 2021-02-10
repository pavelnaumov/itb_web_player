import React, { useMemo } from "react";

const ButtonRotate = ({ onRotate }) => {
  const styles = useMemo(
    () => ({
      cursor: "pointer",
    }),
    []
  );
  return (
    <div onClick={onRotate} style={styles}>
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="43" cy="34" r="15" fill="black" fill-opacity="0.01" />
        </g>
        <g filter="url(#filter1_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.9289 20.0711C40.8342 16.1658 47.1658 16.1658 51.0711 20.0711L58.9289 27.9289C62.8342 31.8342 62.8342 38.1658 58.9289 42.0711L51.0711 49.9289C47.1658 53.8342 40.8342 53.8342 36.9289 49.9289L29.0711 42.0711C25.1658 38.1658 25.1658 31.8342 29.0711 27.9289L36.9289 20.0711Z"
            fill="white"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.5686 38.9112C36.5686 39.3617 36.217 39.726 35.7843 39.726C35.3516 39.726 35 39.3617 35 38.9112V33.6734C35 31.191 36.9409 29.1794 39.3343 29.1794H45.2522L42.5706 26.3916C42.2635 26.0733 42.2635 25.5563 42.5706 25.238C42.8768 24.9207 43.3723 24.9207 43.6785 25.238L46.9255 28.6118C47.3511 29.0529 47.5019 29.5501 47.4566 29.9379C47.3806 30.589 46.5503 30.809 45.8949 30.809H45.3711H39.3343C37.8064 30.809 36.5686 32.0919 36.5686 33.6734V38.9112ZM53 34.0185C53 33.5164 52.593 33.1094 52.0909 33.1094H39.7219C39.2198 33.1094 38.8128 33.5164 38.8128 34.0185V44.0909C38.8128 44.593 39.2198 45 39.7219 45H52.0909C52.593 45 53 44.593 53 44.0909V34.0185ZM40.15 43.628V34.4888H51.67L51.6628 43.6206L40.15 43.628Z"
          fill="#FF4A7D"
        />
        <defs>
          <filter
            id="filter0_d"
            x="22"
            y="15"
            width="42"
            height="42"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.191898 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="0.142151"
            y="0.142151"
            width="87.7157"
            height="87.7157"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="9" />
            <feGaussianBlur stdDeviation="13" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.613989 0 0 0 0 0.613989 0 0 0 0 0.613989 0 0 0 0.45 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ButtonRotate;
