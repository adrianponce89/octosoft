import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = makeStyles({
  root: {
    textDecoration: 'none',
    color: 'black',
  },
  picItems: {
    backgroundImage: (props) => props.background || '#ccc',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    paddingBottom: '100%',
  },
  titleItem: { textAlign: 'center', margin: 15, fontWeight: 'bold' },
  descriptionItem: { margin: '0 15px' },
  containerItems: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: (props) => props.flexDirection || 'row-reverse',
  },
});

const BorderlessItems = (props) => {
  const classes = styles(props);
  return (
    <a className={classes.root} href={props.link}>
      <Grid item container xs={12} className={classes.containerItems}>
        <Grid item sm={6} md={4} xs={12}>
          <Grid item className={classes.picItems}></Grid>
        </Grid>
        <Grid item sm={6} md={8} xs={12}>
          <Typography variant="h5" className={classes.titleItem}>
            {props.title}
          </Typography>
          <h3 className={`${classes.descriptionItem}`}>
            {props.description}
          </h3>
        </Grid>
      </Grid>
    </a>
  );
};

export default BorderlessItems;
