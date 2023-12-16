import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Body1() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="body0">
      <Slider {...sliderSettings}>
        <div className="body1-slide body1">
          <h1 className="body1-title">
          Fashion Meets Fitness
          </h1>
          {/* <h3 className="body1-title1">Crafting a Legacy for your brand's Middle East chapter</h3> */}
          {/* <button className="body1-button">GET STARTED</button> */}
        </div>
        <div className="body1-slide body2">
        {/* <h1 className="body1-title" style={{ paddingTop: "250px" }}>
        Fashion Meet Fitness
          </h1>
          <h3 className="body1-title1"></h3> */}
          {/* <button className="body1-button">GET STARTED</button> */}
        </div>
        <div className="body1-slide body3">
   
          {/* <button className="body1-button">GET STARTED</button> */}
        </div>
      </Slider>
    </div>
  );
}
