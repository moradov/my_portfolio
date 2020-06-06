import React from 'react';
import FeaturesList from './FeaturesList';
import ProgressBarList from './ProgressBarList';
import AboutMe from './AboutMe';
const About = () => {
  return (
    <div className='about-page' id='about'>
      <h2> About Me </h2>
      <FeaturesList />
      <div className='about-div'>
        <AboutMe />
        <ProgressBarList />
      </div>
    </div>
  );
};
export default About;
