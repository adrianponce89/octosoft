import React from 'react';
import DetailPortfolio from './Detail';
import OurPortfolio from './OurPortfolio';

const Portfolio = ({ data }) => {


  return (
    <>
      <OurPortfolio
        colorTitle={colorTitle}
        title={titlePortfolioPage}
        description={description}
      />
      <DetailPortfolio  />
    </>
  );
};

export default Portfolio;
