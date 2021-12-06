import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Titles from '../Titles';
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
  },
}));
const SubCategories = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Titles title="Software Engineering" color="#8249CD" />
      <h1>SubCategories</h1>
    </Grid>
  );
};

export default SubCategories;
