import React from "react";
import aboutus from "../../assets//frame 02.png";
import './home.css';

export default function Whatwedo() {
  return (
    <div className="whatwedo" >
      <div className="container">
        <div className="whatwedo-up">
          <div>
            <h6>WHAT WE DO?</h6>
          </div>
          <div >
            <h1  style={{color:"#000"}}>Brand Builders and Developers</h1>
          </div>
        </div>
        <div className="whatwedo-container">
          <div className="whatwedo-left col-lg-6 col-md-12 col-sm-12"style={{marginTop:"25PX"}} >
            <img src={aboutus} className="whatwedo-image" alt="" />
          </div>
          <div className="whatwedo-right col-lg-6 col-md-12 col-sm-12">
          <center> <div>
             <h5 style={{ fontFamily: 'eqstdrounded-thin, sans-serif',fontWeight:'100 !important' }}>WHAT WE DO?</h5>
            </div></center> 
            <center><div className="brandbuilders">
              <h1 style={{fontSize:"35px",color:"#000"}}>Brand Builders & Developers</h1>
            </div></center> 
            <p>
              <div>
                <br></br>
              </div>
              We are more than just a distributor; we are brand builders and
              developers. Our deep industry knowledge, combined with years of
              experience, has enabled us to create a versatile business model
              tailored to the ever-evolving retail landscape. We stay ahead of
              the curve by continuously adapting to market trends and consumer
              preferences, ensuring that our brands thrive in the competitive
              retail environment.
              <div>
                <br></br>
              
              
              </div>
              Explore our website to learn more about our brands and services,
              and discover how we can enhance your retail experience. Join us on
              our journey as we continue to shape the future of lifestyle brand
              distribution in the Middle East.
            </p>
            <a className="whatwedo-button" href="./BeyondUs">
           Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
