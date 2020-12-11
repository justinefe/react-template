import React from "react";

const Succes = ({ height, width, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 468.293 468.293'
        style={{
          enableBackground: "new 0 0 468.293 468.293",
          height: height,
          width: width,
        }}
      >
        <circle
          style={{ fill: "#7eba4d" }}
          cx='234.146'
          cy='234.146'
          r='234.146'
        />
        <polygon
          style={{ fill: "#EBF0F3" }}
          points='357.52,110.145 191.995,275.67 110.773,194.451 69.534,235.684 191.995,358.148 
   398.759,151.378 '
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
};

export default Succes;
