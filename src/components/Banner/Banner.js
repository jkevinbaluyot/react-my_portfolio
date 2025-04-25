import React from 'react';
import './Banner.scss';
import ProfileImage from '../../images/8bit-profile.png'; // Update the path to your image
import Image from 'react-bootstrap/Image';

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center flex-column flex-lg-row">
      <div className='text-center text-lg-end mx-3'>
        <h1>John Kevin Baluyot</h1>
        <p>Your tagline or description goes here.</p>
      </div>
      <div className='mx-3'>
        {/* Add your image here */}
        <Image src={ProfileImage} rounded/>
      </div>
    </div>
  );
};

export default Banner;