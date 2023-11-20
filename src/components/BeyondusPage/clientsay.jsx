import React from "react";
import client1 from "../../assets/clientsayimg1.jpg";
import client2 from "../../assets/clientsayimg2.jpg";
import profilepic from "../../assets/testimonial.jpg";

export default function Clientsay() {
  return (
    <div className="Clientsay" style={{padding:"80px 0 25px 0"}}>
      <div className="container">
        <div className="clientsay-container">
          <div className="clientsay-left col-lg-6 col-md-12 col-sm-12">
            <img src={client1} className="client1" alt="" />
            <img src={client2} className="client2" alt="" />
          </div>
          <div className="clientsay-right col-lg-6 col-md-12 col-sm-12">
            <h1>What Our Clients Say</h1>
            <div className="saytestimonial">
              <p>
                " The products and services provided have consistently exceeded
                my expectations. Whether it's clothing, sportswear, or watches,
                I've always found them to be of the highest quality and designed
                with the utmost care."
              </p>
              <div className="sayprofile">
                <img src={profilepic} alt="" />
                <p>John Doe</p>
              </div>
            </div>
            <div className="saytestimonial">
              <p>
                " The products and services provided have consistently exceeded
                my expectations. Whether it's clothing, sportswear, or watches,
                I've always found them to be of the highest quality and designed
                with the utmost care."
              </p>
              <div className="sayprofile">
                <img src={profilepic} alt="" />
                <p>John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
