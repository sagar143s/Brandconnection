import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Body1() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed in milliseconds
  };

  return (
    <div className="body0">
      <Slider {...sliderSettings}>
        <div className="body1-slide body1">
          <h1 className="body1-title" style={{ paddingTop: "200px" }}>
            Fashion Meet 
          </h1>
          <h1 className="body1-title1">Fitness</h1>
          <button className="body1-button">GET STARTED</button>
        </div>
        <div className="body1-slide body2">
        <h1 className="body1-title" style={{ paddingTop: "200px" }}>
            Fashion Meet 
          </h1>
          <h1 className="body1-title1">Fitness</h1>
          <button className="body1-button">GET STARTED</button>
        </div>
        {/* <div className="body1-slide body3">
        <h1 className="body1-title" style={{ paddingTop: "200px" }}>
            Fashion Meet 
          </h1>
          <h1 className="body1-title1">Fitness</h1>
          <button className="body1-button">GET STARTED</button>
        </div> */}
      </Slider>
    </div>
  );
}
