import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer_icons'>
      <div className="container">
        <div className="social-icon">
          <h6>Follow Us :-</h6>
         <span>
         <i class="fa-brands fa-linkedin"></i>
         <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-instagram"></i>
         <i class="fa-brands fa-discord"></i>
         </span>
        </div>

        <div className="form_input">
         <form action="" className='input_details'>
          <input type="email" placeholder='E-mail' className='input_icon'/>
          <input type="password" placeholder='Password' className='input_icon'/>
          <textarea name="text" id="text" cols="30" rows="10" className='input_icon'></textarea>
         </form>
         <button>Submit Now</button>
        </div>

  

        <div className="footer_link">
         <div className="footer_list">
          <ul>
            <li>Privacy Policy</li>
            <li>Licensed</li>
            <li>Agreement</li>
            <li>FAQ</li>
          </ul>
         </div>
        </div>

      </div>
    </div>
  )
}

export default Footer