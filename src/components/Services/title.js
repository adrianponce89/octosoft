import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const Title = ({ title, color }) => {
  const classes = useStyles({ color });
  return (
    <Grid
      container
      item
      alignItems="center"
      direction="column"
      className={classes.titleContainer}
    >
      <Typography variant="h5" className={classes.mainTitle}>
        {title}
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    marginBottom: '5rem',
    '@media (max-width: 1024px)': {
      marginBottom: '1rem',
    },
  },
  mainTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: '12vh',
    color: ({ color }) => color,
    zIndex: '1',
    '@media (max-width: 760px)': {
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      justifyContent: 'center',
      fontSize: 50,
    },
  },
}));

export default Title;
