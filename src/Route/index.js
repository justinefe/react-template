import React, { lazy, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./Private";

const HomePage = lazy(() => import("../Screen/HomePage"));
const SignUpPage = lazy(() => import("../Screen/SignUp"));
const SignInPage = lazy(() => import("../Screen/SignIn"));
const ResetPassword = lazy(() => import("../Screen/ResetPassword"));
const ChangePassword = lazy(() => import("../Screen/ChangePassword"));
const EmailSucces = lazy(() => import("../Screen/EmailSucces"));
const ViewBook = lazy(() => import("../Screen/ViewBook/Loadable"));
const ViewCategory = lazy(() => import("../Screen/ViewCategory"));
const ShoppingCarts = lazy(() => import("../Screen/AddToCart"));
const Checkout = lazy(() => import("../Screen/Checkout"));
const FlatBook = lazy(() => import("../Component/Book/flatBook"));
const Contact = lazy(() => import("../Screen/Contact"));
const Compare = lazy(() => import("../Screen/Compare"));
const Whishlist = lazy(() => import("../Screen/WhishList"));
const OrderComplete = lazy(() => import("../Screen/OrderComplete"));
const MyAccount = lazy(() => import("../Screen/MyAccount"));
const Current = lazy(() => import("../Component/Book/CurrentlyReading"));

const Routes = () => (
  <Fragment>
    <Route exact path='/' component={HomePage} />
    <Route path='/sign-up' component={SignUpPage} />
    <Route path='/sign-in' component={SignInPage} />
    <Route path='/reset-password' component={ResetPassword} />
    <Route path='/change-password' component={ChangePassword} />
    <Route path='/mail-success' component={EmailSucces} />
    <PrivateRoute path='/book' component={ViewBook} />
    <PrivateRoute path='/view-category/:category' component={ViewCategory} />
    <PrivateRoute path='/shopping-cart' component={ShoppingCarts} />
    <PrivateRoute path='/checkout' component={Checkout} />
    <PrivateRoute path='/card' component={FlatBook} />
    <PrivateRoute path='/contact' component={Contact} />
    <PrivateRoute path='/compare' component={Compare} />
    <PrivateRoute path='/wishlist' component={Whishlist} />
    <PrivateRoute path='/order-complete' component={OrderComplete} />
    <PrivateRoute path='/my-account' component={MyAccount} />
    <PrivateRoute path='/current' component={Current} />
  </Fragment>
);

export default Routes;
