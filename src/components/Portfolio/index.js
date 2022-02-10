import React from 'react';
import DetailPortfolio from './Detail';
import OurPortfolio from './OurPortfolio';

const Portfolio = ({ data }) => {

<<<<<<< HEAD
=======
  let sectionData = data.allContentfulBanners.edges.find(node => node.node.title === 'Our Portfolio')

  const { node: sectionTitle } = sectionData
  const { nodes: portfolioContent } = data.allContentfulService

  const orderedPortfolios = portfolioContent
    .filter(portfolio => portfolio.newName !== 'Octosoft')
    .sort((a, b) => a.newOrder - b.newOrder)
>>>>>>> 53230dcf46bd7d6a79d20e3cb0e76a8f7eecc349

  return (
    <>
      <OurPortfolio
        colorTitle={sectionTitle.color}
        title={sectionTitle.title}
      />
<<<<<<< HEAD
      <DetailPortfolio  />
=======
      <DetailPortfolio portfolios={orderedPortfolios} />
>>>>>>> 53230dcf46bd7d6a79d20e3cb0e76a8f7eecc349
    </>
  );
};

export default Portfolio;
