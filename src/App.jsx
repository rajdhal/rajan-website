import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import useScrollReveal from "./hooks/useScrollReveal";

const App = () => {
  useScrollReveal();
  const [easterEggActive, setEasterEggActive] = useState(false);

  const triggerEasterEgg = () => {
    setEasterEggActive(true);
  };

  useEffect(() => {
    if (easterEggActive) {
      document.body.classList.add("party-mode");
      const timer = setTimeout(() => {
        setEasterEggActive(false);
        document.body.classList.remove("party-mode");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [easterEggActive]);

  return (
    <>
      <Header />

      <main className="main">
        <Home onEasterEgg={triggerEasterEgg} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
