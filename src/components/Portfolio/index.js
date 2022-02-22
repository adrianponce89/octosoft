import React from 'react';
import DetailPortfolio from './Detail';
import OurPortfolio from './OurPortfolio';
import Background from '../Background/index';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Portfolio = ({ data }) => {
  const classes = useStyles();

  let sectionData = data.allContentfulBanners.edges.find(
    (node) => node.node.title === 'Our Portfolio',
  );

  const { node: sectionTitle } = sectionData;
  const { nodes: portfolioContent } = data.allContentfulService;
  const { nodes: projectsContent } = data.allContentfulPortfolio;

  const orderedPortfolios = portfolioContent
    .filter((portfolio) => portfolio.newName !== 'Octosoft')
    .sort((a, b) => a.newOrder - b.newOrder);

  return (
    <div className={classes.root}>
      <Background />
      <div className={classes.aux}>
        <OurPortfolio
          colorTitle={sectionTitle.color}
          title={sectionTitle.title}
        />
        <DetailPortfolio
          portfolios={orderedPortfolios}
          projectsContent={projectsContent}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0rem',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#F5F7F7',
    '@media (max-width: 1024px)': {
      paddingTop: '5rem',
      width: '100%',
      height: 'fit-content',
    },
  },
  aux: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '@media (max-width: 1024px)': {
      width: '80%',
    },
  },
}));

export default Portfolio;
