import React from "react";
import buckleypng from "../../assets/buckley-london.png";
import Disneypng from "../../assets/Disney.png";
import koralpng from "../../assets/Koral.png";
import pokemonpng from "../../assets/Pokemon.png";
import babplatpng from "../../assets/babplat.png";
import diadorapng from "../../assets/diadora.png";
import filspng from "../../assets/fils.png";
import itouchpng from "../../assets/i-touch.png";
import marvelpng from "../../assets/marvel.png";
import minecraftpng from "../../assets/minecraft.png";
import winniepng from "../../assets/winnie-the-pool.png";

export default function Marquee() {
  return (
    <div className="marquee-container">
      <marquee scrollamount="10">
        <img src={buckleypng} alt="" />
        <img src={Disneypng} alt="" />
        <img src={koralpng} alt="" />
        <img src={pokemonpng} alt="" />
        <img src={babplatpng} alt="" />
        <img src={diadorapng} alt="" />
        <img src={filspng} alt="" />
        <img src={itouchpng} alt="" />
        <img src={marvelpng} alt="" />
        <img src={minecraftpng} alt="" />
        <img src={winniepng} alt="" />
      </marquee>
    </div>
  );
}
