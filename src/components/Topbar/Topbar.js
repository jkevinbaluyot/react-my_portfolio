import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ImageIcon from '../../assets/images/image-solid.svg';
import { Image } from 'react-bootstrap';
import BarImage from '../../assets/images/bars-solid.svg';

const Topbar = () => {
  return (
    <Navbar 
      expand="lg" 
      className="topbar p-0 px-3"
    >
      <Navbar.Brand className='py-0 d-flex align-items-center'>
        <Image src={ImageIcon} height={40}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <Image src={BarImage} height={40}/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;