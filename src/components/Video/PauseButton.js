import React from "react";

const PauseButton = ({ onPause }) => {
  const styles = React.useMemo(
    () => ({
      cursor: "pointer",
    }),
    []
  );
  return (
    <div onClick={onPause} style={styles}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter_1232323_d)">
          <rect x="5" y="3" width="32" height="32" rx="11" fill="white" />
        </g>
        <g filter="url(#filter9993322_d)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8724 12.7041C17.2892 12.7041 16.8164 13.1769 16.8164 13.7601V24.3201C16.8164 24.9033 17.2892 25.3761 17.8724 25.3761C18.4556 25.3761 18.9284 24.9033 18.9284 24.3201V13.7601C18.9284 13.1769 18.4556 12.7041 17.8724 12.7041ZM24.2084 12.7041C23.6252 12.7041 23.1524 13.1769 23.1524 13.7601V24.3201C23.1524 24.9033 23.6252 25.3761 24.2084 25.3761C24.7916 25.3761 25.2644 24.9033 25.2644 24.3201V13.7601C25.2644 13.1769 24.7916 12.7041 24.2084 12.7041Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter_1232323_d"
            x="0"
            y="0"
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
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.613989 0 0 0 0 0.613989 0 0 0 0 0.613989 0 0 0 0.6 0"
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
            id="filter9993322_d"
            x="8.81641"
            y="8.7041"
            width="24.448"
            height="28.672"
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
            x1="15.6233"
            y1="19.6953"
            x2="23.473"
            y2="23.882"
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

export default PauseButton;
