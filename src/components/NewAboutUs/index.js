import React from 'react';
import Background from '../Background';
import Container from '../Container';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './cards';
import TitleComponent from '../TitleComponent/index';
const NewAboutUs = ({ aboutUs }) => {
  const { edges } = aboutUs;

  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Background />
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <TitleComponent title={'About Us'} />
        
        <div
          className={classes.containerCard}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
          >
            {edges &&
              edges.map(({ node }, i) => (
                <Cards
                  right={i % 2 === 0}
                  backgroundImage={`url(${node.image.file.url})`}
                  title={node.title}
                  description={node.description.description}
                  link={node.link}
                  color={node.color}
                />
              ))}
          </Grid>
          {<div className={classes.cardsopen}></div>}
        </div>

      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10rem',
    '@media (max-width: 760px)': {
      marginTop: '7rem',
    },
  },
  containerCard:{
    marginTop: '5rem',
    justifyContent: 'center',
    width: '100%',
    '@media (min-width: 1362px)': {
      maxWidth: '95%!important',
    },
    '@media (max-width: 760px)': {
      width: '80%',
    },
    padding: 'unset!important',
  },
  cardsopen:{
    width: '100%',
    height: '50px',
  },
  titleContainer: {
    marginBottom: theme.spacing(9),
  },
  cardContainer: {
    width: '100%',
    columnGap: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
  mainTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 120,
    color: '#8249DC',
    zIndex: '1',
    '@media (max-width: 760px)': {
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      justifyContent: 'center',
      fontSize: 50,
    },
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 30,
    color: '#999999',
    '@media (max-width: 760px)': {
      fontSize: 24,
      alignItems: 'center',
      textAlign: 'center',
    },
  },
}));

export default NewAboutUs;