import React from "react";
import babolatimg from "../../assets/bablot.jpg";
import babolatpng from "../../assets/babplat.png";
import hummelimg from "../../assets/Hummel.jpg";
import hummelpng from "../../assets/hummel.png";

export default function Directgallery() {
  const info = [
    {
      id: 1,
      image: babolatimg,
      loggo: babolatpng,
      ref: "https://www.babolat.ae/en-ae",
      width: "250px",
      height: "250px",
    },
    {
      id: 2,
      image: hummelimg,
      loggo: hummelpng,
      ref: "https://www.hummel.net/",
      width: "250px",
      height: "160px",
    },
  ];
  return (
    <div className="directgallery">
      <div className="container">
        <div className="directgallery-container">
          {info.map((data) => (
            <a href={data.ref} target="_blank">
              <div className="direct-item">
                <div className="direct-container">
                  <img src={data.image} alt="" />
                  <div className="direct-logo">
                    <img src={data.loggo} alt=""  style={{maxWidth:"140PX",maxHeight:"50px"}}/>
                    <a href={data.ref} target="blank" style={{color:"#000",textDecoration:'',marginTop:"40PX"}}> View More</a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
