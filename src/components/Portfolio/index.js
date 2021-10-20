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
            portfoliosImage,
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
      <DetailPortfolio portfolios={portfoliosImage} />
    </>
  );
};

export default Portfolio;
