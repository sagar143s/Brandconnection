import React from "react";
import buckleyimg from "../../assets/Buckley-London.jpg";
import buckleypng from "../../assets/buckley-london.png";
import Disneyimg from "../../assets/Disney.jpg";
import Disneypng from "../../assets/Disney.png";
import koralimg from "../../assets/KORAL.jpg";
import koralpng from "../../assets/Koral.png";
import pokemonimg from "../../assets/Pokemon.jpg";
import pokemonpng from "../../assets/Pokemon.png";
import babplatimg from "../../assets/babplat.jpg";
import babplatpng from "../../assets/babplat.png";
import diadoraimg from "../../assets/diadora.jpg";
import diadorapng from "../../assets/diadora.png";
import filsimg from "../../assets/fils.jpg";
import filspng from "../../assets/fils.png";
import itouchimg from "../../assets/i-touch.jpg";
import itouchpng from "../../assets/i-touch.png";
import marvelimg from "../../assets/marvel.jpg";
import marvelpng from "../../assets/marvel.png";
import minecraftimg from "../../assets/minecraft.jpg";
import minecraftpng from "../../assets/minecraft.png";
import winnieimg from "../../assets/winnie-the-pooh.jpg";
import winniepng from "../../assets/winnie-the-pool.png";

export default function Gallery() {
  const info = [
    {
      id: 1,
      imgcontainer: buckleyimg,
      imglogo: buckleypng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      imgcontainer: Disneyimg,
      imglogo: Disneypng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 3,
      imgcontainer: koralimg,
      imglogo: koralpng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 4,
      imgcontainer: pokemonimg,
      imglogo: pokemonpng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 5,
      imgcontainer: babplatimg,
      imglogo: babplatpng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 6,
      imgcontainer: diadoraimg,
      imglogo: diadorapng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 7,
      imgcontainer: filsimg,
      imglogo: filspng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 8,
      imgcontainer: itouchimg,
      imglogo: itouchpng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 9,
      imgcontainer: marvelimg,
      imglogo: marvelpng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 10,
      imgcontainer: minecraftimg,
      imglogo: minecraftpng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 11,
      imgcontainer: winnieimg,
      imglogo: winniepng,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <div className="gallerybrand">
      <div className="container">
        <div className="gallerybrand-container">
          {info.map((data) => (
            <div className="image-item">
              <div className="image-container">
                <img src={data.imgcontainer} alt="" />
                <div class="image-text">
                  <img src={data.imglogo} alt="" class="logo1" />
                  {data.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
