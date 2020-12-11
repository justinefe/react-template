import React from "react";
import ImgWrap from "../ImgWrap";
import fBook from "../../Asset/card.jpg";
import Star from "../../Asset/SVG/Star";
import Separate from "../../Screen/HomePage/Separate";

import "./flatBook.scss";

const flatBook = () => {
  return (
    <div className='container'>
      <div className='flatBookWrap container'>
        <div className='Imgwrap'>
          <ImgWrap source={fBook} ault='book card' />
        </div>
        <div className='details-wrap'>
          <span className='det2'>As you go to college</span>
          <span className='det1'>Author: Rim Ruke</span>
          <p>
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien
          </p>
          <div className='flexed-between cut-wit'>
            <div className='flexed-between'>
              <Star height='15px' width='15px' className='star-rating' />
              <Star height='15px' width='15px' className='star-rating' />
              <Star height='15px' width='15px' className='star-rating' />
              <Star height='15px' width='15px' className='star-rating' />
            </div>
            <span>(1 Reviews)</span>
          </div>
        </div>
      </div>
      <Separate />
    </div>
  );
};

export default flatBook;
