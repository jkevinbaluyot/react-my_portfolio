import React from 'react';
import ProfileImage from '../../assets/images/8bit-profile.png'; // Update the path to your image
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <div 
      className="banner section" 
      id={'homeSection'}
    >
      <Container className='h-100 d-flex align-items-center justify-content-lg-between flex-column flex-lg-row'>
        <div className='col-lg-6 col-12 text-center text-lg-start'>
          <h1>John Kevin 
            <span className='small d-block'> Baluyot</span>
          </h1>
          <p>A software developer with over five years of experience designing, developing, and optimizing dynamic websites and web applications. </p>
        </div>
        <div>
          <Image src={ProfileImage} rounded/>
        </div>
      </Container>

    </div>
  );
};

export default Banner;