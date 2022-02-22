import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  plans: {
    // backgroundColor: '#F7F8FA',
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
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontWeight: 700,
    '@media (max-width: 760px)': {
      fontSize: 24,
      paddingBottom: 20,
    },
  },
  imgClient: {
    width: 100,
    height: 100,
    margin: 20,
  },
  imgNearverse: {
    width: 110,
    height: 110,
    margin: 20,
  },
  titlesContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 60,
    '@media (max-width: 760px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
    },
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
      maxWidth: '90%',
    },
  },
}));

export default function Clients({ title, dataClients }) {
      const classes = styles();
    return (
      <Grid container md={8} xs={12} className={classes.plans}>
        <Grid
          container
          item
          md={12}
          className={classes.titlesContainer}
        >
          <Typography className={classes.title}>
            Clients who trust us
          </Typography>
        </Grid>
        <Grid
          container
          item
          justify="space-between"
          xs={12}
          className={classes.root}
        >
          {dataClients.slice(0, 6).map((media, index) => {
            if(index === 1) {
              return (
                <img
                  key={index}
                  alt={media.title}
                  src={media.file.url}
                  className={classes.imgNearverse} //se le cambio la clase porque se pidio que el logo estuviera mas grande programaticamente -.-
                />
              );
            }
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
