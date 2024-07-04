import myimage from "../Images/picture2.jpg";
import Follow from './Follow'
import "../css/Aboutus.css";

function Aboutus() {
  return (
    <div id="about">
      <div class="row">
        <div class="about-col1" data-aos="fade-up-right" >
          <div class="myimage">
            <div class='content'>
               <img src={myimage} alt="myimage" class="myph" />
               <h2>Ananya Shenoy<br/><span>Web Developer</span> </h2>
                 <a href="#">Hire me</a>
              

            </div>
         
          </div>
          {/* <img src={myimage1} alt="myimage" class="my-ph" /> */}
        </div>
        <div class="about-col2" data-aos="zoom-in">
          <h1 class="subtitle">About <span> Me</span></h1>
          <p>
            Hello World!<br/>
             I am Ananya Shenoy,an Aspiring Full Stack Web Deveoloper.I am currently studying in 3rd Year
            Computer Science and Engineering.I believe that <span> 'You can
            achieve Everything with Hardwork'</span> A Disciplined  student with a passion for continuous learning and improvement.
Seeking a challenging  role in a supportive organization that values technical
expertise. Eager to leverage my skills to contribute to process optimization and innovation.

            My hobbies are Digital illustration and Mandala Arts.</p>
         
            <Follow />
            {/* <div class="education" data-aos="zoom-out">
                <h1>Education</h1>
              <ul>
                <div class="e1" >
                <li type="square">Engineering
                 <p>I am studying CSE Department at Canara Engineering College, Benjanapadavu.  </p>
                 </li>
                 <button>Know More</button></div>
                 <div class="e1">
                 <li type="square" >PUC
                 <p>I have Completed my PUC at Viveka PU College,Kota</p>
                </li>
                <button>Know More</button></div>
                <div class="e1">
                 <li type="square">SSLC
                 <p>I have Completed my SSLC at Viveka High School,Kota </p>
                </li>
                <button>Know More</button></div>
               
              </ul>

            </div> */}
            </div>
            
      </div>
    </div>
  );
}
export default Aboutus;
