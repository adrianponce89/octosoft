import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../../assets/logoHome.svg';

const Styles = makeStyles((theme) => ({
  containerHead: {
    marginBottom: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 100,
    height: 100,
  },
  textLogo: {
    cursor: 'default',
    fontSize: 35,
    lineHeight: 0.75,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  textLogoSub: {
    cursor: 'default',
    fontSize: 21,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
}));

export default ({ className }) => {
  const classes = Styles();
  return (
    <Grid className={`${classes.containerHead} ${className}`}>
      <OctoLogo className={classes.logo} />
      <Grid item container xs={4} justifyContent="center">
        <Typography variant="h1" className={classes.textLogo}>
          {'Octosoft'}
        </Typography>
        <Typography variant="h2" className={classes.textLogoSub}>
          {'Professionals'}
        </Typography>
      </Grid>
    </Grid>
  );
};
