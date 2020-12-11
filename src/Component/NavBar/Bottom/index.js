import React, { useRef } from "react";
import HeadPhone from "../../../Asset/SVG/HeadPhone";
import DropDown from "../../../Asset/SVG/DropDown";
import Menu from "../../../Asset/SVG/Menu";
import "./index.scss";

const sub = [
  "Marriage",
  "Children",
  "Quote",
  "Finance",
  "Leadership",
  "Wisdom tips succes in life",
  "Relationship",
  "Parenting",
];

const Bottom = () => {
  const categoryRef = useRef();
  const handleOpen = (e) => {
    categoryRef.current.classList.toggle("close");
  };
  return (
    <div className='btm-wrap container flexed-between'>
      <div className='btm-left flexed-between'>
        <div className='Category-wrap'>
          <div onClick={handleOpen} className='btm-category flexed-between'>
            <div className='flexed-between'>
              <Menu className='btm-Menu' width='25px' height='25px' />
              <span className='btm-category-btn flexed-between'>
                Browse categories
              </span>
            </div>
            <DropDown className='btm-ropDown' width='15px' height='15px' />
          </div>
          <div ref={categoryRef} className='btm-dialogue-wrap'>
            {sub.map((each) => (
              <div key={each}>
                <span>{each}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='flexed-between btm-contact'>
          <HeadPhone className='btm-HeadPhone' width='60px' height='35px' />
          <div className='support'>
            <span>Free Support 24/7</span>
            <span>+2347035688050</span>
          </div>
        </div>
      </div>
      <div className='btm-right flexed-between'>
        <span>Home</span>
        <span>Explore</span>
        <span>Contact</span>
        <span>Free Support</span>
      </div>
    </div>
  );
};

export default Bottom;
