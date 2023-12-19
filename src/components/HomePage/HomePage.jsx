import Body1 from "./body1";
import Whatwedo from "./whatwedo";
import Wedeliversol from "./wedeliversol";
import Ournetwork from "./ournetwork";
import Expand from "./expand";
import Ourbrands from "./ourbrands";
import Insta from './instavideos'
import Marquee from '../BeyondusPage/marquee'
import Banner2 from "./banner2";
import Feedback from './partnerwithus'
import Instagramfeeds from './instafeed'

function HomePage() {
  return (
    <div>
      <Body1 />
      <Whatwedo />
      <Wedeliversol />
      {/* <Insta/> */}
      <Ournetwork />
  

      {/* <Expand /> */}
      {/* <Ourbrands /> */}
      <Banner2/>
      <div className="mobilemarquee">
      <Marquee/>
      </div>
      <Feedback/>
      <Instagramfeeds/>
    
      {/* <Insta/> */}

  
    </div>
  );
}

export default HomePage;
