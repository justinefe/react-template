import React from "react";

const Download = React.forwardRef(
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
          <path
            d='m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0
          0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48
          0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0
          33.941z'
          />
          <path d='m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z' />
        </svg>
      </div>
    );
  }
);

export default Download;
