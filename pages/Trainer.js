import React from 'react'
import "./trainer.css"

const Trainer = () => {
  return (
    <div>
      <div className="heading">
        <p>Our Trainers</p>
      </div>
      <div className="trainer_list">

        <div className="trainer_one">
         <img src="./pictures/trainer1.jpg" alt="" className='trainers' />
         <h2>Angelina Ann</h2>
         <p>Free-Style Expert</p>
        </div>

        <div className="trainer_two">
         <img src="./pictures/trainer2.jpg" alt="" className='trainers'/>
         <h2>John Mathew</h2>
         <p>Body Composition Expert</p>
        </div>

        <div className="trainer_three">
         <img src="./pictures/trainer3.jpg" alt=""className='trainers' />
         <h2>Jennifer Winset</h2>
         <p>Body Composition Expert- 02</p>
        </div>

      </div>
    </div>
  )
}

export default Trainer