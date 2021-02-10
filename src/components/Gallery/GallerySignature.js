import React, { useMemo } from "react";

const GallerySignature = ({
  photos,
  currentIndex,
  toggleSignature,
  hideSignature,
}) => {
  const mediaItem = useMemo(() => photos[currentIndex], [currentIndex, photos]);

  if (!mediaItem.signature) {
    return <></>;
  }
  return (
    <div
      className="gallery-photo-signature"
      onMouseOver={toggleSignature}
      onMouseLeave={hideSignature}
    >
      <div className="gallery-photo-signature__inner">
        <p>{mediaItem.signature}</p>
      </div>
    </div>
  );
};

export default GallerySignature;
