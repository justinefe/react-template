import React from "react";
import DashIntr from "./DashIntro";
import Pagination from "../../Component/Pagination";
import Mybooks from "../../Component/Book/MyBooks";

const PurchaseBooks = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Purchase Books' />
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

export default PurchaseBooks;
