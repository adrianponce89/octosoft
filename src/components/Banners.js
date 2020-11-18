import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  overContainer: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundPosition: '0% 1%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '25vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
    boxShadow: theme.boxShadow,
  },
  headTitle: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: '38px',
    color: '#fff',
  },
}));

const Banners = (props) => {
  const classes = styles(props);
  return (
    <div className={classes.overContainer}>
      <h1 className={classes.headTitle}>{props.title}</h1>
    </div>
  );
};

export default Banners;
