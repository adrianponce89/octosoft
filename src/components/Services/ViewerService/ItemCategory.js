import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  root: { position: 'absolute' },
  icon: {
    backgroundImage: ({ icon }) => `url(${icon})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    minHeight: '35vh',
  },
});

const ItemCategory = ({ title, icon }) => {
  const classes = styles({ icon });
  return (
    <Grid item xs={12} sm={3} container className={classes.root}>
      <Grid item xs={12} className={classes.icon} />
    </Grid>
  );
};

export default ItemCategory;
