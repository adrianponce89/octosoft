import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.titleContainer}
    >
      <Typography variant="h5" className={classes.mainTitle}>
        {title}
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        OCTOSOFT PROFESSIONAL
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    width: '100%',
    textAlign: 'center',
  },
  mainTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 150,
    color: '#8249DC',
    zIndex: '1',
    '@media (max-width: 760px)': {
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      justifyContent: 'center',
      fontSize: 50,
    },
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    color: '#999999',
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
  },
}));
export default Title;
