import React from 'react';
import Image1 from '../../assets/team/RIC05522.jpg';
import Image2 from '../../assets/team/RIC05527.jpg';
import Image3 from '../../assets/team/RIC05529.jpg';
import Image4 from '../../assets/team/RIC05820.jpg';
import Image5 from '../../assets/team/RIC05946.jpg';

import Image7 from '../../assets/team/WhatsApp Image 2023-10-07 at 18.31.10_2c9a894d.jpg';
import Image8 from '../../assets/team/boxpark store image.jpg'
import Image9 from '../../assets/team/IMG_20221229_175746.jpg'

const TeamMember = ({ imageUrl }) => {
  return (
    <div className="team-member" style={styles.teamMember}>
      <img src={imageUrl} alt="Team Member" style={styles.image} />
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    { imageUrl: Image9 },
    { imageUrl: Image2 },
    { imageUrl: Image3 },
    { imageUrl: Image4 },
    { imageUrl: Image5 },

    { imageUrl: Image7},
    { imageUrl: Image8},
    { imageUrl: Image1},
  ];

  return (
    <div style={{padding:"25px 0 50px"}}>
    <div className='container' >
      <h2 style={styles.heading}></h2>
      <div className="team-gallery" style={styles.teamGallery}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
    </div>
  );
};

const styles = {
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: '28px',
    margin: '20px 0',
  },
  teamGallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  teamMember: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    width: '100%',
    height: 'auto', 
    objectFit: 'cover', 
    borderRadius: '12px',
    maxHeight:'270px',
  },
};

export default Team;
