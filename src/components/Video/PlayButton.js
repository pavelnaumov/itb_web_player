import React, { useMemo } from "react";

const PlayButton = ({ onPlay }) => {
  const styles = useMemo(
    () => ({
      cursor: "pointer",
    }),
    []
  );
  return (
    <div style={styles} onClick={onPlay} className="play-button-wrapper">
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter110311_d)">
          <circle cx="43" cy="34" r="15" fill="black" fill-opacity="0.01" />
        </g>
        <g filter="url(#filter1111255_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.9289 20.0711C40.8342 16.1658 47.1658 16.1658 51.0711 20.0711L58.9289 27.9289C62.8342 31.8342 62.8342 38.1658 58.9289 42.0711L51.0711 49.9289C47.1658 53.8342 40.8342 53.8342 36.9289 49.9289L29.0711 42.0711C25.1658 38.1658 25.1658 31.8342 29.0711 27.9289L36.9289 20.0711Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter2210005_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.6707 42.04C41.0026 42.04 41.295 41.9196 41.6585 41.7028L50.9908 36.2201C51.6704 35.8188 51.9549 35.5057 51.9549 35C51.9549 34.4942 51.6704 34.1892 50.9908 33.7798L41.6585 28.2971C41.295 28.0804 41.0026 27.96 40.6707 27.96C40.0228 27.96 39.5645 28.4657 39.5645 29.2604V40.7395C39.5645 41.5423 40.0228 42.04 40.6707 42.04Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter110311_d"
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
            id="filter1111255_d"
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
          <filter
            id="filter2210005_d"
            x="31.5645"
            y="23.96"
            width="28.3904"
            height="30.08"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.556863 0 0 0 0.6 0"
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
          <linearGradient
            id="paint0_linear"
            x1="37.8146"
            y1="35.728"
            x2="47.7019"
            y2="42.6888"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FD5A8D" />
            <stop offset="1" stop-color="#FF8F8F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PlayButton;
