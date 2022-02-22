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
    marginBottom: '1%',
    marginTop: '3%',
    marginLeft: '2%',
  },
  titleLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '1%',
    marginTop: '2%',
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
    marginRight: '2rem',
    '@media (max-width: 768px)': {
      marginRight: '0',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
}));

export default TitleIcons;
