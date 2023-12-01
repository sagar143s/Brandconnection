import React from 'react';
import Video1 from '../../assets/instagram/video1.mp4';
import Video2 from '../../assets/instagram/video2.mp4';
import './insta.css';

const instavideos = () => {
  return (
    <div className='instamain'>
      <div className='brandcon'><center><i>#BabolatArabia</i></center></div>
      <div className='container' id='mainsta'>
        <video autoPlay loop muted  className='videoins' >
          <source className='videoins1' src={Video1} type="video/mp4" style={{borderRadius:"105PX"}} />

        </video>
        <video autoPlay loop muted  className='videoins' >
          <source  className='videoins1' src={Video2} type="video/mp4" />

        </video>
      </div>
    </div>
  );
};

export default instavideos;
