import React from "react";
import ImgWrap from "../ImgWrap";
import fBook from "../../Asset/card.jpg";
import Star from "../../Asset/SVG/Star";
import Cart from "../../Asset/SVG/ShoppingCart";
import Love from "../../Asset/SVG/Heart";
import Pounds from "../../Asset/SVG/Pounds";
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
          <p>
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien
          </p>
          <div className='f'>
            <span className='flexed-between d01'>
              <Pounds className='d1' height='15px' width='15px' /> 14.95
            </span>
            <s className='flexed-between d02'>
              <Pounds className='d2' height='15px' width='15px' /> 18.99
            </s>
          </div>
          <div className='flexed-between cut-wit'>
            <div className='flexed-between'>
              <Star height='15px' width='15px' className='star-rating' />
              <Star height='15px' width='15px' className='star-rating' />
              <Star height='15px' width='15px' className='star-rating' />
              <Star height='15px' width='15px' className='star-rating' />
            </div>
            <span>(1 Reviews)</span>
          </div>{" "}
          <div className='cat-wish'>
            <div className='add-cart'>
              <Cart className='d' height='15px' width='15px' />
              <span>Add to Cart</span>
            </div>
            <div className='add-whish'>
              <Love className='d' height='15px' width='15px' />
              <span>Add to Wishlist</span>
            </div>
          </div>
        </div>
      </div>
      <Separate />
    </div>
  );
};

export default flatBook;
