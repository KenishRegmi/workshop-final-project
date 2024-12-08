import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");



  const handlesubmit = async () => {
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, lname, phone, email ,feedback}),
    });
    const data = await response.json();
    console.log("response: ", response);
    console.log("data: ", data);
  };

  return (
    <div className="contact-main">
      <div className="contact">
        <div className="contact-us-left">
          <div className="row-left">
            <div className="row-1">
              <div className="first-container">
                <div className="first-child1">
                  <p>
                    <label htmlFor="">First Name</label>
                  </p>
                  <input
                    type="text"
                    className="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="first-child2">
                  <p>
                    <label htmlFor="">Email</label>
                  </p>
                  <input
                    type="email"
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="second-container">
                <div className="second-child1">
                  <p>
                    <label htmlFor="">Last Name</label>
                  </p>
                  <input
                    type="text"
                    className="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="second-child2">
                  <p>
                    <label htmlFor="">Phone Number</label>
                  </p>
                  <input
                    type="tel"
                    className=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="third-container">
            <p>
              <label htmlFor="">What do you have in your mind</label>
            </p>
            <input type="text" name="" id="" className="mind" placeholder=""
             value={feedback}
             onChange={(e) => setFeedback(e.target.value)} />
            <br />
            <br />
            <button className="sbmt" onClick={handlesubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="contact-us-right">
          <h2 className="contact-title">Contact US</h2>
          <div className="contact-us-right-container">
            <p>
              We’re here to help! <br />
              If you have any questions, feedback, or need assistance, feel free
              to get in touch with us.
            </p>
            <div className="icons-contact">
            <div className="phone">
              <p>Phone: +1234567890</p>
              <div className="phoneimg">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
                  alt=""
                />
              </div>
            </div>
            <div className="email">
              <p>Email: teamak@gmail.com</p>
              <div className="phoneimg">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/542/542689.png"
                  alt=""
                />
              </div>
            </div>
            <div className="email">
              <p>Location: Pokhara-32,Rajakochauta</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
