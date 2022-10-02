import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='about_page'>
     <div className="about_img">
      <img src="./pictures/trademill.jpg" alt="" className='about_picture'/>
     </div>

     <div className="about_heading">
      <div className="heading_one">
       <h2>Monday To Friday</h2>
       <h5>Morning Time:-06:00AM-10:00AM</h5>
       <h5>Evening Time:-04:00PM-08:00PM</h5>
      </div>
      
      <div className="heading_two">
      <h2>Friday To Sunday</h2>
       <h5>Morning Time:-07:00AM-09:00AM</h5>
       <h5>Evening Time:-05:00PM-07:00PM</h5>
      </div>
     </div>
    </div>
  )
}

export default About