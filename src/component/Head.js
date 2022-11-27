import React from "react";
import reactLogo from "../svg guy.jpeg"; 
import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa'

function Head() {
    return (
      <header className="">
        <div className="">
          <div className="avatar">
          <img src={reactLogo} alt="react logo" width="350px" />
          </div>
         
          <div className="about">
            <div>
            <h2>Bankole Olawale</h2>
            <p>Frontend Developer</p>
            <p className="git">Bankole209Git</p>
            </div>
            
          </div>

          <div className="button">
            <button title='email' className="btn gray"> 
            <FaEnvelope  style={{color: '#0f1014', cursor: 'pointer' }}> </FaEnvelope>
             <span> Email</span> 
             </button>
            <button title="linkedin" className="btn blue">
               <FaLinkedin style={{color: '#feffff', cursor: 'pointer'}}>
                 </FaLinkedin> <span>Linkedin</span></button>
          </div>
        </div>
      </header>
    );
  }
  
export default Head;