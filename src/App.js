import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Aboutus from './components/Aboutus';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Game from './components/Game'
function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<Aboutus/>}/>
         
         <Route path="/skills" element={<Skills/>}/>
         <Route path="/game" element={<Game/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path="/contact" element={<Contact/>}/>
         
       </Routes>
     
     </BrowserRouter>

    </div>
  );
}

export default App;
