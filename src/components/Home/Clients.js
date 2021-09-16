import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  plans: {
    backgroundColor: '#F7F8FA',
    paddingTop: 60,
    paddingBottom: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 42,
    '@media (max-width: 760px)': {
      fontSize: 32,
      paddingBottom: 20,
    },
  },
  imgClient: {
    width: 120,
    height: 120,
    margin: 30,
  },
  root: {
    marginBottom: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'space-between',
    },
    '@media (min-width: 1800px)': {
      maxWidth: '60%',
    },
  },
}));

export default function Clients({ title, dataClients }) {
      const classes = styles();
    return (
      <Grid container md={12} className={classes.plans}>
        <Grid container item md={8} className={classes.root}>
          <Typography className={classes.title}>
            Clients who trust us
          </Typography>
        </Grid>
        <Grid
          container
          item
          justify="center"
          md={10}
          className={classes.root}
        >
          {dataClients.map((media, index) => {
            return (
              <img
                key={index}
                alt={media.title}
                src={media.file.url}
                className={classes.imgClient}
              />
            );
          })}
        </Grid>
      </Grid>
    );
}
