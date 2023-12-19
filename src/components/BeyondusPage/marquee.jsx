import React, { useEffect, useState } from "react";
import buckleypng from "../../assets/buckley-london.png";
import Disneypng from "../../assets/Disney.png";
import koralpng from "../../assets/Koral.png";
import babplatpng from "../../assets/babplat.png";
import filspng from "../../assets/fils.png";
import itouchpng from "../../assets/i-touch.png";
import marvelpng from "../../assets/marvel.png";
import winniepng from "../../assets/winnie-the-pool.png";
import Tikka from '../../assets/breadcrumb/tickers.png'
import Apparel from '../../assets/breadcrumb/xcite.png'
import Intersport from '../../assets/breadcrumb/Intersports.png'
import Brandforless from '../../assets/breadcrumb/brand for less.png'

export default function Marquee() {
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="marquee-container" id="marquepartner">
    <marquee
      id="my-marquee"
      loop="infinite"
      behavior="alternate"
      direction="left"
      scrollamount="10"
      width="100%"
      style={{margin:"0px",padding:"0px"}}
    >
     
        <img src={buckleypng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={Disneypng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={koralpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        {/* <img src={pokemonpng} alt="" /> */}
        <img src={babplatpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        {/* <img src={diadorapng} alt="" /> */}
        <img src={filspng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={itouchpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={marvelpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
           <img src={Tikka} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
            {/* <img src={Apparel} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} /> */}
          {/* <img src={Intersport} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} /> */}
               {/* <img src={Brandforless} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} /> */}
    
        {/* <img src={minecraftpng} alt="" /> */}
   
          <img src={buckleypng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={Disneypng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={koralpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        {/* <img src={pokemonpng} alt="" /> */}
        <img src={babplatpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        {/* <img src={diadorapng} alt="" /> */}
        <img src={filspng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={itouchpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
        <img src={marvelpng} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
            <img src={Tikka} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />
           {/* <img src={Apparel} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} />    */}
          {/* <img src={Intersport} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} /> */}
            {/* <img src={Brandforless} alt="" style={{
            maxWidth: isMobile ? "150px" : "300px",
            padding: isMobile ? "10px 20px" : "10px 60px",
          }} /> */}
    
    
        
      </marquee>
    </div>
  );
}
