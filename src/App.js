import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import AboutTed from "./Pages/AboutTed";
import Particle from "./Component/Particle";
import Home from "./Pages/Home";
import FAQ from "./Pages/Faq";
import Sponsers from "./Pages/Sponsers";
import Speakers from "./Pages/Speakers";
import Home2022 from "./Pages/2023/Home2022";
import Team2023 from "./Pages/2023/Team/Team2023";

import Teams from "./Pages/Teams";
import Speakers2023 from "./Pages/2023/Speakers/Speakers2023";
import Payment from "./Pages/2023/Payment";

function App() {
  return (
    <>
      <div id="particles-js">
        <BrowserRouter>
          <Routes>
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/" element={<Home2022 />} />
            <Route exact path="/2022" element={<Home />} />
            <Route
              exact
              path="/contact"
              element={<Particle comp={<Contact />} />}
            />
            <Route
              exact
              path="/abouttedx"
              element={<Particle comp={<AboutTed />} />}
            />
            <Route
              exact
              path="/abouttedxpdeu"
              element={<Particle comp={<About />} />}
            />
            <Route
              exact
              path="/speakers-2022"
              element={<Particle comp={<Speakers />} />}
            />
            <Route
              exact
              path="/speakers"
              element={<Particle comp={<Speakers2023 />} />}
            />
            <Route
              exact
              path="/sponsers"
              element={<Particle comp={<Sponsers />} />}
            />
            <Route
              exact
              path="/teams"
              element={<Particle comp={<Team2023 />} />}
            />
            <Route
              exact
              path="/teams-2022"
              element={<Particle comp={<Teams />} />}
            />
            <Route exact path="/faq" element={<Particle comp={<FAQ />} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
