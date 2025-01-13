// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <div>
//       <h1>this is a footer page</h1>
//       <h2>this page to connect in another page</h2>
//       <Link to="/">Footer page</Link>
//     </div>
//   )
// }

import React from 'react'
import '../css-code/Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
export default function Footer() {
  return (
    <>
    <div class="footer-section-f">
        <div class="footer-f">
            <h1 className='footer-hading'><span>M</span>Fitness</h1>
            <p className='footer-paragraph'>contect-9399206067 <br/>  Email-dharmrajtomar43@gmail.com</p>
            <div class="footer-all-icon">
            <p className='footer-icon'> <a href=""><FaWhatsapp /></a> </p>
            <p className='footer-icon'> <a href=""><FaFacebook/> </a> </p>
            <p className='footer-icon'> <a href=""><FaInstagram/> </a> </p>
            <p className='footer-icon'> <a href=""><FaXTwitter/></a> </p>
            </div>
        </div>
        <div class="footer-s">
        <h1 className='footer-hading'> Quick Links</h1>
        <div class="footer-about">
        <p className='footer-icon'> <FaLongArrowAltRight/> <a href=""className='home' >  Home</a> </p>

        <p className='footer-icon'>  <FaLongArrowAltRight/>  <a href="">About</a> </p>

        <p className='footer-icon'>  <FaLongArrowAltRight/>  <a href="">  Courses</a> </p>

        <p className='footer-icon'>  <FaLongArrowAltRight/>  <a href="">  Trainers</a> </p>
        <p className='footer-icon'>  <FaLongArrowAltRight/>  <a href="">  Contect</a> </p>
        </div>
        </div>
        <div class="footer-t">
        <h1 className='footer-hading'> News Letter</h1>
        <p>If you want to new apdate to send your email </p>
        <p className='input'> <input type="text" placeholder='.......@Gmail.com'/> <span><IoSend/></span> </p>
        </div>

    </div>
   <div class="footer-last">
    <div class="footer-hr">
    <hr/>
    </div>

    <div class="footer-discp">
        APP - PRINCE TOMAR
    </div>
   </div>
    </>
   
   
  )
}
