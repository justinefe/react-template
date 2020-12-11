import React from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const Loader = ({ size, color, ma }) => {
  const override = css`
    margin: ${ma}px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div className='sweet-loading'>
      <PulseLoader css={override} size={size} color={color} loading='true' />
    </div>
  );
};

export default Loader;
