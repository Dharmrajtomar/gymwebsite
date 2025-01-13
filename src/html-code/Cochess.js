import React from "react";
import cbb from "../pic/c-b.jpg";
import caa from "../pic/c-a.jpg";
import cdd from "../pic/c-d.jpg";
import "../css-code/Cochess.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Cochess() {
  return (
    <>
      <div class="cochess-main">
        <div class="coches-about">
          <div class="cochess-header">OUR FITNESS COCHESS</div>
          <div class="coches-disc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            exercitationem amet, numquam, quod repudiandae placeat, ratione quo
            nesciunt incidunt aliquam tenetur rerum tempora esse.
          </div>
          <div class="coches-all-img">
            <div class="cochess-img-sec">
              <div class="coches-corse-title">
                <p className="coches-name">Marn buliyank</p>
                <p className="coches-disp">fitnescohes</p>
              </div>
              <div class="coches-icon-and-img">
                <div class="coches-img-icon">
                  <div class="c-facebook">
                    <div class="c-c-f">
                      <FaFacebook />
                    </div>
                  </div>
                  <div class="c-facebook">
                    <FaWhatsapp />
                  </div>
                  <div class="c-facebook">
                    <FaInstagram />
                  </div>
                  <div class="c-facebook">
                    <FaXTwitter />
                  </div>
                </div>
                <img src={cbb} alt="" />
              </div>
            </div>

            <div class="cochess-img-sec">
              <div class="coches-corse-title">
                <p className="coches-name">mr. boxer</p>
                <p className="coches-disp">boxer</p>
              </div>
              <div class="coches-icon-and-img">
                <div class="coches-img-icon">
                  <div class="c-facebook">
                    <div class="c-c-f">
                      <FaFacebook />
                    </div>
                  </div>
                  <div class="c-facebook">
                    <FaWhatsapp />
                  </div>
                  <div class="c-facebook">
                    <FaInstagram />
                  </div>
                  <div class="c-facebook">
                    <FaXTwitter />
                  </div>
                </div>
                <img src={caa} alt="" />
              </div>
            </div>
            <div class="cochess-img-sec">
              <div class="coches-corse-title">
                <p className="coches-name">miss. rubeena</p>
                <p className="coches-disp">strechesh</p>
              </div>
              <div class="coches-icon-and-img">
                <div class="coches-img-icon">
                  <div class="c-facebook">
                    <div class="c-c-f">
                      <FaFacebook />
                    </div>
                  </div>
                  <div class="c-facebook">
                    <FaWhatsapp />
                  </div>
                  <div class="c-facebook">
                    <FaInstagram />
                  </div>
                  <div class="c-facebook">
                    <FaXTwitter />
                  </div>
                </div>
                <img src={cdd} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
