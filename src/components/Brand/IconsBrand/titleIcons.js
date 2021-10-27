import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const TitleIcons = ({ title, sort }) => {
  const classes = useStyles();
  return (
    <Grid
      xs={12}
      container
      className={
        sort === 'Left' ? classes.titleLeft : classes.titleRight
      }
    >
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    marginLeft: '0.5rem',
    marginBottom: '0rem',
    marginTop: '2rem',
  },
  titleLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '1rem',
    marginTop: '1rem',
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  titleRight: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
    marginTop: '1rem',
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
}));

export default TitleIcons;
