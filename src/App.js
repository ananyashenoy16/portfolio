import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Analytics } from '@vercel/analytics/react';
import Aboutus from './components/Aboutus';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Game from './components/Game';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time by setting a timeout
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    // Clear timeout if the component unmounts
    return () => clearTimeout(loadTimeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/game" element={<Game />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
