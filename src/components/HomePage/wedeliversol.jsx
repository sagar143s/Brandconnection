import React from "react";
import youtubelogo from "../../assets/you.png";
import distri from "../../assets/official-distributors.png";
import liasion from "../../assets/liaison.png";
import com from "../../assets/E-commerce.png";
import rell from "../../assets/sell-retailers.png";
import lae from "../../assets/private-label.png";

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
            <h1>We Deliver Solution with the Goal<br></br> of Trusting Relationships</h1>
          </div>
          <div className="wedeliver-icons-div">
            {calm.map((si) => (
              <div className="wedeliver-icon-box">
                <center>
                  <div className="wedeliver-icon">
                    {<img src={si.image} alt="" />}
                  </div>
                </center>
                <p>{si.text}</p>
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
