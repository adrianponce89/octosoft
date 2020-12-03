import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';

const styles = makeStyles((theme) => ({
  planButton: {
    background: '#fff',
    boxShadow: 'inset 0 -2px 4px #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 64,
    cursor: 'pointer',
    '&:hover': {
      background: '#eee',
    },
    '&:hover p': {
      textDecoration: 'underline',
    },
  },
  planTitle: {
    color: ({ color }) => color,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: 16,
    textAlign: 'center',
  },
}));

const PlanButton = ({ plan, color, onClick }) => {
  const classes = styles({ color });
  return (
    <div className={classes.planButton} onClick={onClick}>
      <Typography className={classes.planTitle}>
        {plan.title}
      </Typography>
    </div>
  );
};

export default PlanButton;
