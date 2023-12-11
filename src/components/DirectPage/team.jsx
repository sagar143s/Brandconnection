import React from 'react';
import Image1 from '../../assets/team/RIC05522.jpg';
import Image2 from '../../assets/team/RIC05527.jpg';
import Image3 from '../../assets/team/RIC05529.jpg';
import Image4 from '../../assets/team/RIC05820.jpg';
import Image5 from '../../assets/team/RIC05946.jpg';

import Image7 from '../../assets/team/WhatsApp Image 2023-10-07 at 18.31.10_2c9a894d.jpg';
import Image8 from '../../assets/team/boxpark store image.jpg'
import Image9 from '../../assets/team/IMG_20221229_175746.jpg'
import './direct.css';

const TeamMember = ({ imageUrl }) => {
  return (
    <div className="teamMember">
      <img src={imageUrl} alt="Team Member" className='image'/>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { imageUrl: Image9 },

    { imageUrl: Image3 },
    { imageUrl: Image4 },
    { imageUrl: Image5 },

    { imageUrl: Image7},

    { imageUrl: Image1},
  ];

  return (
    <div style={{padding:"25px 0 50px"}}>
    <div className='container' >
      <h2 className='heading'></h2>
      <div className="teamGallery " >
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
    </div>
  );
};



export default Team;
