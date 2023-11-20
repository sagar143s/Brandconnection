import Body1 from "./body1";
import Whatwedo from "./whatwedo";
import Wedeliversol from "./wedeliversol";
import Ournetwork from "./ournetwork";
import Expand from "./expand";
import Ourbrands from "./ourbrands";
import Insta from './instavideos'
import Marquee from '../BeyondusPage/marquee'

function HomePage() {
  return (
    <div>
      <Body1 />
      <Whatwedo />
      <Wedeliversol />
      <Ournetwork />
      <Expand />
      {/* <Ourbrands /> */}
    
      <Insta/>
      <Marquee />
  
    </div>
  );
}

export default HomePage;
