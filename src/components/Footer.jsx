import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot-main">
      <footer>
        <div className="footer-col-one">
          <h1>Learn with Fun</h1>
          <p>
            Dont miss any updates from us. <br />
            Subscribe to our newsletter and stay up to date
          </p>
          <input type="text" className="enter" placeholder="Enter your email" />
          <button className="subs" id="sub">
            Subscribe
          </button>
        </div>
        <div className="footer-col-two">
          <h1>Download</h1>
          <div>
            <p>Android App</p>
            <p>ios App</p>
            <p>Company</p>
            <p>Company Desktop</p>
            <p>Projects</p>
            <p>My Tasks</p>
          </div>
        </div>
        <div className="footer-col-three">
          <h1>Quick Links</h1>
          <div>
            <ul className="foot-items">
              <li>
                <Link to={"./"}>Home</Link>
              </li>
              <li>
                <Link to={"./games"}>Games</Link>
              </li>
              <li>
                <Link to={"./quizes"}>Quizes</Link>
              </li>
              <li>
                <Link to={"./aboutus"}>About us</Link>
              </li>
              <li>
                <Link to={"./contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col-four">
          <h1>Follow us</h1>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/13051/13051762.png"
              alt=""
            />
          </div>
        </div>
      </footer>
      <div className="foot-para">
        <p>
          Copyright © 2024 Team AK |Learn with fun| Legal Information| Consumer
          Information
        </p>
      </div>
    </div>
  );
};

export default Footer;
