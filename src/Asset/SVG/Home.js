import React from "react";

const Close = React.forwardRef(
  ({ height, width, className, handleClick }, closeRef) => {
    return (
      <div ref={closeRef} className={className} onClick={handleClick}>
        <svg
          id='Capa_1'
          enableBackground='new 0 0 515.555 515.555'
          height={height}
          viewBox='0 0 515.555 515.555'
          width={width}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            {" "}
            <path d='m256 0c-108.81 0-197.33 88.52-197.33 197.33 0 61.2 31.66 132.28 94.11 211.26 45.7 57.79 90.74 97.74 92.63 99.41 6.011 5.297 15.086 5.37 21.18 0 1.89-1.67 46.93-41.62 92.63-99.41 62.45-78.98 94.11-150.06 94.11-211.26 0-108.81-88.52-197.33-197.33-197.33zm-88 280v-68.628c0-4.272-5.011-6.576-8.254-3.796l-5.336 4.574c-6.71 5.75-16.81 4.97-22.56-1.74s-4.97-16.81 1.74-22.56l112-96c5.99-5.13 14.83-5.13 20.82 0l112 96c6.71 5.75 7.49 15.85 1.74 22.56-5.786 6.735-15.878 7.467-22.56 1.74l-5.336-4.574c-3.243-2.78-8.254-.476-8.254 3.796v68.628c0 8.837-7.163 16-16 16h-144c-8.837 0-16-7.163-16-16z' />
            <path d='m200 175.37v83.63c0 2.761 2.239 5 5 5h102c2.761 0 5-2.239 5-5v-83.63c0-1.46-.638-2.846-1.746-3.796l-51-43.714c-1.872-1.605-4.635-1.605-6.508 0l-51 43.714c-1.108.949-1.746 2.336-1.746 3.796z' />
          </g>
        </svg>
      </div>
    );
  }
);

export default Close;