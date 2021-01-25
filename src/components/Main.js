import React from 'react';
import blobs from '../images/blobs.png';
import { Navbar, Footer, Sphere } from './index';

const Main = () => {
  return (
    <div>
      <Navbar />
      <img className="blobs" src={blobs} alt="blobs" />
      <button className="button">Button</button>
      <Sphere />
      <Footer />
    </div>
  );
};

export default Main;
