import React from 'react';

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const Footer = () => {
  return (
    <div className="footer f jcc aic">
        <a href="https://github.com/gabesmithp" rel="noreferrer" target="_blank">
          <img src={linkedin} alt="linked in link" className="footer-link" />
        </a>
        <a href="https://linkedin.com/in/gabesmithp" rel="noreferrer" target="_blank">
          <img src={github} alt="github link" className="footer-link" />
        </a>
    </div>
  );
};

export default Footer;
