import React from 'react';
import './styles/sumi.css';
import './styles/main_styles.css';
import MyButton from './components/MyButton.js';
import { FiMail, FiInstagram, FiHome, FiGithub} from 'react-icons/fi';
import {IoMdSchool} from 'react-icons/io';
import {AiOutlineFilePdf} from 'react-icons/ai';
import Typical from 'react-typical';
import ParallaxJSXWrapper from './components/ParallaxJsWrapper';
import emailjs from 'emailjs-com';

function App() {
  const Plane3 = ParallaxJSXWrapper(<img src= "./images/plane3.png" alt="" className= "plane3"/>, 0.07);
  return (
    <div className= "main_container">
        <div className= "section1">
            <img src= "./images/sky.png" alt="" className= "sky"></img>
            <img src= "./images/clouds.png" alt="" className= "clouds"></img>
            <img src= "./images/front.png" alt="" className= "front"></img> 
            <img src= "./images/buildings.png" alt="" className= "buildings"></img>  
            <img src= "./images/building.png" alt="" className= "building"></img>
            {/* <img src= "./images/plane.png" alt="" className= "plane"></img> */}
            <Plane3/>
            
        </div>

        <div className= "section2">
          <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#051d21" viewBox="0 0 100 100" preserveAspectRatio="none" >
            <path d="M0,100 C65,93 76,10 100,100" />
          </svg>
          <div className= "section2_container">
              <div className= "left_side">
                  <h1>
                      Hi, I'm Sumaita Sabaha!
                  </h1>
                  <div>
                    <p>
                      <Typical
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        'I am a student studying at the University of Texas at Arlington',
                        'I am passionate about learning new things',
                        1000  
                      ]}
                      />
                    </p>
                  </div>
                  
              </div>
              <div className= "right_side">
                  <img src= "./images/me.png" alt="" className="image"/>
              </div>
          </div>

          <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="#051d21" viewBox="0 0 100 100" preserveAspectRatio="none" >
            <path d="M0,0 C65,20 90,5 100,0" />
          </svg>

        </div>

        <div className= "section3">
            <MyButton name ="Contact me!"/>

            <div className= "contacts">
              <div className= "info">
                <ul>
                  <li><a target="_blank" href="https://www.uta.edu/"><IoMdSchool style={{color:'white'}}/> UT, Arlington</a></li>
                  <li><a><FiHome style={{color:'white'}}/> Dhaka, Bangladesh</a></li>
                  <li><a><AiOutlineFilePdf style={{color:'white'}}/> Resume</a></li>
                </ul>

              </div>

              <div className= "contact_section">
              <ul>
                  <li><a target="_blank" href="https://www.instagram.com/sumaita.s/"><FiInstagram style={{color:'white'}}/> Instagram </a></li>
                  <li><a target="_blank" href= "mailto:sumaitasabaha9@gmail.com"><FiMail style={{color:'white'}}/> Email</a></li>
                  <li><a target="_blank" href= "https://github.com/SumaitaSabaha"><FiGithub style={{color:'white'}}/> Github</a></li>
              </ul>
              </div>
            </div>
        </div>
    </div>
    );
  }
export default App;
