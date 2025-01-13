import React from "react";
import ca from "../pic/c-a.jpg";
import cb from "../pic/c-b.jpg";
import cc from "../pic/c-c.webp";
import cd from "../pic/c-d.jpg";
import ce from "../pic/c-e.webp";
import cf from "../pic/c-f.jpg";
import "../css-code/OurCourses.css";
export default function OurCourses() {
  return (
    <>
      <div class="section-course">
        <div class="course-box">
          <header className="course-header">
            <h2 className="corsees-heading">Our Courses</h2>
            <p>
              -- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              ducimus illum corporis magni voluptas, ex eum dolorum quia
              officia! Deleniti quia ut.
            </p>
          </header>
          <article className="courses-img-section">
            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Body Building</div>
              <img src={cc} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Cross Fit</div>
              <img src={cb} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Gymnastic</div>
              <img src={ce} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Fitness</div>
              <img src={cf} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">TRX</div>
              <img src={cd} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Boxing</div>
              <img src={ca} alt="" width="550" height="550" />
            </div>
          </article>
        </div>
      </div>
      <div class="oc-hr">
        <hr />
      </div>
    </>
  );
}
