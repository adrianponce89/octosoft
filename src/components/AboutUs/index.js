import React from 'react';
import OurTeam from './OurTeam';
import About from './About';

const AboutUs = ({ teamMembers, aboutUs }) => {
  return (
    <>
      <About aboutUs={aboutUs} />
      <OurTeam teamMembers={teamMembers} color={aboutUs.color} />
    </>
  );
};

export default AboutUs;
