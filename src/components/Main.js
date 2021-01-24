import React from 'react'
import blobs from '../images/blobs.png'
import { Navbar, Footer } from './index'

const Main = () => {
  return (
    <div>
      <Navbar />
      <img className="blobs" src={blobs} alt="blobs"/>
      <button className="button">Button</button>
      <Footer />
    </div>
  )
}

export default Main
