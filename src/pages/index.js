import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Trama.png';
import HomeItems from '../components/HomeItems';
import Banners from '../components/Banners';
import HomeBanner from '../components/Home/Banner';
import PlansGrid from '../components/PlansGrid';
import DescriptionHome from '../components/DescriptionHome';
import Services from '../components/Home/Services';
import HomePlans from '../components/HomePlans';
import Clients from '../components/Home/Clients'


const useStyles = makeStyles((theme) => ({
  containerCard: {
    padding: '3vh',
    justifyContent: 'center',
    width: '100%',
  },
}));

export default (props) => {
  const descriptionLanding = get(
    props,
    'data.contentfulLandingDescription',
  );
  const banners = get(props, 'data.allContentfulBanners.edges');
  const homeItems = get(props, 'data.allContentfulHomeItem.edges');
  const servicesHome = get(props, 'data.allContentfulService');
  const plans = get(props, 'data.allContentfulPlan.edges');
  const aboutUs = get(props, 'data.allContentfulAboutUs.nodes');
  const clients = get(props, 'data.allContentfulHomeClients');
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });

  const clientHome = clients.edges[0].node

  return (
    <>
      <HomeBanner descriptionLanding={descriptionLanding} />
      <section id="work">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
        >
          <DescriptionHome content={aboutUs[0]} />
          <Services services={servicesHome} />
          <HomePlans plans={plans} />
          {clientHome && (
            <Clients
              title={clientHome.title}
              dataClients={clientHome.media}
            />
          )}

          {/* {homeItems.map(({ node }, i) => (
              <HomeItems
                right={i % 2 == 0}
                backgroundImage={`url(${node.image.file.url})`}
                title={node.title}
                description={node.description.description}
                link={node.link}
                color={node.color}
              />
            ))} */}
          {/* <Banners
              backgroundImage={`url(${planBanner.image.file.url})`}
              title={planBanner.title}
              right={true}
              color={planBanner.color}
              id="ourplans"
            />
            <PlansGrid plans={plans} /> */}
        </Grid>
      </section>
    </>
  );
};

export const pageQuery = graphql`
         query HomeQuery {
           allContentfulHomeItem(sort: { fields: order }) {
             edges {
               node {
                 id
                 link
                 order
                 color
                 image {
                   file {
                     url
                   }
                 }
                 title
                 description {
                   description
                 }
               }
             }
           }
           allContentfulHomeBorderlessIdentities {
             edges {
               node {
                 id
                 title
                 description {
                   description
                 }
                 image {
                   file {
                     url
                   }
                 }
                 link
               }
             }
           }
           allContentfulPlan(sort: { fields: order }) {
             edges {
               node {
                 id
                 amount
                 type
                 order
                 link
                 description {
                   json
                 }
                 title
                 image {
                   file {
                     url
                   }
                 }
               }
             }
           }
           contentfulLandingDescription {
             description
             title
             backgroundImage {
               file {
                 url
               }
             }
           }
           allContentfulService(sort: { fields: order }) {
             nodes {
               description
               order
             }
             edges {
               node {
                 color
                 id
                 order
                 title
                 images {
                   file {
                     url
                   }
                 }
                 content {
                   json
                 }
               }
             }
           }
           allContentfulHomeClients {
             edges {
               node {
                 title
                 media {
                   title
                   file {
                     url
                   }
                 }
               }
             }
           }
           allContentfulAboutUs {
             nodes {
               image {
                 file {
                   url
                 }
               }
               description
             }
           }
           allContentfulBanners {
             edges {
               node {
                 title
                 color
                 image {
                   file {
                     url
                   }
                 }
                 type
               }
             }
           }
         }
       `;

