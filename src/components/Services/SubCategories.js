import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TitleComponent from '../TitleComponent/index';

import Titles from '../Titles';

import CardSubCategories from './CardSubCategories';

const SubCategories = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <Grid
      xs={12}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <TitleComponent title="Software Engineering" />

      <Grid
        container
        xs={12}
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
    width: '100%',
    marginTop: '10rem',
    '@media (max-width: 760px)': {
      marginTop: '7rem',
    },
  },

  cardContainer: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

export default SubCategories;
