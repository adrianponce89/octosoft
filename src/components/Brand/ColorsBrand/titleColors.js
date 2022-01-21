import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const TitleColors = ({ text }) => {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.sort} item justify="left">
      <Typography className={classes.title}>{text}</Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  sort: {
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
  title: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 20,
    marginBottom: '1%',
    marginLeft: '0%',
    marginTop: theme.spacing(2),
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
}));

export default TitleColors;
