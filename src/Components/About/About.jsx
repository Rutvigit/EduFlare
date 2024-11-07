import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import playicon from '../../assets/playicon.png'


const About = ({setIsPlaying}) => {
  return (
    <div className='about'>
     <div className="about-left">
       
     <img src={about_img} alt='' className='about-img'/>
     <img src={playicon} alt='' className='playicon' onClick={()=>
      {setIsPlaying(true)}
     }/>
     </div>
     <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow's Leaders Today</h2>
       <p>Our mission is to empower students with the knowledge, skills, and values necessary to make meaningful contributions to their communities and the world. Through a curriculum that balances theory with practical application, we aim to foster critical thinking, creativity, and a lifelong love of learning.</p>
      <p> With a strong emphasis on interdisciplinary education and global perspectives, university prepares future leaders to thrive in an ever-changing world. Whether through groundbreaking research, community engagement, or innovative partnerships, we are committed to making a positive impact on both local and global scales.</p> 
    </div>
    </div>
  )
}

export default About
