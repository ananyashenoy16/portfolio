import "./Skills.js";
import C from "../svg/c.svg";
import Cpp from "../svg/cpp.svg";
import Java from "../svg/java.svg";
import Python from '../svg/python.svg'
import php from "../svg/php.svg"
import js from "../svg/js.svg"
import html from "../svg/html5.svg"
import css from "../svg/CSS.svg"
import mysql from "../svg/mysql.svg"
import react from "../svg/react.svg"
import bootstrap from "../svg/bootstrap.svg"
import git from "../svg/git.svg";
import github from "../svg/github1.svg";
import vscode from "../svg/vscode.svg";
import figma from "../svg/figma.svg";
import "../css/Skills.css"
function Card({ Skills }) {


//   const [img, setImg] = useState("");
  const imgfunction = (value) => { 
    if (value === "js") {
        return js;
    }
    else if(value=== "html")
     {   return html;
    }
    else if(value === "css")
    {   return css;
   }
   else if(value === "php")
    {   return php;
   }
   else if(value === "mysql")
   {   return mysql;
  }
  else if(value === "react")
  {   return react;
 }
 else if(value === "bootstrap")
 {   return bootstrap;
}
   else  if (value === "C") {
        return C;
    }
    else if(value=== "Cpp")
     {   return Cpp;
    }
    else if(value === "Java")
    {   return Java;
   }
   else if(value === "Python")
    {   return Python;
   }
   else if(value=== "git")
     {   return git;
    }
    else if(value=== "github")
    {   return github;
   }
   else if(value=== "vscode")
   {   return vscode;
  }
  else if(value=== "figma")
  {   return figma;
 }
  }
  return(
    <>
      <div className="cards">
        <div class="web" data-aos="flip-up">
          <div class="heading">
          <h1>{Skills.h}</h1>
          </div>
          <div class="skm">
            <div class="sk" >
              {Skills.imgpath.map((it) => (
                 <img src={imgfunction(it)} alt="" class="html1" ></img>  
              ))}
              {/* {Skills.p.map((itm) => (
                <p>{itm}</p>
              ))} */}
             
            </div>
          </div>
        </div>
         <div class="prgm" data-aos="flip-up">
          <div class="heading">
          <h1>{Skills.h1}</h1>
          </div>
          <div class="skm">
            <div class="sk">
            {Skills.imgpath1.map((it) => (
                 <img src={imgfunction(it)} alt="" class="html1"></img>  
              ))}
              {/* <p>{</p> */}
            </div>
           
          </div>
        </div>
         <div class="tools" data-aos="flip-up">
          <div class="heading">
          <h1>{Skills.h2}</h1>
          </div>
          <div class="skm">
            <div class="sk">
            {Skills.imgpath2.map((it) => (
                 <img src={imgfunction(it)} alt="" class="html1"></img>  
              ))}
              {/* <p>git</p> */}
            </div>
           
          </div>
        </div>
       </div>
    </>
  );
}
export default Card;
