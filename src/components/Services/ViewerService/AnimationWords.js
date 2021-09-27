import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TypingAnimation from '../../TypingAnimation';
const styles = makeStyles({
  root: { height: '100%' },
});
const AnimationWords = ({ words }) => {
  const classes = styles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <TypingAnimation words={words} fontSize="70px" />
    </Grid>
  );
};

export default AnimationWords;
