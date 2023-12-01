import React from "react";
import brandLogo from "../../src/assets/brand-connection-white-logo.png";
import Insta from '..//assets/social/instagram.png';
import Linkedin from '../assets/social/linkedin.png';
import './footer.css'

export default function MyCustomFooter() {
  // return (
  //   <div className="my-custom-footer">
  //     <div className="custom-container">
  //       <div className="custom-footer-container">
  //         <div className="custom-column">
  //           <div className="custom-logo-div">
  //             <a href="#" alt="">
  //               <img src={brandLogo} alt="" className="custom-logo" />
  //             </a>
  //           </div>
  //         </div>
          
       
  //         <div className="custom-column">
  //           <div className="custom-newsletter">
  //             <ul style={{display:"flex", listStyle:"none", gap:"20px", marginTop:"25px"}}>
  //               <li><img src={Insta} alt="Instagram" style={{maxWidth:"20px", height:"auto"}}/></li>
  //               <li><img src={Linkedin} alt="LinkedIn" style={{maxWidth:"20px", height:"auto"}}/></li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  return(
    <div className="background_footer">
    <div className="container" style={{padding:"50px 0"}} >
     <div className="footer_main" style={{maxWidth:"1400PX", margin:"0 auto"}}>
      <div>
      <a href="#" alt="">
            <img src={brandLogo} alt="" className="customLogo"  style={{maxWidth:"200PX"}}/>
         </a>
      </div>
      <div>
      <ul className="social_medias" style={{display:"flex", listStyle:"none", gap:"20px", marginTop:"25px"}}>
               <li><img src={Insta} alt="Instagram" style={{maxWidth:"20px", height:"auto"}}/></li>
          <li><img src={Linkedin} alt="LinkedIn" style={{maxWidth:"20px", height:"auto"}}/></li>
             </ul>
      </div>
     </div>

    </div>
    </div>

  );
}
