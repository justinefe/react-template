import React from "react";
import Ship from "../../../Asset/SVG/ShipTruck";
import MoneyBack from "../../../Asset/SVG/Undo";
import Contact from "../../../Asset/SVG/HeadPhone";
// import Contact from "../../../Asset/SVG/Pounds";
import "./index.scss";

const info = [
  { top: "Shipping Books", bot: "Anywhere anytime", SVG: Ship },
  { top: "Money Back Guarantee", bot: "100% money back", SVG: MoneyBack },
  { top: "Help & Support", bot: "Call us: +234703566666", SVG: Contact },
];
const AboutInfo = () => {
  return (
    <div className='aboutInfoWrap flexed-between container'>
      {info.map((comp) => (
        <div key={comp.top} className='flexed-between infoConCard'>
          <comp.SVG className='i-svg' width='60px' height='60px' />
          <div>
            <span>{comp.top}</span>
            <span>{comp.bot}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutInfo;
