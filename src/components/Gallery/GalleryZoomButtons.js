import React from "react";

const GalleryZoomButtons = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="gallery-zoom-buttons">
      <div onClick={onZoomOut}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.801506 0.531982C0.545821 0.531982 0.333691 0.738704 0.333252 0.987928L0.335381 1.03981L0.344167 1.09542C0.391345 1.31287 0.579923 1.4679 0.801506 1.4679H9.19833C9.45402 1.4679 9.66615 1.26118 9.66658 1.01195L9.66446 0.960072L9.65567 0.904462C9.60849 0.68701 9.41991 0.531982 9.19833 0.531982H0.801506Z"
            fill="white"
          />
        </svg>
      </div>
      <>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.9109 0C3.09412 0 0 3.083 0 6.88608C0 10.6892 3.09412 13.7722 6.9109 13.7722C8.57835 13.7722 10.1079 13.1837 11.3017 12.2039L15.1115 16L16 15.1147L12.1955 11.3238C13.2102 10.1253 13.8218 8.57687 13.8218 6.88608C13.8218 3.083 10.7277 0 6.9109 0ZM6.9109 1.25201C10.0337 1.25201 12.5653 3.77447 12.5653 6.88608C12.5653 9.99769 10.0337 12.5201 6.9109 12.5201C3.78808 12.5201 1.25653 9.99769 1.25653 6.88608C1.25653 3.77447 3.78808 1.25201 6.9109 1.25201ZM7.44029 9.0636C7.44029 9.40955 7.21292 9.63057 6.88175 9.63057C6.55058 9.63057 6.32321 9.40955 6.32321 9.0636V7.4636H4.8107C4.45481 7.4636 4.22744 7.25219 4.22744 6.93027C4.22744 6.61315 4.45481 6.39693 4.8107 6.39693H6.32321V4.8642C6.32321 4.52306 6.54564 4.29724 6.88175 4.29724C7.21292 4.29724 7.44029 4.52306 7.44029 4.8642V6.39693H8.97258C9.3334 6.39693 9.56078 6.60835 9.56078 6.93027C9.56078 7.25219 9.3334 7.4636 8.97258 7.4636H7.44029V9.0636Z"
            fill="#AEAEAE"
          />
        </svg>
      </>
      <div onClick={onZoomIn}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.01193 0.333252L4.95678 0.335554L4.89179 0.346313C4.70187 0.39501 4.56547 0.545926 4.53731 0.730771L4.53236 0.790858L4.53181 4.53181L0.801506 4.53196C0.545821 4.53196 0.333691 4.73868 0.333252 4.98791L0.335381 5.03979L0.344167 5.0954C0.391345 5.31285 0.579923 5.46788 0.801506 5.46788L4.53181 5.46753L4.53196 9.19833C4.53196 9.45402 4.73868 9.66615 4.98791 9.66658L5.03979 9.66446L5.0954 9.65567C5.31285 9.60849 5.46788 9.41991 5.46788 9.19833L5.46753 5.46753L9.19833 5.46788C9.45402 5.46788 9.66615 5.26115 9.66658 5.01193L9.66446 4.96005L9.65567 4.90444C9.60849 4.68699 9.41991 4.53196 9.19833 4.53196L5.46753 4.53181L5.46788 0.801506C5.46788 0.545821 5.26115 0.333691 5.01193 0.333252Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default GalleryZoomButtons;
