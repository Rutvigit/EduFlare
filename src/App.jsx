import { useState } from "react";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Videoplayer/Videoplayer'


const App = () => {
  
   const [isPlaying, setIsPlaying] = useState(false);
 

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
         <Programs/>
         <About setIsPlaying={setIsPlaying}/>
         <Title subTitle='Gallery' title='Campus View'/>
         <Campus/>
         <Title subTitle='Testimonials' title='Insights from Learners'/>
         <Testimonials/>
         <Title subTitle='Contact us' title='Connect with Us'/>
         <Contact/>
         <Footer/>
         <VideoPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      </div>
     
    </div>
  )
}

export default App
