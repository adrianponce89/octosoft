import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  picItems: {
    background: (props) => props.background,
    backgroundSize: (props) => props.backgroundSize || 'cover',
    height: '50vh',
    '@media (max-width: 576px)': {
      height: '25vh',
    },
  },
  titleItem: { margin: '0 15px' },
  justifyText: { textAlign: (props) => props.textAlign || 'right' },
  containerItems: {
    padding: 15,
    flexDirection: (props) => props.flexDirection || 'row-reverse',
  },
});

const BorderlessItems = (props) => {
  const classes = styles(props);
  return (
    <Grid container className={classes.containerItems}>
      <Grid item md={4} xs={6} className={classes.picItems}></Grid>
      <Grid item md={4} xs={6}>
        <h3 className={`${classes.titleItem} ${classes.justifyText}`}>
          {props.description}
        </h3>
      </Grid>
    </Grid>
  );
};

export default BorderlessItems;
