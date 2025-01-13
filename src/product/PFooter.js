import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import '../product/csscode/PFooter.css'
export default function PFooter() {
  return (
    <header className='header'>
        <div class="header-content">
            <div class="col">
                <div class="title">About</div>
                <div class="text"> a state-of-the-art gym tool designed to elevate your workout. With adjustable resistance, ergonomic grips, and a compact design, it targets every muscle group efficiently. Whether you're lifting, stretching, or toning, FlexFit Pro adapts to your fitness level, helping you achieve your goals faster.</div>
                </div>
            <div class="col"> <div class="title">Contact</div>

            <div class="c-item">
                <FaLocationArrow />
                <div class="text">singhpur , 485447 satna madhyapradesh india</div>

            </div>
            <div class="c-item">
                <FaMobileAlt />
                <div class="text">Phone: 9399206067</div>

            </div>
            <div class="c-item">
                <FaEnvelope />
                <div class="text">Email: dharmrajtomar43@gmail.com</div>

            </div>
            </div>
            <div class="col"> <div class="title">categories</div>
            <span class="text">Dumbbells</span>
            <span class="text">Barbells</span>
            <span class="text">Kettlebells</span>
            <span class="text">Medicine Ball</span>
            <span class="text">Exercise Mats</span>
            <span class="text">Treadmills</span>
            <span class="text">Elliptical Trainers</span>
          

            </div>
            <div class="col"> <div class="title">Pages</div>
            <span class="text">Home</span>
            <span class="text">About</span>
            <span class="text">Privacy Policy</span>
            <span class="text">Returns</span>
            <span class="text">Term & Conditions</span>
            <span class="text">Contact us</span>
            

            </div>
        </div>
        <div class="bottom-bar">
            <div class="botom-bar-content">
                <div class="text">
                    PRINCE TOMAR 2024 CREATETD BY PRINCE TOMAR AND PRINCE COMPANY <MdPayment />
                </div>
            </div>
        </div>
    </header>
  )
}
