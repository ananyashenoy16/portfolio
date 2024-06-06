import character from "../Images/girl3.jpg";
import "../css/Home.css";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import port from '../Images/port1.png';
import Game from "./Game";
import Spline from "@splinetool/react-spline";
function Home() {
  return (
    <div class="allcomp">
      
      <div class="home">

        <div class="photo">
        <img src={character} alt="" className="it"></img>
        {/* <img src={port} alt=""></img> */}
            <div  class="spline-tool">
               {/* <Spline scene="https://prod.spline.design/6krp4z2hnJ9Ri3RW/scene.splinecode" /> */}
               <Spline scene="https://prod.spline.design/vdEAysgqxzQnLH0h/scene.splinecode" />
               </div>
            
        </div>
        {/* <img src={character} alt="character" class="char"  data-aos="zoom-out" />
        <img src={character} alt="char" class="m2" /> */}
        <div data-aos="slide-right" class="header-text">
          <h1>
            Hello, I am <br />
            <span contenteditable="true">Ananya K</span>
          </h1>
          <a href="../Images/myCV.pdf" download="Ananya.pdf">
            <button class="cv">Resume</button>
          </a>
          <button class="cv">Contact me</button>
        </div>
      </div>
      <Aboutus />
      <Game/>
      <Skills />
      
      <Projects />

      <Contact />
      <div className="footer">
        <p>
          {" "}
          Designed with Passion by<span> Ananya K🪄</span> {" "}
        </p>
      </div>
    </div>
  );
}
export default Home;
