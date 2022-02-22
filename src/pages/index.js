import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

<<<<<<< HEAD
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../components/Container';
import UnderConstruction from '../components/UnderConstruction';
import BackgroundImage from '../assets/Trama.png';
=======
export default (props) => {
  const [isActive, setIsActive] = useState(false);
  const [firstView, setFirstView] = useState(true);
  const descriptionLanding = get(
    props,
    'data.contentfulLandingDescription',
  );
  const servicesHome = get(props, 'data.allContentfulService');
   const portfolio = get(props, 'data.allContentfulPortfolio.nodes');
  const plans = get(props, 'data.allContentfulPlan.edges');
  const aboutUs = get(props, 'data.allContentfulAboutUs.nodes');
  const clients = get(props, 'data.allContentfulHomeClients');

  const handleScroll = () => {
    if (window.scrollY >= 300 && !isActive && firstView) {
      setIsActive(true);
      setFirstView(false);
    } else if (window.scrollY < 300 && isActive && !firstView) {
      setIsActive(false);
    } else if (!firstView) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);

  

  const classes = useStyles({
    BackgroundImage: BackgroundImage,
    isActive,
  });

  const clientHome = clients.edges[0].node

  return (
    <>
      <HomeBanner
        descriptionLanding={descriptionLanding}
        isActive={isActive}
      />
      <Link to="https://calendly.com/octosoftprofessionals/no-strings-consultation?month=2021-03">
        <CalendarButton />
      </Link>
      <section id="work">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.home}
        >
          <DescriptionHome content={aboutUs[0]} />
          <Services services={servicesHome} projects={portfolio} />
          <HomePlans plans={plans} />
          {clientHome && (
            <Clients
              title={clientHome.title}
              dataClients={clientHome.media}
            />
          )}
        </Grid>
      </section>
    </>
  );
};
>>>>>>> newDevelop

const underConstructionPage = () => {
  const classes = useStyles();
  const {
    allContentfulAsset: {
      edges: [
        {
          node: {
            file: { url },
          },
        },
      ],
    },
  } = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { eq: "underconstruction" } }
      ) {
        edges {
          node {
            title
            file {
              url
            }
          }
        }
      }
    }
<<<<<<< HEAD
  `);

  return (
    <Container
      background={`url(${BackgroundImage})`}
      innerBackground={'none'}
      className={classes.root}
    >
      <UnderConstruction imgUrl={url} />
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px 34px 50px',
    '@media (min-width: 1362px)': {
      maxWidth: '90%',
    },
  },
}));
=======
    allContentfulAboutUs {
      nodes {
        image {
          file {
            url
          }
        }
        description {
          description
        }
      }
    }
    allContentfulPortfolio {
      nodes {
        active
        category
        contentful_id
        subtitle
        title
        type
        banner {
          file {
            url
          }
        }
        bannerDimensions
        order
      }
    }
  }
`;
>>>>>>> newDevelop

export default underConstructionPage;
