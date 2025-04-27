import React from 'react';
import ProfileImage from '../../assets/images/8bit-profile.png'; // Update the path to your image
import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner section">
      <Container className='h-100 d-flex align-items-center justify-content-lg-between flex-column flex-lg-row'>
        <div>
          <h1>John Kevin 
            <span className='small d-block'> Baluyot</span>
          </h1>
          <p>I'm a web developer.</p>
        </div>
        <div>
          <Image src={ProfileImage} rounded/>
        </div>
      </Container>

    </div>
  );
};

export default Banner;