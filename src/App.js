import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Teams from './Pages/Teams';
import About from './Pages/About';
import About_ted from './Pages/About_ted';
import Particle from './Component/Particle';
import Home from './Pages/Home';
import FAQ from './Pages/Faq';
import Sponsers from './Pages/Sponsers';
import Speakers from './Pages/Speakers';



function App() {

  return (
    <>
      <div id="particles-js">
        <BrowserRouter>

          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Particle comp={<Contact />} />} />
            <Route exact path="/abouttedx" element={<Particle comp={<About_ted />} />} />
            <Route exact path="/abouttedxpdeu" element={<Particle comp={<About />} />} />
            <Route exact path="/speakers" element={<Particle comp={<Speakers />} />} />
            <Route exact path="/sponsers" element={<Particle comp={<Sponsers />} />} />
            <Route exact path="/teams" element={<Particle comp={<Teams />} />} />
            <Route exact path="/faq" element={<Particle comp={<FAQ />} />} />

          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
