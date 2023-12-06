import React from "react";
import "./partnergallery.css";

// Import your images here
import alshaya from "../../assets/alshaya.png";
import sunAndSand from "../../assets/sunAndsand.png";
import noon from "../../assets/noon.png";
import decathlon from "../../assets/decathlon.png";
import xcite from "../../assets/xcite.png";
import amazonEG from "../../assets/amazon-eg.png";
import amazonAE from "../../assets/amazon.ae.png";
import gosport from "../../assets/gosport.png";
import namshi from "../../assets/namshi.png";

const PartnerGallery = () => {
  // Define your partner data
  const partnerData = [
    { id: 1, image: alshaya, link: "https://www.alshaya.com/en/", category: "LIFESTYLE", href: 'https://www.google.com/' },
    { id: 2, image: sunAndSand, link: "https://en-ae.sssports.com/", category: "SPORTS SPECIALIST" },
    { id: 4, image: noon, link: "https://www.noon.com/uae-en/", category: "E-COMMERCE" },
    { id: 6, image: decathlon, link: "https://www.decathlon.com/", category: "SPORTS SPECIALIST" },
    { id: 7, image: xcite, link: "https://www.xcite.com/", category: "LIFESTYLE" },
    { id: 8, image: amazonEG, link: "https://www.amazon.eg/", category: "E-COMMERCE" },
    { id: 9, image: amazonAE, link: "https://www.amazon.ae/", category: "E-COMMERCE" },
    { id: 10, image: gosport, link: "https://gosportme.com/", category: "SPORTS SPECIALIST" },
    { id: 11, image: namshi, link: "https://www.namshi.com/uae-en/", category: "E-COMMERCE" },
  ];

  // Get unique categories
  const uniqueCategories = [...new Set(partnerData.map((partner) => partner.category))];

  return (
    <div className="partner-gallery" style={{ padding: "10px 0 80px" }}>
      <div className="container">
        {uniqueCategories.map((category) => (
          <div className="boxmain" key={category}>
            <h3 className="categoryheading">{category}</h3>
            <div className="partner-gallery-container">
              {partnerData
                .filter((partner) => partner.category === category)
                .map((partner) => (
                  <div className="partner-card" key={partner.id}>
                    <a href={partner.href} target="_blank" rel="noopener noreferrer">
                      <img
                        src={partner.image}
                        alt={`Partner ${partner.id}`}
                        className="card-image"
                      />
                    </a>
                    <div className="partner-text-container">
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="partner-text"
                      >
                        {/* Partner {partner.id} */}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerGallery;
