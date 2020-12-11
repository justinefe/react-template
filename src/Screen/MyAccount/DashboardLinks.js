import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../../Asset/SVG/Dashboard";
import Orders from "../../Asset/SVG/Order";
import Download from "../../Asset/SVG/Download";
import PaymentMethod from "../../Asset/SVG/PaymentMethod";
import Address from "../../Asset/SVG/Home";
import { signOutAction } from "../SignIn/action";
import Account from "../../Asset/SVG/User";
import SignOut from "../../Asset/SVG/SignOut";
import { useDispatch } from "react-redux";

const DashboardLinks = () => {
  const dispatch = useDispatch();

  const handleSignOut = async (e) => {
    await dispatch(signOutAction());
  };
  return (
    <div className='my-account-button-wrap'>
      <NavLink activeClassName='active' exact to='/my-account'>
        <div className='button-Wrap'>
          <Dashboard width='12px' height='12px' className='dash' />
          <button>Dashboard</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/orders'>
        <div className='button-Wrap'>
          <Orders width='13px' height='13px' className='dash' />
          <button>Orders</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/download'>
        <div className='button-Wrap'>
          <Download width='14px' height='14px' className='dash' />
          <button>Download</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/payment-method'>
        <div className='button-Wrap'>
          <PaymentMethod width='15px' height='15px' className='dash paye' />
          <button>Payment Method</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/address'>
        <div className='button-Wrap'>
          <Address width='14px' height='14px' className='dash' />
          <button>Address</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/account-details'>
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>Account Details</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/book-club'>
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>Book Club</button>
        </div>
      </NavLink>
      <NavLink
        activeClassName='active'
        exact
        to='/my-account/currently-reading'
      >
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>Currently Reading</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/purchase-books'>
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>My Books</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/favourite'>
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>Favourite</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/my-earning'>
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>My Earnings</button>
        </div>
      </NavLink>
      <NavLink activeClassName='active' exact to='/my-account/partner-with-us'>
        <div className='button-Wrap'>
          <Account width='14px' height='14px' className='dash' />
          <button>Partner With Us</button>
        </div>
      </NavLink>{" "}
      <NavLink activeClassName='active' exact to='/'>
        <div onClick={handleSignOut} className='button-Wrap'>
          <SignOut width='16px' height='16px' className='dashlo' />
          <button>log out</button>
        </div>
      </NavLink>
    </div>
  );
};

export default DashboardLinks;
