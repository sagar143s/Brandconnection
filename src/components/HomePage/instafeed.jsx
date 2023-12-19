import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './instafeed.css'; // Import your custom CSS file

// Import your images
import Image1 from '../../assets/instagram/1.png';
import Image2 from '../../assets/instagram/2.png';
import Image3 from '../../assets/instagram/3.png';
import Image4 from '../../assets/instagram/4.png';
import Image5 from '../../assets/instagram/5.png';
import Image6 from '../../assets/instagram/3.png';
import Image7 from '../../assets/instagram/4.png';
import Image8 from '../../assets/instagram/5.png';

const Instafeed = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

  const sliderSettings = {
    dots: false,
    infinite: true,
    loop:true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed (e.g., 3000 milliseconds or 3 seconds)
  };

  return (
    <div className='container01'>
    <div className="instafeed-container">
      <h2>Instagram Feed</h2>
      <Slider {...sliderSettings}> 
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Instafeed;
