import React from 'react';
import DetailPortfolio from './Detail';
import OurPortfolio from './OurPortfolio';

const Portfolio = ({ data }) => {
  /*   const {
      allContentfulBanners: {
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
    } = data; */
  //const sectionData = data.allContentfulBanners.edges.filter(node => node.title === 'Our Portfolio')
  const sectionData = {
    colorTitle: '#37ADD4',
    titlePortfolioPage: 'Our Portfolio'
  }
  const { colorTitle, titlePortfolioPage } = sectionData

  const { nodes: portfolioContent } = data.allContentfulService

  const orderedPortfolios = portfolioContent
    .filter(portfolio => portfolio.newName !== 'Octosoft')
    .sort((a, b) => a.newOrder - b.newOrder)

  return (
    <>
      <OurPortfolio
        colorTitle={colorTitle}
        title={titlePortfolioPage}
      />
      <DetailPortfolio portfolios={orderedPortfolios} />
    </>
  );
};

export default Portfolio;
