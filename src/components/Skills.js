import "../css/Skills.css";
import Card from "./Card.js";
function Skills() {
  const comp = [
    {
      h: " Web-Development",
      imgpath: [
       "html","css","js","react",
      ],
      p: ["html","css","js","php","react","mysql"],
    
    h1: "Programming",
    imgpath1: [
     "C","Cpp","Java","Python"],
    p1: ["C","C++","Java","Python"],

    h2: "Tools",
    imgpath2: [ "git","github","figma","vscode"],
    p2: ["Git","Github","Figma","VSCode"],
  },
  ];

  
  return (
    <div class="myskills">
      <h1 class="head"> Skills👾</h1>
      <div class="skills">
        {/* <div class="web" data-aos="flip-up">
          <div class="heading">
            <h1>Web Development</h1>
          </div>
          <div class="skm">
            <div class="sk">
              <img src={html} alt="" class="html"></img>
              <p>HTML5</p>
            </div>
            <div class="sk">
              <img src={css} alt="" class="css"></img>
              <p>CSS</p>
            </div>
            <div class="sk">
              <img src={js} alt="" class="js"></img>
              <p>JavaScript</p>
            </div>
            <div class="sk">
              <img src={bootstrap} alt="" class="bt"></img>
              <p>Bootstrap</p>
            </div>
            <div class="sk">
              <img src={react} alt="" class="react"></img>
              <p>React</p>
            </div>
            <div class="sk">
              <img src={php} alt="" class="php"></img>
              <p>php</p>
            </div>
            <div class="sk">
              <img src={mysql} alt="" class="mysql"></img>
              <p>mySql</p>
            </div>
          </div>
        </div> */}
        {/* <div class="prgm" data-aos="flip-up">
          <div class="heading">
            <h1>Programming</h1>
          </div>
          <div class="skm">
            <div class="sk">
              <img src={c} alt="" class="mysql"></img>
              <p>C</p>
            </div>
            <div class="sk">
              <img src={cpp} alt="" class="mysql"></img>
              <p>C++</p>
            </div>
            <div class="sk">
              <img src={py} alt="" class="mysql"></img>
              <p>Python</p>
            </div>
            <div class="sk">
              <img src={java} alt="" class="mysql"></img>
              <p>Java</p>
            </div>
          </div>
        </div> */}
        {/* <div class="tools" data-aos="flip-up">
          <div class="heading">
            <h1>Tools</h1>
          </div>
          <div class="skm">
            <div class="sk">
              <img src={git} alt="" class="mysql"></img>
              <p>git</p>
            </div>
            <div class="sk">
              <img src={github} alt="" class="github"></img>
              <p>Github</p>
            </div>
            <div class="sk">
              <img src={vscode} alt="" class="mysql"></img>
              <p>VS Code</p>
            </div>
            <div class="sk">
              <img src={figma} alt="" class="mysql"></img>
              <p>Figma</p>
            </div>
          </div>
        </div> */}
      </div>
      {comp.map((item) => (
        <Card Skills={item} />
      ))}
    </div>
  );
}
export default Skills;
