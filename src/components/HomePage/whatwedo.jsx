import React from "react";
import aboutus from "../../assets//frame 02.png";

export default function Whatwedo() {
  return (
    <div className="whatwedo">
      <div className="container">
        <div className="whatwedo-up">
          <div>
            <h6>WHAT WE DO?</h6>
          </div>
          <div>
            <h3>Brand Builders and Developers</h3>
          </div>
        </div>
        <div className="whatwedo-container">
          <div className="whatwedo-left col-lg-6 col-md-12 col-sm-12">
            <img src={aboutus} className="whatwedo-image" alt="" />
          </div>
          <div className="whatwedo-right col-lg-6 col-md-12 col-sm-12">
            <div>
              <h6>WHAT WE DO?</h6>
            </div>
            <div>
              <h3>Brand Builders & Developers</h3>
            </div>
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
              At Brand Connection Trading, we are driven by our passion for
              connecting people with the lifestyle brands they love. Our mission
              is to bring innovation, style, and quality to every corner of the
              MENA region. Whether you are a retailer seeking premium brands or
              a consumer in search of the latest trends, you can trust Brand
              Connection Trading to be your partner in style and fitness.
              <div>
                <br></br>
              </div>
              Explore our website to learn more about our brands and services,
              and discover how we can enhance your retail experience. Join us on
              our journey as we continue to shape the future of lifestyle brand
              distribution in the Middle East.
            </p>
            <a href="./BeyondUs">
              <button class="whatwedo-button">READ MORE</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}