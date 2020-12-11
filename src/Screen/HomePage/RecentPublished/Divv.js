import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const Item = (props) => {
  return (
    <div className='b1'>
      <div className='content-wrap'>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <button className='CheckButton'>Check it out!</button>
      </div>
    </div>
  );
};

const CarouselWrap = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselWrap;
