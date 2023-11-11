import React from "react";
import shoppingbag from "../../assets/shopping-bag_8826155.png";
import worldmap from "../../assets/world-map_5067216.png";
import network from "../../assets/management_5782851.png";
import center from "../../assets/center.png";
import topleft from "../../assets/topleft.jpg";
import topright from "../../assets/topright.jpg";
import bottomleft from "../../assets/bottomleft.jpg";
import bottomright from "../../assets/bottomright.jpg";
import profileimg from "../../assets/testimonial.jpg";

export default function Ournetwork() {
  return (
    <div className="ournetwork">
      <div className="container">
        <div className="ournetwork-container">
          <div className="ournetwork-body1">
            <div className="ournetwork-body1-left">
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
            <div className="ournetwork-body1-right">
              <div className="gallery">
                <div className="center-image">
                  <img src={center} alt="" />
                </div>
                <div className="top-left-image">
                  <img src={topleft} alt="" />
                </div>
                <div className="top-right-image">
                  <img src={topright} alt="" />
                </div>
                <div className="bottom-left-image">
                  <img src={bottomleft} alt="" />
                </div>
                <div className="bottom-right-image">
                  <img src={bottomright} alt="" />
                </div>
              </div>
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
