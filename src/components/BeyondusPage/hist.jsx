import React from 'react';
import './TwoColumnComponent.css'; 
import Image from '../../assets/history/hist.png'

const TwoColumnComponent = () => {
  return (
    <div className='container' style={{padding:"80px 0"}}>

  
    <div className="two-column-container">
   
      <div className="left-column">
        <h2>WHO ARE WE ? </h2>
        <ul style={{textAlign:'left',margin:'0 auto',maxWidth:"550px"}}>
            <li>We drive our business with passion and integrity</li>
            <li>We strive to understand our partners and consumers needs</li>
            <li>We aim to create a lifestyle environment driven by Fashion Fitness</li>
        </ul>
  
      </div>

  
      <div className="right-column">
        <img
          src={Image}
          alt="Right Column Image"
          style={{maxWidth:"100%",width:'1200px'}}
        />
      </div>
    </div>
    </div>
  );
};

export default TwoColumnComponent;
