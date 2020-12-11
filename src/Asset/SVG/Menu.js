import React from "react";

const Menu = ({ height, width, className, onClick }) => {
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
          <rect x='0' y='277.333' width='384' height='42.667' />
          <rect x='0' y='170.667' width='384' height='42.667' />
          <rect x='0' y='64' width='384' height='42.667' />
        </g>
      </svg>
    </div>
  );
};

export default Menu;
