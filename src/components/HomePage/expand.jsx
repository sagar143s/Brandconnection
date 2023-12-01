import React from "react";
import shirt from "../../assets/underwear_3707202.png";
import footwear from "../../assets/rain-boots_7132660.png";
import jewelry from "../../assets/diamond_6521270.png";
import watches from "../../assets/wristwatch_8892345.png";
import icon1 from "../../assets/Disney.png"; // Add your icon image paths
import icon2 from "../../assets/Disney.png";
import icon3 from "../../assets/Disney.png";
import icon4 from "../../assets/Disney.png";
import "./Expand.css"; // Import your stylesheet

export default function Expand() {
  return (
    <div className="expand">
      <div className="container">
        <div className="expand-container">
          <h1>
            <b style={{color:"#000"}}>Expand Your Business</b>
          </h1>
          <div className="box-container">
            {/* Box 1 */}
            <div className="box" >
              <div className="box-content">
                <img className="box-icon" src={icon1} alt="Icon 1" />
                <div className="boxicon box1"  style={{maxWidth:"280PX"}}>
                  SPORTS FASHION
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="box" style={{ backgroundImage: `url(${footwear})` }}>
              <div className="box-content">
                <img className="box-icon" src={icon2} alt="Icon 2" />
                <div className="boxicon box2" style={{ color: "#fff" }}>
                  FOOTWEAR
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="box" style={{ backgroundImage: `url(${watches})` }}>
              <div className="box-content">
                <img className="box-icon" src={icon3} alt="Icon 3" />
                <div className="boxicon box3" style={{ color: "#fff" }}>
                  WATCHES
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="box" >

              <div className="box-content">
                <img className="box-icon" src={icon4} alt="Icon 4" />
                <div className="boxicon box4" style={{ color: "#fff" }}>
                  ACCESSORIES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
