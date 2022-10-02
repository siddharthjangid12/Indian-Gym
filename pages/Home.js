import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <header className='main-section'>
     <div className="hero-section">

       <div className="left-section">
        <h4>SHAPE YOUR BODY LIKE THE WAY <span>YOU WANT IT...</span></h4>
        </div>

        <div className="right-section">
        <div className="center-section"></div>
        <img src="./pictures/main-logo.png" alt="main-img" className='header_img'/>
        </div>

      </div>
    </header>
  )
}

export default Home