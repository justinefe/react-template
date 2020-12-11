import React from "react";
import "./index.scss";

const index = ({ className }) => {
  return (
    <div className={className}>
      <form className='example'>
        <input
          type='text'
          placeholder='Search books, clubs and catgories'
          name='search'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default index;
