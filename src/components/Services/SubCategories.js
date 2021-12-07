import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Titles from '../Titles';

import CardSubCategories from './CardSubCategories';

const SubCategories = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <Grid className={classes.root}>
      <Titles title="Software Engineering" color="#8249CD" />
      <Grid
        container
        justify="center"
        className={classes.cardContainer}
      >
        {cards.map((item, i) => (
          <CardSubCategories key={i} />
        ))}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
  },
  cardContainer: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

export default SubCategories;
