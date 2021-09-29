import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  root: { position: 'relative' },
  icon: {
    animation: '$sliding 3000ms forwards',
    backgroundImage: ({ icon }) => `url(${icon})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    minHeight: '35vh',
    transform: ({ index }) => `translateX(-${index * 100}%)`,
  },
  '@keyframes sliding': {
    '100%': {
      transform: 'translateX(0px)',
    },
  },
});

const ItemCategory = ({ icon, index, ...props }) => {
  const classes = styles({ icon, index });
  return (
    <Grid
      {...props}
      item
      xs={12}
      sm={3}
      container
      className={classes.root}
    >
      <Grid item xs={12} className={classes.icon} />
    </Grid>
  );
};

export default ItemCategory;
