import React from "react";
import youtubelogo from "../../assets/you.png";
import distri from "../../assets/icons02/official-distributors.png";
import liasion from "../../assets//icons02/liaison.png";
import com from "../../assets/icons02/E-commerce.png";
import rell from "../../assets/icons02/sell-retailers.png";
import lae from "../../assets/icons02/private-label.png";

export default function Wedeliversol() {
  // const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
  // const YTLinks = document.querySelectorAll(".video1-left");

  // YTLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //     YTPlayerOverlay.classList.add("active");
  //   });
  // });

  // YTPlayerOverlay.addEventListener("click", () => {
  //   YTPlayerOverlay.classList.remove("active");
  // });

  const calm = [
    {
      id: 1,
      image: distri,
      text: "Official Distributors",
    },
    {
      id: 2,
      image: liasion,
      text: "Liaison Office For Brands",
    },
    {
      id: 3,
      image: com,
      text: "Supply E-Commerce",
    },
    {
      id: 4,
      image: rell,
      text: "Sell Retailers",
    },
    {
      id: 5,
      image: lae,
      text: "Develop Private Labels",
    },
  ];

  return (
    <div className="wedeliver">
      <div className="container">
        <div className="wedeliver-container">
          <div class="wedeliver-banner">
            <h1>Our Journey Towards Meaningful Connections<br></br> </h1>
          </div>
          <div className="wedeliver-icons-div">
            {calm.map((si) => (
              <div className="wedeliver-icon-box">
                <center>
                  <div className="wedeliver-icon">
                    {<img src={si.image} alt="" />}
                  </div>
                </center>
                <p className="wedeliver_font">{si.text}</p>
              </div> 
            ))}
          </div>
        </div>
        <div className="video1">
        <iframe className="youtube-video" src="https://www.youtube.com/embed/BVCiEqbCL6Y?autoplay=1&controls=0&mute=1" frameBorder="0" allowFullScreen />
        </div>

      </div>
    </div>
  );
}
