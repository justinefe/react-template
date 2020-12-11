import React from "react";
import ImWrap from "../ImgWrap";
import Card from "../../Asset/card.jpg";
import "./CurrentlyReading.scss";

const currentlyReading = ({ percent, kolo }) => {
  return (
    <div className='currentReadingWrap'>
      <div className='imWrap'>
        <ImWrap source={Card} ault='' />
      </div>
      <div className='deWrap'>
        <span className='first'>Decide Your Faith</span>
        <span>Author: Jude Ibrahim</span>
        <div className='card-currency-sub1 flexed-between'>
          <span className='sy'>Progress</span>
          <span>{percent}%</span>
        </div>
        <div className='proW'>
          <div
            className='pr'
            style={{ width: `${percent}%`, background: `${kolo}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default currentlyReading;
