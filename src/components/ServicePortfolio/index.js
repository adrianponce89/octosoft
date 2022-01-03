import React from 'react'
import BackgroundImage from '../../assets/Trama.png';
import Container from '../Container';
import ServicePortfolioGrid from './servicePortfolioGrid'
import ServicePortfolioTitle from './servicePortfolioTitle'

const Pepe = (props) => {
  console.log(props.pageContext);
  const { newName, categories, newColor } = props.pageContext

  return (
    <div>
      <Container
        background={`url(${BackgroundImage})`}
        innerBackground={'tranparent'}
      >
        <ServicePortfolioTitle
          name={newName}
          categories={categories}
          color={newColor}
        />
        <ServicePortfolioGrid />

      </Container>
    </div>
  )
}

export default Pepe
