import React from "react";
import Card from "../../Asset/card.jpg";
import { Link } from "react-router-dom";
import Pounds from "../../Asset/SVG/Pounds";
import "./flatsmallbook.scss";

const SmallBook = () => {
  return (
    <Link to='/book'>
      <div className='md'>
        <div className='card-wrap-top'>
          <img src={Card} alt='' />
          <div className='clipPatt'>
            <span>Free</span>
          </div>
        </div>
        <div className='card-wrap-bottom '>
          <span className='first'>Decide Your Faith</span>
          <span className='sec'>By Jude Abraham</span>
          <div className='card-currency'>
            <div className='card-currency-sub1 flexed-between'>
              <Pounds className='pounds' height='13px' width='13px' />
              <span>500.00</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallBook;
