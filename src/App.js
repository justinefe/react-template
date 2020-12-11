import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import Loader from "./Component/Load";
import Routes from "./Route/index";
import "./App.css";
import "./index.scss";

function App() {
  return (
    <div className='App'>
      <Router>
        <Suspense
          fallback={
            <Loader ma={300} size={20} color='#7eba4d' tempLoad={true} />
          }
        >
          <Switch>
            <Routes />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default hot(App);
