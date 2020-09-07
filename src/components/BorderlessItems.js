import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  root: {
    textDecoration: 'none',
    color: 'black',
  },
  picItems: {
    backgroundImage: (props) => props.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '33.333%',
    '@media (max-width: 976px)': {
      paddingBottom: '50%',
    },
    '@media (max-width: 606px)': {
      paddingBottom: '100%',
      margin: '15px 0',
    },
  },
  titleItem: { margin: '0 15px' },
  justifyText: {
    textAlign: (props) => props.textAlign || 'right',
    '@media (max-width: 606px)': {
      textAlign: (props) => props.textAlign || 'left',
    },
  },
  containerItems: {
    padding: 15,
    flexDirection: (props) => props.flexDirection || 'row-reverse',
  },
});

const BorderlessItems = (props) => {
  const classes = styles(props);
  return (
    <a className={classes.root} href={props.link}>
      <Grid container className={classes.containerItems}>
        <Grid
          item
          md={4}
          sm={6}
          xs={12}
          className={classes.picItems}
        ></Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3
            className={`${classes.titleItem} ${classes.justifyText}`}
          >
            {props.description}
          </h3>
        </Grid>
      </Grid>
    </a>
  );
};

export default BorderlessItems;
