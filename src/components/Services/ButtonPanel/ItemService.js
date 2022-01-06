import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby';

const ItemService = ({ node, selectedIndex }) => {
  const classes = styles({
    color: node.color,
    image: node.images[0].file.url,
    selected: node.order === selectedIndex,
  });

  return (
    <Grid
      item
      xs={12}
      container
      justify="space-around"
      alignItems="center"
      className={classes.button}
    >
      <Grid item xs={4} sm={3} className={classes.buttonIcon} />

      <Divider orientation="vertical" className={classes.divider} />

      <Grid
        item
        xs={8}
        sm={4}
        container
        justify="center"
        className={classes.boxBtnText}
      >
        <Link
          to={`/ourservices/subcategories?${node.title}`}
          className={classes.link}
        >
          <Typography
            variant="text"
            className={classes.buttonText}
          >{`${node.title}`}</Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

const styles = makeStyles({
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 70,
    borderRadius: 8,
    backgroundColor: (props) =>
      props.selected ? 'rgb(236,236,236)' : 'rgb(194,193,191)',
    boxShadow: '0px 5px 0px rgb(130 127 132)',
    '@media (max-width: 776px)': {
      margin: 8,
    },
  },
  buttonIcon: {
    width: '100%',
    height: '100%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: '75%',
    backgroundRepeat: 'no-repeat',
  },
  divider: {
    backgroundColor: (props) =>
      props.selected ? 'rgb(113,126,238)' : '#FFF',
    height: '70%',
    width: 2,
  },
  boxBtnText: {
    maxWidth: '60%',
    flexBasis: '60%',
  },
  buttonText: {
    width: '60%',
    fontWeight: 'bolder',
    color: (props) => (props.selected ? 'rgb(113,126,238)' : '#FFF'),
    '@media (max-width: 776px)': {
      width: '90%',
      margin: 0,
      fontSize: '1.3vh',
      textAlign: 'flex-start',
    },
  },
});

export default ItemService;
