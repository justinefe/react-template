import React, { useEffect, useRef } from "react";
import "./index.scss";

const Sliders = ({ button, changePage, current }) => {
  const buttons = {};
  const slider = useRef();
  const parentRef = useRef();

  useEffect(() => {
    const refresh = () => {
      const currentButton = buttons[button[current]];
      const coords = currentButton.getBoundingClientRect();
      const parentDiv = parentRef.current.getBoundingClientRect().left;
      slider.current.style.left = `${coords.left - parentDiv}px`;
      slider.current.style.width = `${coords.width}px`;
    };

    refresh();
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("resize", refresh);
    };
  }, [current]);
  return (
    <div className='dash-nav' ref={parentRef}>
      {button.map((info, index) => {
        return (
          <button
            key={`${info}_${index}`}
            name={info}
            onClick={() => changePage(index)}
            ref={(anchor) => (buttons[info] = anchor)}
            className='btn'
          >
            {info}
          </button>
        );
      })}
      <div className='slider' ref={slider}></div>
    </div>
  );
};
export default Sliders;
