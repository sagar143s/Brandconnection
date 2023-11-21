import React from "react";
import branding from "../../assets/frame 02.png";

export default function Beyondbrand() {
  return (
    <div className="beyondbrand">
      <div className="container">
        <div className="beyondbrand-container">
          <div className="beyondbrand-left col-lg-6 col-md-12 col-sm-12">
            <img src={branding} alt="" />
          </div>
          <div className="beyondbrand-right col-lg-6 col-md-12 col-sm-12">
            <div style={{padding:"20px 0"}}>
              {/* <h1>About Us</h1> */}
            </div>
            <p>
              Established in 2017 and based in Dubai, Brand Connection Trading
              is the regional distributor to many international lifestyle brands
              across Sports Fashion, Fitness and Watch industries.
            </p>
            <p>
              <br></br>
              <div></div>
              Established in 2017 and based in Dubai, Brand Connection Trading
              is the regional distributor to many international lifestyle brands
              across Sports Fashion, Fitness and Watch industries.
            </p>
            <p>
              <br></br>
              <div></div>
              We are Brand Builders and developers! Our expertise has allowed us
              to develop a diversified business model for the evolving retail
              market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
