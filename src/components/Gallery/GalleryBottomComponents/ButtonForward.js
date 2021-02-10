import React, { useMemo } from "react";

const ButtonForward = ({ onForward }) => {
  const styles = useMemo(
    () => ({
      cursor: "pointer",
    }),
    []
  );
  return (
    <div onClick={onForward} style={styles}>
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
          d="M44.8121 27.049L46.0466 28.3733V27.4939C46.0466 26.9449 46.4084 26.5 46.9652 26.5C47.3549 26.5 47.6147 26.6988 48.0137 27.049L54.4989 34.0061C54.8979 34.3942 55 34.7066 55 35C55 35.2934 54.8887 35.6058 54.4989 35.9939L48.0137 42.9889C47.6518 43.3107 47.3456 43.5 46.9559 43.5C46.4084 43.5 46.0466 43.093 46.0466 42.544V41.6574L44.8121 42.9889C44.4502 43.3107 44.144 43.5 43.7543 43.5C43.2069 43.5 42.845 43.093 42.845 42.544V38.7673H42.5202C38.6509 38.7673 36.2662 39.799 34.7723 42.8658C34.5125 43.3864 34.1691 43.5 33.8165 43.5C33.3804 43.5 33 43.1119 33 42.4399C33 35.2177 36.2198 31.2706 42.5202 31.2706H42.845V27.4939C42.845 26.9449 43.2069 26.5 43.7636 26.5C44.1533 26.5 44.4131 26.6988 44.8121 27.049ZM47.1879 28.1281V29.5976L51.2974 34.0061C51.6964 34.3942 51.7984 34.7066 51.7984 35C51.7984 35.2934 51.6871 35.6058 51.2974 35.9939L47.1879 40.4264V41.8057C47.1879 41.9003 47.2436 41.9666 47.3363 41.9666C47.392 41.9666 47.4477 41.9382 47.5219 41.8719L53.5525 35.3124C53.6917 35.1798 53.7288 35.0947 53.7288 35C53.7288 34.9053 53.6824 34.8202 53.5525 34.6876L47.5312 28.0807C47.4755 28.0334 47.4106 27.9861 47.3363 27.9861C47.2528 27.9861 47.1879 28.0429 47.1879 28.1281ZM44.3203 41.8719C44.2461 41.9382 44.1904 41.9666 44.1348 41.9666C44.042 41.9666 43.9863 41.9003 43.9863 41.8057V37.9532C43.9863 37.745 43.9028 37.6598 43.6987 37.6598H42.6687C38.1869 37.6598 35.3569 39.1364 34.2341 41.7962C34.197 41.8814 34.1691 41.9382 34.1135 41.9382C34.0485 41.9382 34.0207 41.8909 34.0207 41.8057C34.1413 36.4293 36.591 32.3781 42.6687 32.3781H43.6987C43.9028 32.3781 43.9863 32.2929 43.9863 32.0846V28.1281C43.9863 28.0429 44.0513 27.9861 44.1348 27.9861C44.209 27.9861 44.2739 28.0334 44.3296 28.0807L50.3509 34.6876C50.4808 34.8202 50.5272 34.9053 50.5272 35C50.5272 35.0947 50.4901 35.1798 50.3509 35.3124L44.3203 41.8719Z"
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
            y="0.142136"
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

export default ButtonForward;
