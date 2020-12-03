import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  categoryButton: {
    background: ({ category }) => category.color,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  categoryTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: 16,
    textAlign: 'center',
  },
}));

const PlanTypeButton = ({ category }) => {
  const classes = styles({ category });
  return (
    <div className={classes.categoryButton}>
      <Typography className={classes.categoryTitle}>
        {category.type}
      </Typography>
    </div>
  );
};

export default PlanTypeButton;
