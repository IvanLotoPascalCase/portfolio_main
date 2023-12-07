import React from "react";
import Hero from "./components/Hero/Hero.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CardFavorites from "./components/CardSection/CardFavorites.jsx";
import Skills from "./components/Skills.jsx";

// APLICACIÓN BASE
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      {/* <CardFavorites /> */}
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
