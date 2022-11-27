import React from "react";
import {FaTwitterSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

function Footer(){
    return(
       <div>
           <div className="foot">
               <FaTwitterSquare title="twitter" style={{ color: '#8e8f92', cursor: 'pointer', fontSize:'30px'}}></FaTwitterSquare>
               <FaFacebookSquare title="facebook" style={{ color: '#8e8f92', cursor: 'pointer',fontSize:'30px'}}></FaFacebookSquare>
               <FaInstagramSquare title="instagram" style={{ color: '#8e8f92', cursor : 'pointer', fontSize:'30px'}}></FaInstagramSquare>
               <FaGithubSquare title="Git" style={{ color : '#8e8f92', cursor : 'pointer', fontSize:'30px'}}></FaGithubSquare>

           </div>

       </div> 
    )
}

export default Footer;