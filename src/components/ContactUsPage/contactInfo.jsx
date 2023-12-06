import React from "react";
import './contact.css';

export default function ContactInfo() {
  return (
    <div className="contactinfo">
      <div className="container">
        <div className="contactinfo-container">
          <div className="location-box">
            <h3 className="ournetwotk_title">Office</h3>
            <div  >
              <p className="ournetwork_para"  style={{textAlign:'center' , fontSize:'16px'}}>
              Marasi Drive, Business Bay District
                <br></br>Burlington Tower, Office 411<br/>Dubai- UAE +971 4 341 0500
              </p>
            </div>
          </div>
          <div className="contactus-box">
            <h3 className="ournetwotk_title">Store</h3>
            <div>
              <p  className="ournetwork_para"  style={{textAlign:'center', fontSize:'16px'}}>
              Jumeirah, Al Wasl Road
                <br></br>Boxpark Shopping <br/>Dubai- UAE +971 56 896 4005
              </p>
            </div>
          </div>
          <div className="workinghours-box">
            <h3 className="ournetwotk_title">Working Hours</h3>
            <div>
              <p  className="ournetwork_para" style={{textAlign:'center', fontSize:'16px 15px '}}>
                Monday - Friday: 09:00 to 18:00.
                <br></br> Closed on Saturday & Sunday.
                <div style={{padding:" 11px 15px"}}></div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
