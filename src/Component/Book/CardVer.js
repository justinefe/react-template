import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Asset/card.jpg";
import Pounds from "../../Asset/SVG/Pounds";
import "./index.scss";

const CardVer = () => {
  return (
    <Link to='/book'>
      <div className='card-wrap'>
        <div className='card-wrap-top'>
          <img src={Card} alt='' />
          <div className='clipPath'>
            <span>Free</span>
          </div>
        </div>
        <div className='card-wrap-bottom'>
          <span className='first'>Decide Your Faith</span>
          <span>By Jude ibrahim</span>
          <div className='card-currency'>
            <div className='card-currency-sub1'>
              <Pounds className='pounds' width='13px' height='13px' />
              <span>500.00</span>
            </div>
            <div className='empty'></div>
            <div className='card-currency-sub2'>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardVer;
