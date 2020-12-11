import React from "react";
import DashIntro from "./DashIntro";
import Pounds from "../../Asset/SVG/Pounds";

const Download = () => {
  return (
    <div className='dashboard-content'>
      <DashIntro name='Downloads' />
      <div className='order-wrap'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Date</th>
              <th>Expire</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Yes</td>
              <td>DOWNLOAD FILE</td>
            </tr>
            <tr>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Yes</td>
              <td>DOWNLOAD FILE</td>
            </tr>
            <tr>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Yes</td>
              <td>DOWNLOAD FILE</td>
            </tr>
            <tr>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Yes</td>
              <td>DOWNLOAD FILE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Download;
