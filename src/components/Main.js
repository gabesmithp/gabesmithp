import React from 'react'
import blobs from '../blobs.png'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div>
      <Navbar />
      <img className="blobs" src={blobs} alt="blobs"/>
      <button className="button">Button</button>
    </div>
  )
}

export default Main
