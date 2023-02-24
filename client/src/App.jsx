import React from "react"
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// APLICACIÓN BASE
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App