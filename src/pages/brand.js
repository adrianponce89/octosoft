import React from 'react'
import Brand from '../components/Brand'
import Container from '../components/Container'
import BackgroundImage from '../assets/Trama.png';

const BrandPage = (props) => {
  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerPadding="80px 25px 25px 25px"
    >
      <Brand />
    </Container>
  );
};

export default BrandPage;
