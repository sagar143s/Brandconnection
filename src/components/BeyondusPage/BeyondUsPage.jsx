import React, { useEffect, useState } from 'react';
import Beyondbrand from "./beyondbrand";
import Beyondusbg from "./beyondusbg";
import Clientsay from "./clientsay";
import Counter from "./counter";
import Team from './team';
import './beyond.css';
import History from '../HistoryPage/HistoryPage';
import Historymobile from '../History2/HistoryPage';

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
      <Beyondbrand />
      <Counter />
      {/* <Clientsay /> */}
      {isMobile ? <Historymobile /> : <History />}
      <Team />
    </div>
  );
}

export default BeyondUsPage;
