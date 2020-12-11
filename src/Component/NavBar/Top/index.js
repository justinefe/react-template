import React from "react";
import { Link } from "react-router-dom";
import NavLink from "../../NavLink";
import DropDown from "../../../Asset/SVG/DropDown";
import Prints from "../../../Asset/printsLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { signOutAction } from "../../../Screen/SignIn/action";
import ImgWrap from "../../ImgWrap";
import "./index.scss";

const Top = () => {
  const authenticated = useSelector(
    ({ AuthReducer: { isAuthenticated } }) => isAuthenticated
  );

  const dispatch = useDispatch();
  const user = useSelector(({ AuthReducer: { user } }) => user);

  const handleSignOut = async (e) => {
    await dispatch(signOutAction());
  };
  return (
    <div className='top container flexed-between'>
      <div className='top-nav-left'>
        <NavLink
          to='/'
          name={<ImgWrap source={Prints} ault='' classes='im' />}
          classes=''
        />
      </div>
      <div className='top-nav-right'>
        <span className='span'>
          <Link to='/'>Home</Link>
        </span>
        <div className='dropdown'>
          <div className='flex-sb flexed-between'>
            <span className='span'>
              <Link to='my-account'>
                {authenticated && user.body
                  ? `Hi, ${
                      user.body.fullName.split(" ")[0][0].toUpperCase() +
                      user.body.fullName.split(" ")[0].substring(1)
                    }`
                  : "My Account"}
              </Link>
            </span>
            <DropDown width='10px' height='10px' className='drop' />
          </div>
          <div className='dropdown-content'>
            {" "}
            <Link to='my-account'>My Account</Link>
            <Link to='/order'>Order History</Link>
            {authenticated ? (
              <Link to='/' onClick={handleSignOut}>
                Log out{" "}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <span className='span'>
          <Link to='/contact'>Contact</Link>
        </span>
        <span className='span'>
          <Link to='/checkout'>Checkout</Link>
        </span>
        <span className='span'>
          <Link to='/wishlist'>Wishlist (0)</Link>
        </span>
      </div>
    </div>
  );
};

export default Top;
