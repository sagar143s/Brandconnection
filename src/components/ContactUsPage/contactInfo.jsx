import React from "react";

export default function ContactInfo() {
  return (
    <div className="contactinfo">
      <div className="container">
        <div className="contactinfo-container">
          <div className="location-box">
            <h3>Office:</h3>
            <div >
              <p>
              Marasi Drive, Business Bay District
                <br></br>Burlington Tower, office 411<br/>Dubai- UAE +971 4 341 0500
              </p>
            </div>
          </div>
          <div className="contactus-box">
            <h3>Store:</h3>
            <div>
              <p>
              Jumeirah, Al Wasl road
                <br></br>Boxpark Shopping <br/>Dubai- UAE+  <br/>971 56 896 4005
              </p>
            </div>
          </div>
          <div className="workinghours-box">
            <h3>Working Hours</h3>
            <div>
              <p>
                Monday - Friday: 09:00 to 18:00 (GMT +8).
                <br></br> Closed on Saturday Sunday.
                <div style={{padding:" 16px"}}></div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
