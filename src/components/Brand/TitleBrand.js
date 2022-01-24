import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const TitleBrand = ({title}) => {
  const classes = useStyles();
  return (
    <Grid xs={12} container className={classes.titleContainer}>
      <Typography
        variant="h4"
        className={classes.title}
      >
        {title}
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  titleContainer:{
    marginTop: 60,
  },
 title: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 28,
    },
  },
}))


export default TitleBrand;

