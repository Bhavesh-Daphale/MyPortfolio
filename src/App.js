import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe"; 
import Footer from "./Components/FootNote";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
      
    </div>
  );
}

export default App;
