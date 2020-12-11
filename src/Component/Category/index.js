import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../../Asset/SVG/DropDown";
import Menu from "../../Asset/SVG/Menu";
import { getcategories } from "../../Screen/ViewCategory/action";

import "./index.scss";

const Category = ({ category }) => {
  const catRef = useRef();

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Category.categories);

  useEffect(() => {
    if (categories) return;
    (async () => {
      await dispatch(getcategories());
    })();
    return () => {};
  }, [categories, dispatch]);

  const handleOpen = (e) => {
    catRef.current.classList.toggle("close");
  };

  return (
    <div className={`Category-wrap ${category}`}>
      <div onClick={handleOpen} className='btm-category flexed-between'>
        <div className='flexed-between'>
          <Menu className='btm-Menu' width='25px' height='25px' />
          <span className='btm-category-btn flexed-between'>
            Browse categories
          </span>
        </div>
        <DropDown className='btm-ropDown' width='15px' height='15px' />
      </div>
      <div ref={catRef} className='btm-dialogue-wrap'>
        {categories &&
          categories.map((catname) => (
            <div key={catname.title}>
              <Link to={`/view-category/${catname.title}`}>
                <span>{catname.title}</span>{" "}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
