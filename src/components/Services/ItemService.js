import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 70,
    backgroundColor: (props) => props.color,
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
    color: '#FFFF',
    '@media (max-width: 576px)': {
      fontSize: '3.3vw',
    },
  },
  highlightedButton: {
    backgroundColor: '#ECECEC',
    color: '#000',
  },
});

const ItemService = ({ node, index }) => {
  console.log('index::', index);
  const classes = styles({
    color: node.color,
    image: node.images[0].file.url,
  });
  return (
    <>
      <Grid
        container
        alignItems="center"
        className={`${classes.button} ${
          node.order === index ? classes.highlightedButton : ''
        }`}
      >
        <Grid
          item
          xs={4}
          ms={5}
          className={classes.buttonIcon}
        ></Grid>
        <Grid
          item
          xs={8}
          ms={6}
          className={classes.buttonText}
        >{`${node.title}`}</Grid>
      </Grid>
    </>
  );
};

export default ItemService;
