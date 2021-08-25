import React from 'react';
import './styles/sumi.css';
import './styles/main_styles.css';
import MyButton from './components/MyButton.js';
import { FiMail, FiInstagram, FiFacebook, FiGithub} from 'react-icons/fi';


function App() {
  return (
    <div className= "main_container">
        <div className= "section1">
            <img src= "./images/sky.png" alt="" className= "sky"></img>
            <img src= "./images/clouds.png" alt="" className= "clouds"></img>
            <img src= "./images/front.png" alt="" className= "front"></img>
            <img src= "./images/buildings.png" alt="" className= "buildings"></img>
            <img src= "./images/building.png" alt="" className= "building"></img>
            
        </div>

        <div className= "section2">
          <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#051d21" viewBox="0 0 100 100" preserveAspectRatio="none" >
            <path d="M0,100 C65,93 76,10 100,100" />
          </svg>
          <div className= "section2_container">
              <div className= "left_side">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatum, nostrum veniam soluta optio a reiciendis labore consequatur nesciunt ipsam </p>
              </div>

              <div className= "right_side">
                  <img src= "https://picsum.photos/1200/1200" alt="" className="image"/>
              </div>
          </div>

          <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="#051d21" viewBox="0 0 100 100" preserveAspectRatio="none" >
            <path d="M0,0 C65,20 90,5 100,0" />
          </svg>

        </div>

        <div className= "section3">
            contact me!
            <input type = "text" name= "email" id = "email" className= "input_email"/>
            <MyButton />

            <div className= "contacts">
              <div className= "contact_section">
                <ul>
                    <li><FiMail/> Email</li>
                </ul>

              </div>

              <div className= "contact_section">
              <ul>
                  <li><FiInstagram style={{color:'white'}}/> Instagram</li>
                  <li><FiFacebook/> Facebook</li>
                  <li><FiGithub/> Github</li>
              </ul>
              </div>

            </div>
        </div>
    </div>
  );
}

export default App;
