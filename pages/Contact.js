import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
    <div className="contact_image">
          <img src="./pictures/weight.jpg" alt="" className='contact_picture'/>
        </div>

    <div className='contact-page'>
      <div className="container">
        <div className="address">
        Address:- Near of State Bank of India,Mahaveer Nagar,Delhi,U.P.
        </div>

        <div className="contact">
          <p>Feel Free To Contact Us</p>
          <h3>Whatsapp No.- 9876543210</h3>
          <h3>Phone No.- 01234-56789</h3>
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact