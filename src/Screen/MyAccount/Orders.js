import React from "react";
import DashIntro from "./DashIntro";
import Pounds from "../../Asset/SVG/Pounds";

const Orders = () => {
  return (
    <div className='dashboard-content'>
      <DashIntro name='Orders' />
      <div className='order-wrap'>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Pending</td>
              <td>
                <div className='flexed-center'>
                  <Pounds className='cats-di' width='12px' height='12px' />
                  236
                </div>
              </td>
              <td>view</td>
            </tr>
            <tr>
              <td>2</td>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Approved</td>
              <td>
                <div className='flexed-center'>
                  <Pounds className='cats-di' width='12px' height='12px' />
                  236
                </div>
              </td>
              <td>view</td>
            </tr>{" "}
            <tr>
              <td>3</td>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Pending</td>
              <td>
                <div className='flexed-center'>
                  <Pounds className='cats-di' width='12px' height='12px' />
                  236
                </div>
              </td>
              <td>view</td>
            </tr>{" "}
            <tr>
              <td>4</td>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>Approved</td>
              <td>
                <div className='flexed-center'>
                  <Pounds className='cats-di' width='12px' height='12px' />
                  236
                </div>
              </td>
              <td>view</td>
            </tr>{" "}
            <tr>
              <td>5</td>
              <td>As you go to college</td>
              <td>Aug 22, 2018</td>
              <td>On Hold</td>
              <td>
                <div className='flexed-center'>
                  <Pounds className='cats-di' width='12px' height='12px' />
                  236
                </div>
              </td>
              <td>view</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
