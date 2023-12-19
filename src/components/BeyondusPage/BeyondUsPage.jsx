import React, { useEffect, useState } from 'react';
import Beyondbrand from "./beyondbrand";
import Beyondusbg from "./beyondusbg";
import Clientsay from "./clientsay";
import Counter from "./counter";
import Bread from './bread'

import './beyond.css';
import History from '../HistoryPage/HistoryPage';
import Historymobile from '../History2/HistoryPage';
// import Slider from './imageSlider'
import Team from '../DirectPage/team'

function BeyondUsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Beyondusbg />
      <Bread/>
      <Beyondbrand />
      {/* <Team/> */}
      <Counter />
      {/* <Clientsay /> */}
      {isMobile ? <Historymobile /> : <History />}
    
    </div>
  );
}

export default BeyondUsPage;
