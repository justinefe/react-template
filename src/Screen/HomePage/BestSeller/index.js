import React, { useRef } from "react";
import NavLink from "../../../Component/NavLink";
import Card from "../../../Component/Book/flatSmallBook";
import TinySlider from "tiny-slider-react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

import img1 from "../../../Asset/image1.jpg";
import img2 from "../../../Asset/image5.jpg";
import img3 from "../../../Asset/image6.jpg";

import "./index.scss";

const settings = {
  lazyload: true,
  nav: false,
  controls: false,
  items: 4,
  mouseDrag: true,
  gutter: "100",
};
const Item = (props) => {
  return (
    <div className='b2'>
      <img src={props.item.img} alt='' />
      <div className='content-wrap'>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <button className='CheckButton'>Check it out!</button>
      </div>
    </div>
  );
};
const Featured = () => {
  const ts = useRef();
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: img1,
    },
    {
      name: "Random Name #2",
      description: "Hello World! As you go to college",
      img: img2,
    },
    {
      name: "Random Name #3",
      description:
        "shining better all the time with different people Hello World!",
      img: img3,
    },
  ];

  const onGoTo = (dir) => ts.current.slider.goTo(dir);
  return (
    <div className='bb'>
      <div className='ft-main container'>
        <div className='flexed-between ft-top'>
          <span className='feat'>Best Sellers Books</span>
          <NavLink to='/category' name='See more...' classes='c-more' />
        </div>
        <div className='best-seller'>
          <div className='best-seller-left'>
            <Carousel autoPlay={true} indicators={true} animation={"fade"}>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
          <div className='best-sell'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
