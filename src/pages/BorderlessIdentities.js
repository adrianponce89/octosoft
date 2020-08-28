import React from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import BackgroundBanner from '../assets/BackgroundBanner.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  root: {},
  backgroundGlobal: {
    background: '#f2ff',
    height: '100vh',
  },
  backgroundBaner: {
    flex: 1,
    background: `url(${BackgroundBanner})`,
    backgroundSize: 'cover',
    width: '60vw',
    height: 250,
  },
  titleItems: { fontSize: '18px' },
});

const BorderlessIdentities = () => {
  const classes = styles();
  return (
    <Container
      background={`url(${BackgroundImage})`}
      transparent={'none'}
    >
      <div className={classes.root}>
        <Grid item className={classes.backgroundGlobal}>
          <Grid item md={12}>
            <div className={classes.backgroundBaner}></div>
          </Grid>
          <Grid container md={12} justify="center">
            <h1 className={classes.titleItems}>
              What is Borderless Identities?
            </h1>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default BorderlessIdentities;
