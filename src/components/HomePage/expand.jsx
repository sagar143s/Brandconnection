import React from "react";
import shirt from "../../assets/underwear_3707202.png";
import footwear from "../../assets/rain-boots_7132660.png";
import jewelry from "../../assets/diamond_6521270.png";
import watches from "../../assets/wristwatch_8892345.png";
export default function Expand() {
  return (
    <div className="expand">
      <div className="container">
        <div className="expand-container">
          <h1>
            <b>Expand Your Business</b>
          </h1>
          <div className="box-container">
            <div className="box">
              <div class="boxicon">SPORTSWEAR</div>
              <div className="boxicon-image">
                <img src={shirt} alt="" />
              </div>
            </div>
            <div className="box">
              <div class="boxicon">FOOTWEAR</div>
              <div className="boxicon-image">
                <img src={footwear} alt="" />
              </div>
            </div>
            <div className="box">
              <div class="boxicon">JEWELRY</div>
              <div className="boxicon-image">
                <img src={jewelry} alt="" />
              </div>
            </div>
            <div className="box">
              <div class="boxicon">WATCHES</div>
              <div className="boxicon-image">
                <img src={watches} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
