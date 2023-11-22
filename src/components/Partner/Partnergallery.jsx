import React from "react";
import alshaya from "../../assets/alshaya.png";
import sunandsand from "../../assets/sunAndsand.png";
import virgin from "../../assets/virgin.png";
import noon from "../../assets/noon.png";
import sivvi from "../../assets/sivvi.png";
import deca from "../../assets/decathlon.png";
import xcite from "../../assets/xcite.png";
import azeg from "../../assets/amazon-eg.png";
import azae from "../../assets/amazon.ae.png";
import gosport from "../../assets/gosport.png";
import namshi from "../../assets/namshi.png";
import chalhoub from "../../assets/chalhoub.png";
import './partner.css';

export default function Partnergallery() {
  const imgs = [
    {
      id: 1,
      image: alshaya,
      ref: "https://www.alshaya.com/en/",
    },
    {
      id: 2,
      image: sunandsand,
      ref: "https://en-ae.sssports.com/",
    },
    {
      id: 3,
      image: virgin,
      ref: "https://www.virginmegastore.ae/en",
    },
    {
      id: 4,
      image: noon,
      ref: "https://www.noon.com/uae-en/",
    },
    {
      id: 5,
      image: sivvi,
      ref: "https://www.sivvi.com/uae-en/",
    },
    {
      id: 6,
      image: deca,
      ref: "https://www.decathlon.com/",
    },
    {
      id: 7,
      image: xcite,
      ref: "https://www.xcite.com/",
    },
    {
      id: 8,
      image: azeg,
      ref: "https://www.amazon.eg/",
    },
    {
      id: 9,
      image: azae,
      ref: "https://www.amazon.ae/",
    },
    {
      id: 10,
      image: gosport,
      ref: "https://gosportme.com/",
    },
    {
      id: 11,
      image: namshi,
      ref: "https://www.namshi.com/uae-en/",
    },
    {
      id: 12,
      image: chalhoub,
      ref: "https://www.chalhoubgroup.com/",
    },
  ];
  return (
    <div className="partnergallery">
      <div className="container">
        <div className="partnergallery-container">
          {imgs.map((data) => (
            <div className="partner-image">
              <a href={data.ref} target="_blank">
                <img src={data.image} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
