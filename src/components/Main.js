import React from 'react';
import blobs from '../images/blobs.png';
import orb2 from '../images/orb2.png'
import { Navbar, Footer, Box, Input } from './index';

const Main = () => {
  return (
    <div>
      <Navbar />
      <img className="blobs" src={blobs} alt="blobs" />
      <button className="button">Button</button>
      <img className="orb2" src={orb2} alt="orb2" />
      <Input />
      {/* <Box className="box"/> */}
      <img className="orb1" src={orb2} alt="orb1" />
      <Footer />
    </div>
  );
};

export default Main;
