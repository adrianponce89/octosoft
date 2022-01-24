import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  root: {
    position: 'relative',
    cursor: 'pointer',
    transform: ({ index }) => `translateX(-${index * 100}%)`,
  },
  icon: {
    backgroundImage: ({ icon }) => `url(${icon})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    minHeight: '35vh',
  },
  animationFordwards: {
    animation: '$slidingin 3000ms forwards',
  },
  animationBackwards: {
    animation: '$slidingout 3000ms forwards',
  },
  '@keyframes slidingin': {
    '100%': {
      transform: 'translateX(0px)',
    },
  },
  '@keyframes slidingout': {
    '0%': {
      transform: 'translateX(0px)',
      opacity: 1,
    },
    '100%': {
      transform: ({ index }) => `translateX(-${index * 100}%)`,
      opacity: 0,
    },
  },
});

const ItemCategory = ({
  icon,
  index,
  reverseAnimation,
  ...props
}) => {
  const classes = styles({ icon, index });
  return (
    <Grid
      {...props}
      item
      xs={12}
      sm={3}
      container
      className={[
        classes.root,
        reverseAnimation
          ? classes.animationBackwards
          : classes.animationFordwards,
      ]}
    >
      <Grid item xs={12} className={[classes.icon]} />
    </Grid>
  );
};

export default ItemCategory;
