import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Why from './Components/Why';
import Gallery from './Components/Gallery';
import Success from './Components/Success';
import Events from './Components/Events';
import Press from './Components/Press';
import Testimonials from './Components/Testimonials';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Why />
      <Gallery />
      <Success />
      <Events />
      {/* <Press /> */}
      <Testimonials />
      <Press />
      <Contacts />
      <Footer />
      
    </div>
  )
}

export default App