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
import babplatpng from "../../assets/brandss/Logo S 02.png";
import diadoraimg from "../../assets/diadora.jpg";
import diadorapng from "../../assets/diadora.png";
import filsimg from "../../assets/fils.jpg";
import filspng from "../../assets/fils.png";
import itouchimg from "../../assets/i-touch.jpg";
import itouchpng from "../../assets/i-touch.png";
import marvelimg from "../../assets/kidsdisney.jpg";
import marvelpng from "../../assets/marvel.png";
import minecraftimg from "../../assets/minecraft.jpg";
import minecraftpng from "../../assets/minecraft.png";
import winnieimg from "../../assets/winnie-the-pooh.jpg";
import winniepng from "../../assets/winnie-the-pool.png";
import Hummel from '../../assets/brandss/Hummel 1.1.jpg'
import HummelLogo from '../../assets/brandss/Logo S 01.png'
import './brand.css';
export default function Gallery() {
  const info = [
    {
      id: 1,
      imgcontainer: buckleyimg,
      imglogo: buckleypng,
      text: "Affordable luxury, timeless style. Celebrity-inspired, modern designs without the high price tag",
    },
    {
      id: 2,
      imgcontainer: Disneyimg,
      imglogo: Disneypng,
      text: "Our amazing range of character smart & analogue watches featuring the beloved characters including Mickey, Frozen, LOL, Batman, Spiderman and others.",
    },
    {
      id: 3,
      imgcontainer: koralimg,
      imglogo: koralpng,
      text: "Where style meets performance in activewear, seamlessly blending fashion and function for a confident and sleek active lifestyle.",
    },
    // {
    //   id: 4,
    //   imgcontainer: pokemonimg,
    //   imglogo: pokemonpng,
    //   text: "Pokémon, a global sensation, unites trainers worldwide in the quest to Catch Em All across games, cards, shows, and movies.",
    // },
    {
      id: 5,
      imgcontainer: babplatimg,
      imglogo: babplatpng,
      text: "Babolat, a tennis innovator, is the top choice for players seeking performance and precision",
    },
    // {
    //   id: 6,
    //   imgcontainer: diadoraimg,
    //   imglogo: diadorapng,
    //   text: "expertly blends sport and style with iconic soccer cleats and trendy sneakers, a favorite for athletes and fashion enthusiasts.",
    // },
    {
      id: 7,
      imgcontainer: filsimg,
      imglogo: filspng,
      text: "FILA Watches provide unique appeal to a generation of outgoing, active young men and women who seek a timepiece that reflects their sporty, smart casual lifestyle.",
    },
    {
      id: 8,
      imgcontainer: itouchimg,
      imglogo: itouchpng,
      text: " Stylish smartwatches merging fashion and tech with fitness tracking and customizable features for a modern, on-the-go experience.",
    },
    {
      id: 9,
      imgcontainer: Hummel,
      imglogo: HummelLogo,
      text: "An entertainment giant, redefines storytelling with iconic superheroes like Spider-Man and the Avengers, captivating audiences worldwide.",
    },
    // {
    //   id: 10,
    //   imgcontainer: minecraftimg,
    //   imglogo: minecraftpng,
    //   text: "a pixelated sandbox game that sparks global creativity with endless building, exploring, and surviving possibilities in a dynamic universe.",
    // },
    // {
    //   id: 11,
    //   imgcontainer: winnieimg,
    //   imglogo: winniepng,
    //   text: " a cherished friend in the Hundred Acre Wood, embodies the warmth of enduring friendships and timeless storytelling alongside characters like Pooh, Piglet, and Tigger.",
    // },
  ];
  return (
    <div className="gallerybrand">
      <div className="container">
        <div className="gallerybrand-container">
          {info.map((data) => (
            <div className="image-item">
              <div className="image-container01">
                <img src={data.imgcontainer} alt="" />
                <div class="image-text">
                  <img src={data.imglogo} alt="" class="logo1" />
                  <span className="image_text">{data.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
