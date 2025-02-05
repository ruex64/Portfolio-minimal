import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <p>©  2025 Rudraksh Mahajan @ruex64. All rights reserved.</p> */}
    </div>
  );
};

export default App;
