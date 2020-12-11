import React from "react";
import DashIntr from "./DashIntro";
import Pagination from "../../Component/Pagination";
import Mybooks from "../../Component/Book/MyBooks";

const Favourite = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Favourite' />
      <div>
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
        <Mybooks />
      </div>
      <Pagination name='My books' />
    </div>
  );
};

export default Favourite;
