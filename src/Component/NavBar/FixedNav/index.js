import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImgWrap from "../../ImgWrap";
import Prints from "../../../Asset/printsLogo.png";
import Search from "../../Search";
import DropDown from "../../../Asset/SVG/DropDown";
import ShoppingCart from "../../../Asset/SVG/ShoppingCart";
import Category from "../../Category";
import { signOutAction } from "../../../Screen/SignIn/action";
import Notification from "../../Notifications";
import "./index.scss";

const FixedNav = () => {
  const navbarRef = useRef(null);
  const hasScrolled = useRef(false);
  const authenticated = useSelector(
    ({ AuthReducer: { isAuthenticated } }) => isAuthenticated
  );
  const user = useSelector(({ AuthReducer: { user } }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    navbarRef.current.style.top = "-200px";
    const myFunction = () => {
      hasScrolled.current = true;
      if (window.pageYOffset >= 200 && navbarRef.current) {
        navbarRef.current.style.top = 0;
      } else {
        navbarRef.current.style.top = "-200px";
      }
    };

    window.addEventListener("scroll", myFunction);
    return () => {
      window.removeEventListener("scroll", myFunction);
    };
  }, [navbarRef]);
  const handleSignOut = async (e) => {
    await dispatch(signOutAction());
  };
  return (
    <div ref={navbarRef} className='sub-head navbar'>
      <div className='fl-sc ht'>
        <ImgWrap source={Prints} ault='' classes='im' />
        {authenticated ? (
          <React.Fragment>
            <Category />
            <Search />
            <span className='span'>
              <Link to='/'>Home</Link>
            </span>
            <div className='dropWrap'>
              <div className='flex-sb flexed-between'>
                <span className='span'>
                  <Link to='my-account'>
                    {user.body
                      ? `Hi, ${
                          user.body.fullName.split(" ")[0][0].toUpperCase() +
                          user.body.fullName.split(" ")[0].substring(1)
                        }`
                      : "My Acccount"}
                  </Link>
                </span>
                <DropDown width='10px' height='10px' className='drop' />
              </div>
              <div className='drop-content'>
                <Link to='my-account'>My Acccount</Link>
                <Link to='/order'>Order History</Link>
                <Link to='/' onClick={handleSignOut}>
                  Log out{" "}
                </Link>
              </div>
            </div>
            <span className='span'>
              <Link to='/contact'>Contact</Link>
            </span>
            <div className='sst'>
              <ShoppingCart width='25px' height='25px' />
              <div className='st'>
                {" "}
                <span>0</span>
              </div>
            </div>
            <Notification />
          </React.Fragment>
        ) : (
          <div className='fixed-left-side'>
            <Link to='/'>
              <span>Home</span>
            </Link>
            <Link to='/contact'>
              <span>Contact</span>
            </Link>
            <Link to='/sign-in'>
              <span>Login </span>
            </Link>{" "}
            <Link to='/sign-up'>
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FixedNav;
/**
 *  <div className='fixed-left-side'>
          <Link to='/'>
            <span>Home</span>
          </Link>
          <Link to='/contact'>
            <span>Contact</span>
          </Link>
          <Link to='/sign-in'>
            <span>Login </span>
          </Link>{" "}
          <Link to='/sign-up'>
            <span>Register</span>
          </Link>
        </div>
 */
