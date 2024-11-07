import React from 'react'
import './Programs.css'
import program_1 from "../../assets/program1.png"
import program_2 from "../../assets/program2.png"
import program_3 from "../../assets/program3.png"
import programicon_1 from "../../assets/program1icon.png"
import programicon_2 from "../../assets/program2icon.png"
import programicon_3 from "../../assets/program3icon.png"

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
          <img src={program_1} alt=""/>
            <div className='caption'>
              <img src={programicon_1} alt=""/>
               <p>Engineering</p>
            </div>
        </div>   
        <div className='program'>
          <img src={program_2} alt=""/>
          <div className='caption'>
              <img src={programicon_2} alt=""/>
               <p>Pharmaceutics</p>
            </div>
        </div>    
        <div className='program'>
          <img src={program_3} alt=""/>
          <div className='caption'>
              <img src={programicon_3} alt=""/>
               <p>MBA in Marketing</p>
            </div>
        </div>    
    </div>
  )
}

export default Programs
