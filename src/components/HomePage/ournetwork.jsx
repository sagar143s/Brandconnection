import React from "react";
import shoppingbag from "../../assets/icons/5503.png";
import worldmap from "../../assets/icons/5502.png";
import network from "../../assets/icons/5501.png";
import center from "../../assets/center.png";
import topleft from "../../assets/home/01.png";
import topright from "../../assets/home/02.png";
import bottomleft from "../../assets/bottomleft.jpg";
import bottomright from "../../assets//home/03.png";
import profileimg from "../../assets//home/04.png";
import Gall from '../../assets/Retailer.png'
import './home.css';

export default function Ournetwork() {
  return (
    <div className="ournetwork">
      <div className="container">
        <div className="ournetwork-container">
          <div className="ournetwork-body1 container col-lg-12 col-md-12 col-sm-12">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div>
                <h2>
                  <b>OUR NETWORK</b>
                </h2>
                <h1>10+ Brands | 9 Countries</h1>
              </div>
              <span class="divider"></span>
              <div className="ournetwork-premium">
                <div className="ournetwork-premium-logo">
                  <img src={shoppingbag} alt="" />
                </div>
                <div className="ournetwork-premium-content">
                  <h3>Premium Brands</h3>
                  <p>
                    We proudly represent 10 internationally renowned lifestyle
                    brands, each offering a unique and exceptional experience.
                  </p>
                </div>
              </div>
              <span class="divider"></span>
              <div className="ournetwork-premium">
                <div className="ournetwork-premium-logo">
                  <img src={worldmap} alt="" />
                </div>
                <div className="ournetwork-premium-content">
                  <h3>Global Presence</h3>
                  <p>
                    Our reach extends across 9 countries, connecting consumers
                    with the latest trends from around the world.
                  </p>
                </div>
              </div>
              <span class="divider"></span>
              <div className="ournetwork-premium">
                <div className="ournetwork-premium-logo">
                  <img src={network} alt="" />
                </div>
                <div className="ournetwork-premium-content">
                  <h3>Extensive Retail Network</h3>
                  <p>
                    With partnerships with over 40 retailers, we ensure that our
                    premium brands are accessible to consumers through trusted
                    outlets.
                  </p>
                </div>
              </div>
            </div>
            <div className="ourimg col-lg-6 col-md-6 col-sm-12">
              <img src={Gall} alt="image" className="imagedisplay" />
          
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-left">
              <div class="testi">
                <h3>FROM THE PARTNER</h3>
                <h6>
                  At the heart of our business lies an unwavering commitment to
                  passion and integrity.
                </h6>
              </div>
            </div>
            <div className="testimonial-right">
              <blockquote class="testimonial-text">
                "Our dedication goes beyond profit; it's about understanding the
                unique needs and desires of both our partners and consumers. We
                aspire to cultivate a dynamic lifestyle ecosystem that blends
                the worlds of fashion and fitness seamlessly."
              </blockquote>
              <div className="profile">
                <div className="profile-image">
                  <img src={profileimg} alt="" />
                </div>
                <div className="profile-info">
                  <p class="profile-name">John Smith</p>
                  <p class="profile-job">PARTNER - Amazon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
