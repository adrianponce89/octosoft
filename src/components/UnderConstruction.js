import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UnderConstruction = ({ imgUrl }) => {
  const classes = useStyles({
    imgUrl,
  });
  return <Grid item xs={12} className={classes.backgroundImg} />;
};

const useStyles = makeStyles((theme) => ({
  backgroundImg: {
    width: '100%',
    height: '100%',
    backgroundImage: ({ imgUrl }) => `url(${imgUrl})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '100%',
  },
}));

export default UnderConstruction;
