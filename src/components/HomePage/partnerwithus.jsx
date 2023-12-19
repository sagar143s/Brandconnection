import React from 'react'
import profileimg from "../../assets/people.png"
import './home.css'

const partnerwithus = () => {
  return (
 
    <div className="container" id='feedback' >
    <div className="testimonial" >
      <div className="testimonial-left">
        <div class="testi">
          <h3 className="brands_ournetwork"  >Why partner with us?</h3>
          <h6 className="ournetwork_para" style={{textAlign:"center"}}>
          Simply, we are Brand Builders and developers. <br/>
          With more than 25 years experience in the Lifestyle retail and wholesale business for the MENA region, we develop our brands with the right channel partners in order to create a long term sustainable business and maximize brands' reach.
          </h6>
        </div>
      </div>
      
      <div className="testimonial-right">
        <blockquote class="testimonial-text">
          "Our dedication goes beyond profit; it's about understanding the
                unique needs and desires of both our partners and consumers. We
                aspire to cultivate a dynamic lifestyle ecosystem that blends
                the worlds of fashion and fitness seamlessly."
        </blockquote>
        <div className="profile">
          <div className="profile-image">
            <img src={profileimg} alt="" />
          </div>
          <div className="profile-info" id='direct_path'>
            <p class="profile-name" style={{textAlign:"left"}}>John Smith</p>
            <p class="profile-job" style={{marginTop:"-20PX"}}>PARTNER - Amazon</p>
          </div>
        </div>
      </div>
  
    </div>
    </div>
  )
}

export default partnerwithus