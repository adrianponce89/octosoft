import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  cardBody: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'stretch',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  containerCard: {
    width: 'fit-content',
  },
  titleCard: {
    fontFamily: 'Montserrat',
    fontSize: 64,
    fontWeight: 900,
    '@media (max-width: 576px)': {
      textAlign: 'center',
    },
    color: ({ color }) => color,
  },
  subtitleCard: {
    fontSize: 20,
    lineHeight: '170%',
    textAlign: 'start',
    color: '#222',
  },
  descriptionCard: {
    fontFamily: 'Montserrat',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: (props) =>
      props.right ? 'flex-end' : 'flex-start',
  },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    minHeight: '45vmin',
    width: '100%',
    order: ({ right }) => (right ? -1 : 1),
    '@media (max-width: 576px)': {
      order: () => -1,
      baackgroundPosition: 'center',
    },
  },
  separator: {
    borderColor: ({ color }) => color,
    borderWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'stretch',
    margin: 25,
    '@media (max-width: 576px)': {
      height: 0,
    },
    display: ({ separator }) => separator ?? 'block',
  },
  descriptionContainer: {
    background: '#eee',
    padding: 10,
  },
  description: {
    color: '#000',
  },
}));

const Banners = (props) => {
  const classes = styles(props);
  return (
    <Grid
      item
      container
      justify="space-between"
      className={classes.root}
      xs={12}
      id={props.id}
    >
      <Grid
        item
        xs={12}
        sm={3}
        className={classes.backgroundCardImage}
      />

      <Grid
        item
        container
        justify="center"
        alignItems="flex-start"
        direction="column"
        xs={12}
        sm={7}
        className={classes.containerCard}
      >
        <Typography variant="h5" className={classes.titleCard}>
          {props.title}
        </Typography>
        <Grid item container xs={12} sm={7}>
          {props.subtitle ? (
            <Typography variant="h5" className={classes.subtitleCard}>
              {props.subtitle}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banners;
