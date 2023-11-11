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
            <h1>We Deliver Solution with the Goal of Trusting Relationships</h1>
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
          <div className="video1-left">
            <img src={youtubelogo} alt="" />
          </div>
          <div className="video1-right">
            <h2 class="youtubeh1">
              <b>Agency Excited With Our Solutions</b>
            </h2>
          </div>
        </div>
        <div className="youtube-player-overlay ">
          <div className="youtuber-player-popup">
            <iframe
              width="960"
              height="616"
              src="https://www.youtube.com/embed/BVCiEqbCL6Y?si=lXoN3-ORMDByXxAx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
