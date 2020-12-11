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
          <path d='m431.964 435.333c-.921-58.994-19.3-112.636-51.977-151.474-32.487-38.601-76.515-59.859-123.987-59.859s-91.5 21.258-123.987 59.859c-32.646 38.797-51.013 92.364-51.973 151.285 18.46 9.247 94.85 44.856 175.96 44.856 87.708 0 158.845-35.4 175.964-44.667z' />
          <circle cx='256' cy='120' r='88' />
        </svg>
      </div>
    );
  }
);

export default Close;