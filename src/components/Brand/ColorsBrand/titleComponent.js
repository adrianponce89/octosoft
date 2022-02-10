import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const TitleIcons = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid xs={12} container className={classes.titleLeft}>
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
}));

export default TitleIcons;
