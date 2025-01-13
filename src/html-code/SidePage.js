import React from 'react'
import About from './About'
import OurCourses from './OurCourses'
import SOffer from './SOffer'
import Cochess from './Cochess'
import Footer from './Footer'
import '../css-code/SidePage.css'
export default function SidePage() {
  return (
    <div className='sidepage'>
       <About/>
        <OurCourses/>
        <SOffer/>
        <Cochess/>
        <Footer/>
    </div>
  )
}
