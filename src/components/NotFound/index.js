import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import OctoNave from '../../assets/octonave.svg';

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      container
      justify="space-between"
      className={classes.root}
    >
      <Grid
        item
        xs={10}
        sm={8}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={9} className={classes.boxText}>
          <Typography variant="h1" className={classes.title}>
            OH NO!{' '}
            <Typography variant="h2" className={classes.title}>
              404 NOT FOUND
            </Typography>
          </Typography>
          <Grid item xs={10}>
            <Typography variant="h5" className={classes.content}>
              The site you are looking for may have been abducted. Go
              back home and try again.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.boxOctoNave}>
        <OctoNave className={classes.octoNave} />
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
    height: '100%',
    overflow: 'hidden',
  },
  boxText: {
    position: 'relative',
    zIndex: 1,
  },
  title: {
    color: '#DB6E0F',
    fontFamily: 'Montserrat',
    fontWeight: 800,
  },
  content: {
    color: '#737373',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '1.56vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '4vw',
    },
  },
  boxOctoNave: {
    position: 'relative',
  },
  octoNave: {
    position: 'absolute',
    width: '300%',
    right: -209,
    bottom: 0,
    [theme.breakpoints.down('xs')]: {
      width: '200%',
    },
  },
}));

export default NotFound;
