import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavLink from "../../NavLink";
import Prints from "../../../Asset/printsLogo.png";
import ImgWrap from "../../ImgWrap";
import Search from "../../Search";
import ShoppingCart from "../../ShoppingCart";
import Menu from "../../../Asset/SVG/Menu";
import Input from "../../../Component/Input";
import Close from "../../../Asset/SVG/Close";
import Category from "../../../Component/Category";
import { getcategories } from "../../../Screen/ViewCategory/action";

import "./index.scss";

const Middle = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.Category.categories);

  useEffect(() => {
    if (categories) return;
    (async () => {
      await dispatch(getcategories());
    })();
    return () => {};
  }, [categories, dispatch]);

  const closeRef = useRef();
  const openRef = useRef();
  const authenticated = useSelector(
    ({ AuthReducer: { isAuthenticated } }) => isAuthenticated
  );

  const onChange = (event, error) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleClose = (e, name) => {
    openRef.current.classList.remove("close");
  };
  const handleOpen = (e, name) => {
    openRef.current.classList.add("close");
  };
  useEffect(() => {}, [authenticated]);

  return (
    <div className='flexed-between middle-wrap container'>
      <NavLink
        to='/'
        name={<ImgWrap source={Prints} ault='' classes='im' />}
        className='cz'
      />
      <Category category='dz' />
      <Search className='search-comp' />
      <Category category='catz' />
      {!authenticated ? (
        <div className='sign-up-wrap'>
          <NavLink to='/sign-in' name='Login' className='ilog' /> <br />
          <NavLink to='sign-up' name='or Register' className='ilog' />
        </div>
      ) : (
        ""
      )}

      <div className='shop-menu'>
        <ShoppingCart />
        <div className='menu-wrap'>
          <Menu
            onClick={handleOpen}
            className='mn-mid'
            width='35px'
            height='35px'
          />
          <div ref={openRef} className='_close_dialog_wrap'>
            <Close
              handleClick={handleClose}
              className='_close'
              ref={closeRef}
              width='35px'
              height='35px'
            />
            <div className='mid-dialogue-wrap'>
              <Input
                type='text'
                placeHolder='Search here...'
                required
                name='Search'
                id='Search'
                handleChange={onChange}
                label=''
                className='in-put'
                value={values.password}
                errorMsg='Must have alphanumeral and special characters'
              />
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
        </div>
      </div>
    </div>
  );
};

export default Middle;
