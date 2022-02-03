import React from 'react';
import DetailPortfolio from './Detail';
import OurPortfolio from './OurPortfolio';

const Portfolio = ({ data }) => {
<<<<<<< HEAD

  let sectionData = data.allContentfulBanners.edges.find(node => node.node.title == 'Our Portfolio')

  const { node: sectionTitle } = sectionData
  const { nodes: portfolioContent } = data.allContentfulService

  const orderedPortfolios = portfolioContent
    .filter(portfolio => portfolio.newName !== 'Octosoft')
    .sort((a, b) => a.newOrder - b.newOrder)
=======
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
>>>>>>> feature/new-home

  return (
    <>
      <OurPortfolio
        colorTitle={sectionTitle.color}
        title={sectionTitle.title}
      />
<<<<<<< HEAD
      <DetailPortfolio portfolios={orderedPortfolios} />
=======
>>>>>>> feature/new-home
    </>
  );
};

export default Portfolio;
