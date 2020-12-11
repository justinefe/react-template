import React from "react";
import DashIntr from "./DashIntro";
import CurrentReadCard from "../../Component/Book/CurrentlyReading";
import Pagination from "../../Component/Pagination";
const CurrentlyReading = () => {
  return (
    <div className='dashboard-content'>
      <DashIntr name='Currently Reading' />
      <div className='currently-reading'>
        <CurrentReadCard percent={4} kolo='#FF8A00' />
        <CurrentReadCard percent={80} kolo=' #7EBA4D' />
        <CurrentReadCard percent={75} kolo=' #7EBA4D' />
        <CurrentReadCard percent={70} kolo=' #7EBA4D' />
        <CurrentReadCard percent={35} kolo='#FF8A00' />
        <CurrentReadCard percent={40} kolo='#F5C462' />
      </div>
      <Pagination name='Currently reading books' />
    </div>
  );
};

export default CurrentlyReading;
