import React, { useState } from 'react'
import g1 from "../pic/g-1.jpg";
import g2 from "../pic/g-2.jpeg";
import g3 from "../pic/g-3.webp";
import '../css-code/About.css'
import GymReadmore from './GymReadmore';
export default function About() {
    const [readmore,setreadmore]=useState(false);
  return (
    <div>
      
      <section className="section-about">
        <div class="about-box">
          <h2 className="heading-2">
            About <span>M</span>Fitness
          </h2>
          <p>
            Fitness is a holistic approach to maintaining and improving physical
            health through a combination of regular exercise, balanced
            nutrition, and adequate rest. It encompasses various components,
            including cardiovascular endurance, strength training, flexibility,
            and balance, all of which contribute to overall well-being.
            including cardiovascular endurance, strength training, flexibility,
            and balance, all of which contribute to overall well-being.
          </p>
         
          <span className='span-about-btn' onClick={()=>setreadmore(true)} > readmore</span>
        </div>
        <figure className="about-img-section">
          <img src={g1} alt="" width="350" height="233" />
          <img src={g2} alt="" width="350" height="233" />
          <img src={g3} alt="" width="350" height="233" />
        </figure>
      </section>
      {readmore && <GymReadmore setreadmore={setreadmore}/> }
    </div>
  )
}
