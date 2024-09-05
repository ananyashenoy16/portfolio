import { useState, useEffect } from 'react';
import { inject } from "@vercel/analytics/react"
import character from "../Images/girl4.png";
import "../css/Home.css";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import port from '../Images/port1.png';
import Game from "./Game";
import Spline from "@splinetool/react-spline";
import Loading from './Loading';
import hello from '../Images/roomgirl.png'
import Follow from './Follow';
import { Link,useLocation } from "react-router-dom";
function Home() {
  inject();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for Spline loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="allcomp">
      <div className="home">
        <div className="photo">
          <img src={character} alt="" className="it" />
          <div className="spline-tool">
            <Spline scene="https://prod.spline.design/vdEAysgqxzQnLH0h/scene.splinecode" />
             {/* <img src={hello} alt=""></img> */}
          </div>
        </div>
        <div  className="header-text">
        {/* data-aos="zoom-in" */}
          <h1>
            Hey there!👋 <br />
            <span contentEditable="true">I'm Ananya K</span>
          </h1>
         
          <a href="../Images/4CB21CS013.pdf" download="Ananya.pdf">
          
            <button className="cv">Resume</button>
          </a>
          <Link to ='/contact'><button className="cv">Contact me</button></Link>
        </div>
      </div>
      <Aboutus />
      <Game/>
      <Skills />
      <Projects />
      
      <Contact />
      <div className="footer">
        <p>
          Designed with Passion by<span> Ananya K🪄</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
