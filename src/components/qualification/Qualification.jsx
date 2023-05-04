import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section id="qualification" className="qualification section">
      <h3>My Personal journey</h3>
      <h2>Qualification</h2>
      {/* <div className="test"> */}

      <div className="qualification__container container">
        <div>
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
                }
              onClick={() => toggleTab(1)}
            >
              {/* <i className="uil uil-graduation-cap qualification__icon"></i> */}
             <h2> Education</h2>
            </div>

            <div
              className={
                toggleState === 2
                ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
              >
              {/* <i className="uil uil-briefcase-alt qualification__icon"></i> */}
              <h2>Experience</h2>
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
              }
              >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B.S.c in Mathematics</h3>
                  <span className="qualification__subtitle">VBSPU - Jaunpur</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2019 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">O Level</h3>
                  <span className="qualification__subtitle">N.I.E.L.E.T</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2019 - 2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Ethical Hacking</h3>
                  <span className="qualification__subtitle">Hacking Flix</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Full Stack Web Developer</h3>
                  <span className="qualification__subtitle">Almabetter</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2022 - 2023
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
            <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Full Stack Web Developer</h3>
                  <span className="qualification__subtitle">
                    AlmaBetter - Bengaluru
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2022 - Present
                  </div>
                </div>

               <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              {/* </div> */}

          {/*      <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UX Designer</h3>
                  <span className="qualification__subtitle">
                    Apple Inc - Spain
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2020 - 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">Figma -Spain</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2018 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div> */}
              </div>
            </div>
            </div> 
        </div> 
      </div>
                {/* </div> */}
    </section>
  );
};

export default Qualification;
