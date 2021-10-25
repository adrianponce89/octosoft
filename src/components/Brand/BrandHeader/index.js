import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BrandHeaderCard from './BrandHeaderCard';
import Line from '../../../assets/Divider.svg';
import trama from '../../../assets/brand.png';
const BrandHeader = ({ titles }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={11}
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
            Octosoft
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            BRAND MANUAL
          </Typography>
        </Grid>
        <Grid container item xs={11} md={11} xl={6} justify="center">
          <Typography variant="h5" className={classes.description}>
            From freelancers to the world, we <br />
            help people build great digital <br /> products from head
            to toe.
          </Typography>
          <Grid
            container
            item
            xs={11}
            md={11}
            xl={6}
            justify="flex-end"
          >
            <Line className={classes.line} />
          </Grid>
        </Grid>
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
    backgroundImage: `url(${trama})`,
    backgroundPosition: 'right -80% top -450%',
    backgroundSize: '600px 600px',
    backgroundRepeat: 'no-repeat',
  },
  line: {
    width: 250,
    paddingRight: '20%',
    '@media (max-width: 1024px)': {
      width: 200,
      paddingRight: '20%',
    },
    '@media (max-width: 760px)': {
      width: 150,
      paddingRight: '0%',
    },
  },
  titleContainer: {
    marginBottom: theme.spacing(9),
  },
  cardContainer: {
    width: '100%',
    columnGap: theme.spacing(5),
    // backgroundColor: 'red',
    padding: theme.spacing(6, 0),
  },
  mainTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 119,
    color: '#8249DC',
    '@media (max-width: 760px)': {
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
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 36,
    color: '#000000',
    textAlign: 'center',
    '@media (max-width: 760px)': {
      fontSize: 16,
    },
  },
}));

export default BrandHeader;
