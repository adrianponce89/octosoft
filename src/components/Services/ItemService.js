import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = makeStyles({
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 70,
    borderRadius: 8,
    backgroundColor: (props) =>
      props.selected ? 'rgb(236,236,236)' : 'rgb(194,193,191)',
    boxShadow: '0px 5px 0px rgb(130 127 132)',
  },
  buttonIcon: {
    width: '100%',
    height: '100%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
    color: (props) => (props.selected ? 'rgb(113,126,238)' : '#FFF'),
    '@media (max-width: 576px)': {
      fontSize: '3.3vw',
    },
  },
});

const ItemService = ({ node, selectedIndex }) => {
  const classes = styles({
    color: node.color,
    image: node.images[0].file.url,
    selected: node.order === selectedIndex,
  });
  return (
    <Grid container alignItems="center" className={classes.button}>
      <Grid item xs={4} ms={5} className={classes.buttonIcon} />
      <div className={classes.separator} />
      <Grid item xs={8} ms={6}>
        <Typography
          variant="text"
          className={classes.buttonText}
        >{`${node.title}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemService;
