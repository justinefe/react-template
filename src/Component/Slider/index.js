import React, { useState } from "react";
import Sliders from "./Sliders";
import "./index.scss";

const Slider = ({ comp, linkeds }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className='sliderWrap'>
      <Sliders button={linkeds} changePage={setCurrent} current={current} />
      <div className='slider-content'>{comp[current]}</div>
    </div>
  );
};

export default Slider;
