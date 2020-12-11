import React from "react";

const DropDown = ({ height, width, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        id='Capa_1'
        enableBackground='new 0 0 515.555 515.555'
        height={height}
        viewBox='0 0 515.555 515.555'
        width={width}
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <path
            d='M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
          s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
          C514.096,145.416,514.096,131.933,505.755,123.592z'
          />
        </g>{" "}
      </svg>
    </div>
  );
};

export default DropDown;
