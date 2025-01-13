import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css-code/Header.css'
import About from './About'
import OurCourses from './OurCourses'
import SOffer from './SOffer'
import Cochess from './Cochess'
import Footer from './Footer'
import SidePage from './SidePage'
export default function Header() {
  return (
    <>
      <div class="header-1">
        <header className='header-contaner'>
          <div class="logo">
            <span>M</span>
            Fitness
          </div>

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#trainers">Trainers</a>
            </li>
            <li>
              <a href="#contract">Contact</a>
            </li>
          </ul>
            </header>
        <section className="section-hero">
          <div class="container-hero-box">
            <h1 className="heading-1">A place for your fitness goals</h1>
            <p className="description">
              We offer Functional Training, Plyometric Boxes, Aerobics classes,
              TRX And Much More{" "}
            </p>
          </div>
          <div className="btn-group">
              
              <Link to="/form" className='link-btn'  >join us</Link>
             <a href="Our_services" className='link-btn'>Our services</a>
             <Link to="/pheader" className='link-btn'>Brought product</Link>
             
             
          </div>
          <Outlet/>
         
        </section>
     
      </div>  
      <SidePage/>
    </>
  )
}
