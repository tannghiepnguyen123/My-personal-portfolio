import React from 'react';
import About from './components/About';
import BackToTopBtn from './components/BackToTopBtn';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import Tesitimonials from './components/Tesitimonials';

// import components

const App = () => {
  return <div>
    <Header />
    <Hero />
    <Brands />
    <About />
    <Skills />
    <Portfolio />
    <Services />
    <Tesitimonials />
    <Contact />
    <Footer />
    <BackToTopBtn />
  </div>;
};

export default App;
