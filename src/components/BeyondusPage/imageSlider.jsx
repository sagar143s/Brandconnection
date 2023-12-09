import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './image.css';
import Image1 from '../../assets/team/IMG_20221229_175746.jpg';
import Image2 from '../../assets/team/RIC05522.jpg';
import Image3 from '../../assets/team/WhatsApp Image 2023-10-07 at 18.31.10_2c9a894d.jpg';
import Image4 from '../../assets/team/RIC05529.jpg';
import Image5 from '../../assets/team/RIC05529.jpg';
import Image6 from '../../assets/team/RIC05529.jpg';
import Image7 from '../../assets/team/RIC05529.jpg';

const ImageSlider = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7]; // Add more images as needed

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    className:'slides',
    slidesToScroll: 4,
    autoplay: true,
    
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="image-slider-container" style={{border:"none"}}>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
