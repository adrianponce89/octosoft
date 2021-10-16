import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Polygon1 from '../assets/Polygon1.png';
import Polygon2 from '../assets/Polygon2.png';
import Polygon3 from '../assets/Polygon3.png';

const UnderConstruction = ({ imgUrl }) => {
  const classes = useStyles({
    imgUrl,
  });
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.backgroundRoot}
    >
      <Grid item xs={3}></Grid>

      <Grid
        item
        xs={7}
        container
        justify="center"
        className={classes.boxImg}
      >
        <Grid item xs={8} className={classes.imgContainer}>
          <div className={classes.backgroundImg1} />
          <div className={classes.backgroundImg} />
        </Grid>
        <div className={classes.backgroundImg2} />
        <div className={classes.backgroundImg3} />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  backgroundRoot: {
    marginTop: theme.spacing(5),
    backgroundColor: 'rgba(187, 109, 199, 0.13)',
    background: 'transparent',
    borderRadius: 15,
  },
  boxImg: { position: 'relative', height: '100vh' },
  imgContainer: {
    zIndex: 3,
    position: 'relative',
    width: '100vw',
    height: '100%',
  },
  backgroundImg: {
    backgroundImage: ({ imgUrl }) => `url(${imgUrl})`,
    backgroundSize: '85%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: -80,
    right: 0,
  },
  backgroundImg1: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundImage: `url(${Polygon1})`,
    backgroundSize: '98%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  backgroundImg2: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Polygon2})`,
    backgroundSize: '60%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  },
  backgroundImg3: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Polygon3})`,
    backgroundSize: '30%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  },
}));

export default UnderConstruction;
