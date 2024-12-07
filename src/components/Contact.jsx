import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-us-left">
        <div className="row-left">
        <div className="row-1">
    <div className="first-container">
        <div className="first-child1">
        <p><label htmlFor="">First Name</label></p>
        <input type="text" className='fname'/>
        </div>
        <div className="first-child2">
        <p><label htmlFor="">Email</label></p>
        <input type="email" className='email'/>
        </div>
    </div>
<div className="second-container">
    <div className="second-child1">
    <p><label htmlFor="">Last Name</label></p>
    <input type="text" className='lname'/>
    </div>
    <div className="second-child2">
    <p><label htmlFor="">Phone Number</label></p>
    <input type="tel" className=''/>
    </div>
</div>
</div>
</div>
<div className="third-container">
    <p><label htmlFor="">What do you have in your mind</label></p>
    <input type="text" name="" id="" className='mind' placeholder=''/>
    <br />
    <br />
    <button className="sbmt">Submit</button>
</div>
      </div>
      <div className="contact-us-right">
        <h2 className="contact-title">Contact US</h2>
        <div className="contact-us-right-container">
        <p>We’re here to help! <br />
        If you have any questions, feedback, or need assistance, feel free to get in touch with us.</p>
        <div className="phone">
            <p>Phone: +1234567890</p>
            <div className="phoneimg">
      <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png" alt="" />
      </div>
      </div>
      <div className="email">
            <p>Email:teamak@gmail.com</p>
            <div className="phoneimg">
      <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="" />
      </div>
      </div>
      <div className="email">
            <p>Location:Pokhara-32,Rajakochauta</p>
            
      </div>
      </div>
</div>
    </div>
  )
}

export default Contact

