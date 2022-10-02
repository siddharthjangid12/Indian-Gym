import React from "react";
import "./service.css";

const Service = () => {
  return (
   <>
   <div className="service_heading">
    <h4>Our Services</h4>
   </div>
    <div className="services">
      <div className="service_list">
        <div className="service_one">
          <img src="./pictures/biceps.jpg" alt="" className="service_image" />
          <h3>Concentration Curl</h3>
        </div>
        <div className="service_two">
          <img src="./pictures/rope.jpg" alt="" className="service_image" />
          <h3>Ropes Core Workout</h3>
        </div>
        <div className="service_three">
          <img src="./pictures/weight.jpg" alt="" className="service_image" />
          <h3>Dumble Curl</h3>
        </div>
        <div className="service_four">
          <img src="./pictures/bg.jpg" alt="" className="service_image" />
          <h3>Dumble Leg Squat</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Service;
