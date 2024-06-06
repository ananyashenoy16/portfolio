import React, { useState,useEffect } from "react";
import Name from "../Images/name2.gif";
import "../css/Navbar.css"; 
import ham from "../svg/ham1.svg";
import close from "../svg/close.svg";
import { Link,useLocation } from "react-router-dom";
import sun from '../svg/sun1.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [navbar, setNavbar ] = useState(false);
  const hamburger = (value) => {
    setNavbar(value);
  }
  const location =useLocation();
  const [locpath,setlocpath] =useState("/");
  
  useEffect(() =>{
    setlocpath(location.pathname);
    }, [location]);

//light-dark mode 

  const toggleTheme = () => {
   if(theme ==="dark-theme"){
    setTheme("light-theme");
   }
   else{
    setTheme("dark-theme");
   }
  }
  const[theme,setTheme]=useState("dark-theme");
  useEffect(() =>{
    document.body.className= theme;
  },[theme]);
  return (
    <div id="header">
      <div className="container">
           
        <nav class="navbar">
        <img src={Name} alt="name" class="logo" />
          <ul>
          {
               locpath==='/'?
               ""
               :
               <li><Link to="/">Home</Link></li>
          }
            {
               locpath==='/about'?
               ""
               :
               <li><Link to ='/about'>About</Link></li>
          }
             {
               locpath==='/skills'?
               ""
               :
               <li><Link to ='/skills'>Skills</Link></li>
          }
           {
            locpath==='/projects'?
            ""
            :
            <li><Link to="/projects">Projects</Link></li>
       }

            {
               locpath==='/contact'?
               ""
               :
               <li><Link to ='/contact'>Contact</Link></li>
          }
          </ul>
          <div class="icons" onClick={() => hamburger(true)}>
              <img src={ham} alt="" class="ham"></img>
            </div>
            {/* <div id="sun" >
              <img src={sun} alt="" class='sun' onClick={ () =>  toggleTheme()}></img>
            </div>  */}
        </nav>
      </div>
      {
      navbar ? (
        <div class="container">
         
          <nav class="sidebar">
            <ul>
            <div class="icons" onClick={() => hamburger(false)}>
              <img src={close} alt="" class="close"></img>
              </div>
              {
               locpath==='/'?
               ""
               :
               <li><Link to="/"onClick={() => hamburger(false)}>Home</Link></li>
              }
              {
               locpath==='/about'?
               ""
               :
               <li ><Link to ='/about'onClick={() => hamburger(false)}>About</Link></li>
              }
              {
               locpath==='/skills'?
               ""
               :
               <li><Link to ='/skills'onClick={() => hamburger(false)}>Skills</Link></li>
              }
               {
            locpath==='/projects'?
            ""
            :
            <li><Link to="/projects"onClick={() => hamburger(false)}>Projects</Link></li>
       }
          
            {
               locpath==='/contact'?
               ""
               :
               <li><Link to ='/contact'onClick={() => hamburger(false)}>Contact</Link></li>
          }
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
      
    </div>
  );
}
export default Navbar;
