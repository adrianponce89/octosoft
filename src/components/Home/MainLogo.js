import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../../assets/logoHome.svg';

const useStyles = makeStyles((theme) => ({
  containerHead: {
    marginBottom: '8vh',
    display: 'flex',
    '@media (max-width: 560px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  logo: {
    width: 125,
    height: 125,
  },
  textLogo: {
    cursor: 'default',
    fontSize: 50,
    lineHeight: 0.75,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  textLogoSub: {
    cursor: 'default',
    fontSize: 31,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
}));

export default ({ className }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={`${classes.containerHead} ${className}`}
    >
      <Grid item sm={2}>
        <OctoLogo className={classes.logo} />
      </Grid>
      <Grid item container xs={11} sm={4} justifyContent="center">
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
