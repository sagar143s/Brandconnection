import React from "react";
import brandLogo from "../../src/assets/brand-connection-white-logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="column">
            <div className="footer-logo-div">
              <a href="#" alt="">
                <img src={brandLogo} alt="" className="footer-logo" />
              </a>
            </div>
          </div>
          <div className="column">
            <ul className="menu-list">
              <li>
                <a href="/Brands">Brands</a>
              </li>
              <li>
                <a href="/Partner">Retail</a>
              </li>
              <li>
                <a href="/BeyondUs">Beyond Us</a>
              </li>
              <li>
                <a href="/Ecom">E-com</a>
              </li>
              <li>
                <a href="/ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <ul className="menu-list">
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="newsletter">
              {/* <h3>Newsletter</h3> */}
          
              <p>Sign up to receive news & updates.</p>
              <div className="subscribe-container">
                <div className="input-button-container">
                  <input
                    type="email"
                    placeholder="Your Email"
                    class="email-input"
                    value=""
                    required
                  />
                  <button type="submit" class="subscribe-button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
