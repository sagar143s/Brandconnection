import React from "react";
import "./gallery.css";

import alshaya from "../../assets/alshaya.png";
import sunandsand from "../../assets/sunAndsand.png";
import noon from "../../assets/noon.png";
import deca from "../../assets/decathlon.png";
import xcite from "../../assets/xcite.png";
import azeg from "../../assets/amazon-eg.png";
import azae from "../../assets/amazon.ae.png";
import gosport from "../../assets/gosport.png";
import namshi from "../../assets/namshi.png";

const PartnerGallery = () => {
  const partnerData = [
    { id: 1, image: alshaya, link: "https://www.alshaya.com/en/" },
    { id: 2, image: sunandsand, link: "https://en-ae.sssports.com/" },
    { id: 4, image: noon, link: "https://www.noon.com/uae-en/" },
    { id: 6, image: deca, link: "https://www.decathlon.com/" },
    { id: 7, image: xcite, link: "https://www.xcite.com/" },
    { id: 8, image: azeg, link: "https://www.amazon.eg/" },
    { id: 9, image: azae, link: "https://www.amazon.ae/" },
    { id: 10, image: gosport, link: "https://gosportme.com/" },
    { id: 11, image: namshi, link: "https://www.namshi.com/uae-en/" },
  ];

  return (
    <div className="partner-gallery">
      <div className="container">
        <div className="partner-gallery-container">
          {partnerData.map((partner) => (
            <div className="partner-card" key={partner.id}>
              <img
                src={partner.image}
                alt={`Partner ${partner.id}`}
                className="card-image"
              />
              <div className="partner-text-container">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-text"
                >
                  Partner {partner.id}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerGallery;