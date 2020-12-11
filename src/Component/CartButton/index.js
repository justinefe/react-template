import React from "react";
import Cart from "../../Asset/SVG/ShoppingCart";
import "./index.scss";

const index = () => {
  return (
    <div className='add-cart-general'>
      <Cart className='d' height='15px' width='15px' />
      <span>Add to Cart</span>
    </div>
  );
};

export default index;
