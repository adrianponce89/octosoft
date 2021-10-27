import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const TitleColors = ({ text }) => {
  const classes = useStyles();

  return (
    <Grid xs={12} container justify="left">
      <Typography className={classes.title}>{text}</Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 20,
    marginBottom: '1%',
    marginTop: theme.spacing(2),
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
}));

export default TitleColors;
