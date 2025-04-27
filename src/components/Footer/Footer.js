import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Footer = () => {

  const footerLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/jkevinbaluyot'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'www.linkedin.com/in/john-kevin-baluyot-686272235'
    },
    {
      name: 'Hashnode',
      icon: <FaHashnode />,
      url: 'https://webology.hashnode.dev/'
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <h2>
          Thanks for stopping by.
        </h2>
        <p>Other Links:</p>
        <ul className='footer-links list-unstyled'>
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <span className='me-2'>{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        <p>Contact me at <a href='mailto:jkevinbaluyot@gmail.com'>jkevinbaluyot@gmail.com</a></p>
        <p>&copy; {new Date().getFullYear()} John Kevin Baluyot</p>
      </Container>
    </footer>
  );
};

export default Footer;