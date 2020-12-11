import React from "react";
import "./index.scss";

const InfoCard = ({ SVG, top, bot }) => {
  return (
    <div className=''>
      <SVG className='' width='15px' height='15px' />
      <div>
        <span>{top}</span>
        <span>{bot}</span>
      </div>
    </div>
  );
};

export default InfoCard;
