import React from 'react';

const Footer = () => {

  const footerLinks = [
    {
      name: 'GitHub',
      icon: 'github',
      url: ''
    },
    {
      name: 'LinkedIn',
      icon: 'github',
      url: ''
    },
    {
      name: 'Hashnode',
      icon: 'github',
      url: ''
    },
    {
      name: 'Email',
      icon: 'github',
      url: ''
    }
  ];
  return (
    <footer className="footer">
      <h2>
        Thanks for stopping by.
      </h2>
      <p>Other Links:</p>
      <ul className='footer-links list-unstyled'>
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}

      </ul>

      <p>Contact me at <a href='mailto:jkevinbaluyot@gmail.com'>jkevinbaluyot@gmail.com</a></p>
      <p>&copy; {new Date().getFullYear()} John Kevin Baluyot</p>
    </footer>
  );
};

export default Footer;