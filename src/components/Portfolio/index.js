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

  const { edges: portfolioContent } = data.allContentfulService

  return (
    <>
      <OurPortfolio
        colorTitle={colorTitle}
        title={titlePortfolioPage}
      />
      <DetailPortfolio portfolios={portfolioContent} />
    </>
  );
};

export default Portfolio;
