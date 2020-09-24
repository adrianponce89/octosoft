import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: { width: '100%' },
  cardBody: {
    borderRadius: 'none',
    margin: '5px 0',
    width: '100%',
  },
  containerCard: {
    padding: '5vh',
    display: 'flex',
    justifyContent: 'center',
  },
  titleCard: { fontFamily: 'Lato' },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage || '#ECEC',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '40vh',
  },
});

const HomeItems = (props) => {
  const classes = styles(props);
  return (
    <Grid item className={classes.root} xs={10}>
      <Paper square elevation={2} className={classes.cardBody}>
        <Grid container direction="row" alignItems="center" xs={12}>
          <Grid
            item
            container
            xs={12}
            sm={4}
            className={classes.backgroundCardImage}
          ></Grid>
          <Grid
            item
            container
            direction="column"
            xs={12}
            sm={8}
            className={classes.containerCard}
          >
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.titleCard}>
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {props.description}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default HomeItems;
