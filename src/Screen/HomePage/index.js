import React from "react";
import NavBar from "../../Component/NavBar";
import Carousel from "./Carousel/carousel";
import Featured from "./Featured";
import RecentPublished from "./RecentPublished";
import SubCategory from "./SubCategory";
import Footer from "../../Component/Footer";
import AboutInfor from "./AboutInfo";
import BestSeller from "./BestSeller";

const sub = [
  "Marriage",
  "Children",
  "Quote",
  "Finance",
  "Leadership",
  "Wisdom tips succes in life",
  "Relationship",
  "Parenting",
];

function index() {
  return (
    <div>
      <NavBar />
      <div style={{ width: "75%", margin: "1px auto" }}>
        <Carousel />
      </div>
      <AboutInfor />
      <Featured />
      <BestSeller />
      <RecentPublished />
      {sub.map((ele) => {
        return (
          <div key={ele}>
            <SubCategory subName={ele} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default index;
/**
 * 

      <Advert />
      {sub.map((ele) => {
        return (
          <div key={ele}>
            <SubCategory subName={ele} />
          </div>
        );
      })}
 */
