import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 5px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const StyledThumb = styled.div`
  height: 10px;
  width: 10px;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.16),
    0px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  top: -3px;
  :focus {
    outline: none;
  }
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${({ index }) =>
    index === 1 ? "rgba(151, 151, 151, 0.6)" : "#FF4A7D"};
  border-radius: 999px;
`;

const VideoSlider = ({
  value,
  name,
  min,
  max,
  step,
  onChange,
  onAfterChange,
  onBeforeChange,
  progress,
}) => {
  return (
    <>
      <StyledSlider
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
        min={min}
        max={max}
        step={step}
        name={name}
        value={value}
        onChange={onChange}
        renderTrack={(props, state) => (
          <StyledTrack {...props} index={state.index} />
        )}
        renderThumb={(props) => <StyledThumb {...props} />}
      />
    </>
  );
};
export default VideoSlider;
