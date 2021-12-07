import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BrandHeaderCard from './BrandHeaderCard';
import UnderLined from '../../UnderLined/index';
const BrandHeader = ({ titles }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container justify="center" alignItems="center">
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
            Brand Manual
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            OCTOSOFT PROFESSIONAL
          </Typography>
        </Grid>
        <UnderLined />
      </Grid>
      <Grid
        container
        item
        xs={12}
        justify="center"
        className={classes.cardContainer}
      >
        {titles &&
          titles.map((card) => <BrandHeaderCard item={card} />)}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10rem',
    '@media (max-width: 760px)': {
    marginTop: '7rem',
  },
  },
  titleContainer: {
    marginBottom: theme.spacing(9),
  },
  cardContainer: {
    width: '100%',
    columnGap: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
  mainTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 119,
    color: '#8249DC',
    zIndex: '1',
    '@media (max-width: 760px)': {
      alignItems:"center",
      textAlign: 'center',
      width: '100%',
      justifyContent: 'center',
      fontSize: 50,
    },
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 30,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
  },
}));

export default BrandHeader;
