import React from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import BackgroundBanner from '../assets/BackgroundBanner.png';
import woman from '../assets/woman.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextareaAutosize } from '@material-ui/core';

const styles = makeStyles({
  root: {},
  backgroundGlobal: {
    background: '#f2ff',
    height: '100%',
  },
  backgroundBaner: {
    background: `url(${BackgroundBanner})`,
    backgroundSize: 'cover',
    height: 350,
  },
  containerItems: { padding: 15 },
  titleItems: { fontSize: '18px' },
  titleItem: { margin: '0 15px' },
  justifyText: { textAlign: 'right' },
  picItems: {
    margin: '0 18px',
    width: 300,
    height: 300,
  },
  itemPar: {
    flexDirection: 'row-reverse',
  },
});

const BorderlessIdentities = () => {
  const classes = styles();
  return (
    <Container
      background={`url(${BackgroundImage})`}
      transparent={'none'}
    >
      <div className={classes.root}>
        <Grid item md={12} className={classes.backgroundGlobal}>
          <Grid item md={12}>
            <div className={classes.backgroundBaner}></div>
          </Grid>
          <Grid container justify="center" md={12}>
            <h1 className={classes.titleItems}>
              What is Borderless Identities?
            </h1>
          </Grid>
          <Grid item md={12}>
            <Grid container md={12} alignItems="flex-start">
              <Grid item md={4}>
                <img src={woman} className={classes.picItems} />
              </Grid>
              <Grid item md={4}>
                <h3 className={classes.titleItem}>
                  Labore id ea veniam esse nostrud incididunt elit
                  irure consectetur velit minim voluptate cillum
                  officia.
                </h3>
              </Grid>
            </Grid>
            <Grid
              container
              md={12}
              alignItems="flex-start"
              className={classes.itemPar}
            >
              <Grid container md={4}>
                <img src={woman} className={classes.picItems} />
              </Grid>
              <Grid item md={4}>
                <h3
                  className={`${classes.titleItem} ${classes.justifyText} `}
                >
                  Labore id ea veniam esse nostrud incididunt elit
                  irure consectetur velit minim voluptate cillum
                  officia.
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default BorderlessIdentities;
