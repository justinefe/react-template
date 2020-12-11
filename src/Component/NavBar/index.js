import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import FixedNav from "./FixedNav";
import Bottom from "./Bottom";

const index = () => {
  return (
    <div>
      <div className='header'>
        <Top />
        <Middle />
      </div>
      <FixedNav />
    </div>
  );
};

export default index;
