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
        colorTitle={sectionTitle.color}
        title={sectionTitle.title}
      />
    </>
  );
};

export default Portfolio;
