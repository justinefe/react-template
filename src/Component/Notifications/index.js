import React, { useRef } from "react";
import Notificcation from "../../Asset/SVG/Notification";
import "./index.scss";

const Notification = () => {
  const notRef = useRef();

  const handleOpen = (e) => {
    notRef.current.classList.toggle("close");
  };
  return (
    <div className='sst'>
      <div onClick={handleOpen}>
        <div className='notification'>
          <Notificcation width='25px' height='25px' />
          <div className='st'>
            {" "}
            <span>1</span>{" "}
          </div>
        </div>
      </div>
      <div ref={notRef} className='notification-details'>
        <span>Notifications</span>
        <p>You have one notification click to check</p>
      </div>
    </div>
  );
};

export default Notification;
