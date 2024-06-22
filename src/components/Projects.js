import cec from "../Images/cec-clone.png";
import food from "../Images/foodd.png";
import '../css/Projects.css';
import share from '../Images/share.png'
import play from '../Images/connecto.png'
import connecto from '../Images/connecto1.png'
import foodd from '../Images/cafe.png'
import music from '../Images/music.png'
import flutter from '../Images/flutter.png'
import quiz from '../Images/Mobile.png'
function Projects(){
    return (
        <div id="courses">
        <div class="contain">
            <h1 class="sub-title">Projects</h1>
            <div class="card-list">
               <div class="main-card">
                 <div class="card" data-aos="flip-right">
                
                    <h2>Food-Menu</h2>
                   
                        
                        <img src={foodd} alt=""class="ill"></img>
                
                    
                    </div>
                    <a href="https://scan-dine.000webhostapp.com/" target="_blank">View</a>
                </div>
                <div class="main-card">
                <div class="card" data-aos="flip-right">
                
                    <h2>Connecto~Social Media</h2>
                    {/* <span class="material-symbols-outlined">open_in_new</span> */}
                  
                        <img src={connecto} alt=""class="ill"></img>
                    
                    </div>
                    <a href="https://github.com/Mini-Project2024/Connecto" target="_blank">View </a>
                    
                </div>
                <div class="main-card">
                <div class="card"  data-aos="flip-right">
                   
                    <h2>Spotify Clone</h2>
                    
                       
                        <img src={music} alt=""class="ill"></img>
                   
                    </div>
                    <a href="https://spotifyclone-pi-ecru.vercel.app/" target="_blank">View </a>
                   
                    </div>
                    <div class="main-card">
                <div class="card" data-aos="flip-right">
                
                    <h2>Expense Tracker App</h2>
                    {/* <span class="material-symbols-outlined">open_in_new</span> */}
                  
                        <img src={flutter} alt=""class="ill"></img>
                    
                    </div>
                    <a href="https://github.com/ananyashenoy16/expense_tracker" target="_blank">View </a>
                    
                </div>
                <div class="main-card">
                <div class="card" data-aos="flip-right">
                
                    <h2>Quiz App</h2>
                    {/* <span class="material-symbols-outlined">open_in_new</span> */}
                  
                        <img src={quiz} alt=""class="ill"></img>
                    
                    </div>
                    <a href="https://github.com/ananyashenoy16/quiz" target="_blank">View </a>
                    
                </div>
                {/* <div class="card"> <img src={pj } alt="" class="img"/>
                    <h2>Artificial Intelligence and Machine Learning</h2>
                    <div class="layer">
                        <h2>Artificial Intelligence and Machine Learning</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
                </div> */}
                {/* <div class="card">
                <img src={pj } alt="" class="img"/>
                    <h2>Computer Science and design</h2>
                    <div class="layer">
                        <h2>Computer Science and design</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
    
                </div>
                <div class="card">
                <img src={pj } alt="" class="img"/>
                    <h2>Computer Science and business Systems</h2>
                    <div class="layer">
                        <h2>Computer Science and business Systems</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
                </div>
                <div class="card">
                <img src={pj } alt="" class="img"/>
                    <h2>Mechanical Engineering</h2>
                    <div class="layer">
                        <h2>Mechanical Engineering</h2>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
    
                </div> */}
    
           
        </div>
        {/* <center>
        <table>
          <tr colspan="3">
            <th>Number</th>
            <th>Project Name</th>
            <th>view</th>
        </tr>
        <tr>
            <td>1</td>
            <td>shopping kart</td>
            <td><a herf="www.google.com">click here</a></td>
        </tr>
        <tr>
            <td>1</td>
            <td>shopping kart</td>
            <td><a herf="www.google.com">click here</a></td>
        </tr>
        <tr>
            <td>1</td>
            <td>shopping kart</td>
            <td><a herf="www.google.com">click here</a></td>
        </tr>
        <tr>
            <td>1</td>
            <td>shopping kart</td>
            <td><a herf="www.google.com">click here</a></td>
        </tr>
        </table></center> */}
      </div>
    </div>
  );
}
export default Projects;