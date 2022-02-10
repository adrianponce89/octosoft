import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BrandHeaderCard from './BrandHeaderCard';
import UnderLined from '../../UnderLined/index';
import TitleComponent from '../../TitleComponent/index';
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
      <Grid container xs={12} justify="center" alignItems="center">
        <TitleComponent title="Our Brand" />
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
    columnGap: theme.spacing(2),
    padding: theme.spacing(6, 0),
  },
}));

export default BrandHeader;
