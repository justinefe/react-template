import React from "react";
import "./index.scss";

const index = ({ name }) => {
  return (
    <div className='pagination flexed-between'>
      <div className='flexed-between ctspa'>
        <span className='catsp1'>
          Showing <strong>9 of 15</strong> {name}
        </span>
      </div>
      <div className='flexed-between pagina'>
        <button>Prev</button>
        <div className='flexed-between'>
          <span className='catsp2 rty'>1</span>
          <span className='catsp2'>2</span>
          <span className='catsp2'>3</span>
          <span className='catsp2'>4</span>
          <span className='catsp2'>5</span>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default index;
