import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar f jcb aic">
      <Link>
        <div className="title">Gabriel Smith</div>
      </Link>
      <div className="f">
        <div className="nav-link">
          <Link>Projects</Link>
        </div>

        <div className="nav-link">
          <Link>Work</Link>
        </div>

        <div className="nav-link">
          <Link>Education</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
