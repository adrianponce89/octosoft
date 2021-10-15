import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
    marginTop: 20,
  },
  cardBody: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'stretch',
    '@media (max-width: 766px)': {
      flexDirection: 'column',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  titleCard: {
    fontFamily: 'Montserrat',
    fontSize: 64,
    fontWeight: 900,
    '@media (max-width: 766px)': {
      textAlign: 'center',
    },
    color: ({ color }) => color,
  },
  subtitleCard: {
    width: 'fit-content',
    fontSize: 20,
    lineHeight: '170%',
    textAlign: 'start',
    color: '#222',
    '@media (max-width: 766px)': {
      textAlign: 'center',
    },
  },
  descriptionCard: {
    fontFamily: 'Montserrat',
  },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '40vh',
    '@media (max-width: 766px)': {
      paddingBottom: '100%',
    },
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
      id={props.id}
    >
      <Grid
        item
        xs={12}
        md={3}
        className={classes.backgroundCardImage}
      />

      <Grid item xs={12} md={7} container alignContent="center">
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.titleCard}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7}>
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
