import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../../components/Container';
import OurPortfolio from '../../components/Portfolio/OurPortfolio';
import ServiceGrid from '../../components/ServicesItems/serviceGrid';
import Title from '../../components/Services/title';
import Background from '../../components/Background/index';

const OurServices = (props) => {
  const classes = useStyle();
  const data = useStaticQuery(graphql`
    query servicesData {
      allContentfulService{
        edges {
          node {
            title
            newOrder
            newName
            newColor
            description
            categories
            category
            portfolioLink
            newLogo{
              file {
                url
              }
            }
            newTools {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulBanners {
        edges {
          node {
            color
            title
          }
        }
      }
    }
  `);

  const { allContentfulService, allContentfulBanners } = data

  const transformData = (array) => {
    return array.reduce((total, data) => {
      let nodeData = { ...data.node }
      total = [nodeData, ...total]
      return total
    }, [])
  }

  const titleData = transformData(allContentfulBanners.edges).filter(data => data.title === 'Our Services')
  const serviceData = transformData(allContentfulService.edges).filter(data => data.title !== 'Octosoft').sort((a, b) => { return a.newOrder - b.newOrder });

  return (
    <Container className={classes.container}>
      <Background />
      <Title
        color='#37ADD4'
        //color={titleData[0].color}
        title={titleData[0].title}
      />
      <ServiceGrid data={serviceData} />
    </Container>
  );
};

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: '10rem',
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
    },
    [theme.breakpoints.down('xs')]: {
    },
  },
}));

export default OurServices;