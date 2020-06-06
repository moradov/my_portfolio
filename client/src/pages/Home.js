import React, { Fragment } from 'react';
import './Home.css';
import Header from '../Components/Header/Header';
import Portfolio from '../Components/Portfolio/Portfolio';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
