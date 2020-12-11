import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../../Component/NavBar";
import Footer from "../../Component/Footer";
import UserDashboard from "./Dashboard";
import UserOrders from "./Orders";
import UserDownloads from "./Downloads";
import UserPayment from "./PaymentMethod";
import UserAddress from "./Address";
import UserAccountDetails from "./AccountDetails";
import DashboardLinks from "./DashboardLinks";
import Favorite from "./Favourite";
import PurchaseBooks from "./PurchaseBooks";
import BookClubs from "./BookClubs";
import CurrentlyReading from "./CurrentlyReading";
import BreadCum from "../../Component/Breadcrum";

import "./index.scss";

const Index = () => {
  return (
    <React.Fragment>
      <NavBar />
      <BreadCum />
      <div className='dashWrap'>
        <DashboardLinks />
        <Switch>
          <Route exact path='/my-account' component={UserDashboard} />
          <Route exact path='/my-account/orders' component={UserOrders} />
          <Route
            exact
            path='/my-account/payment-method'
            component={UserPayment}
          />
          <Route exact path='/my-account/download' component={UserDownloads} />
          <Route exact path='/my-account/address' component={UserAddress} />
          <Route
            exact
            path='/my-account/account-details'
            component={UserAccountDetails}
          />{" "}
          <Route
            exact
            path='/my-account/currently-reading'
            component={CurrentlyReading}
          />{" "}
          <Route exact path='/my-account/favourite' component={Favorite} />{" "}
          <Route
            exact
            path='/my-account/purchase-books'
            component={PurchaseBooks}
          />{" "}
          <Route exact path='/my-account/book-club' component={BookClubs} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Index;
// <Footer />
//
