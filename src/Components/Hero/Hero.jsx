import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/darkarrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='herotext'>
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting edge curriculum is designed to empower students with the knowlege, skills, and experience needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more<img src={darkarrow} alt=""></img></button>
      </div>
    </div>
  )
}

export default Hero
