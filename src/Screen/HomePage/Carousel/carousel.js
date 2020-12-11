import React from "react";
import TinySlider from "tiny-slider-react";
import img1 from "../../../Asset/image1.jpg";
import img2 from "../../../Asset/image5.jpg";
import img3 from "../../../Asset/image6.jpg";

import "./index.scss";

const Item = (props) => {
  return (
    <div className='b1'>
      <img src={props.item.img} alt='' />
      <div className='content-wrap'>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <button className='CheckButton'>Check it out!</button>
      </div>
    </div>
  );
};

const CarouselWrap = () => {
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    autoplay: true,
  };
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

  return (
    <div className='caro-wrap'>
      <TinySlider settings={settings}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </TinySlider>
    </div>
  );
};

export default CarouselWrap;
// <Carousel autoPlay={true} indicators={false} animation={"slide"}>
// </Carousel>
