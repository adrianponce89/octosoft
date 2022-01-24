import React from 'react';
import DetailPortfolio from './Detail';
import OurPortfolio from './OurPortfolio';

const Portfolio = ({ data }) => {
  const {
    allContentfulPortfolio: {
      edges: [
        {
          node: {
            colorTitle,
            titlePortfolioPage,
            description: { description },
          },
        },
      ],
    },
  } = data;

  return (
    <>
      <OurPortfolio
        colorTitle={colorTitle}
        title={titlePortfolioPage}
        description={description}
      />
    </>
  );
};

export default Portfolio;
