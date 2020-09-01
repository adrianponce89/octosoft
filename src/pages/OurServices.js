import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import { fetchFromContentfulByContentType } from '../Contentful';
import Services from '../components/Services';

const OurServices = (props) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchFromContentfulByContentType('service', setServices);
  }, []);

  return (
    <Container background={`url(${BackgroundImage})`}>
      <Services
        services={services}
        title="Our Services"
        subtitle="Learn about our departaments and the services they can
          provide to your business"
      />
    </Container>
  );
};

export default OurServices;
