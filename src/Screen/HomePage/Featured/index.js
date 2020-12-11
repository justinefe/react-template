import React, { useRef } from "react";
import NavLink from "../../../Component/NavLink";
import Card from "../../../Component/Book/SmallBook";
import TinySlider from "tiny-slider-react";
import Separator from "../Separate";
import Advert from "../../../Component/Advert/AdvertTop";
import "./index.scss";

const settings = {
  lazyload: true,
  nav: false,
  controls: false,
  items: 5,
  mouseDrag: true,
  gutter: "100",
  responsive: {
    599: {
      edgePadding: 20,
      gutter: 20,
      items: 1,
    },
    360: {
      edgePadding: 20,
      gutter: 20,
      items: 1,
    },
    768: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
    },
    991: {
      items: 4,
      gutter: 30,
    },
  },
};

const Featured = ({ subName }) => {
  const ts = useRef();

  const onGoTo = (dir) => ts.current.slider.goTo(dir);

  return (
    <div className='ft-wrap'>
      <div className='ft-main container'>
        <div className='flexed-between ft-top'>
          <span className='feat'>Featured Books</span>
          <NavLink to='/category' name='See more...' classes='c-more' />
        </div>
        <div className='caro-buttton'>
          <button type='button' onClick={() => onGoTo("prev")}>
            Previous
          </button>
          <button type='button' onClick={() => onGoTo("next")}>
            Next
          </button>
        </div>
        <TinySlider settings={settings} ref={ts}>
          <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card /> <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TinySlider>
        <Advert />
      </div>
    </div>
  );
};

export default Featured;
