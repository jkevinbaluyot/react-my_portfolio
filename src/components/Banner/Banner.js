import React from 'react';
import ProfileImage from '../../assets/images/8bit-profile.png'; // Update the path to your image
import Image from 'react-bootstrap/Image';

const Banner = () => {
  return (
    <div className="banner section d-flex align-items-center justify-content-center flex-column flex-lg-row">
      <div className='mx-3'>
        <h1>John Kevin 
          <span className='small d-block'> Baluyot</span>
        </h1>
        <p>I'm a web developer.</p>
      </div>
      <div className='mx-3'>
        <Image src={ProfileImage} rounded/>
      </div>
    </div>
  );
};

export default Banner;