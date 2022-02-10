import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../../assets/logoHome.svg';
import BannerLogo from '../../assets/bannerLogo.svg';

const useStyles = makeStyles((theme) => ({
  containerHead: {
    marginBottom: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoBanner: {
    width: 350,
    //height: 100,
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
  const classes = useStyles();
  return (
    <Grid className={`${classes.containerHead} ${className}`}>
      <BannerLogo className={classes.logoBanner} />
    </Grid>
  );
};
