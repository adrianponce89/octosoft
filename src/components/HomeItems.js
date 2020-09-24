import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  cardBody: {
    paddingBottom: '10vh',
    borderRadius: 'none',
  },
  containerCard: {
    padding: '5vh',
    display: 'flex',
    justifyContent: 'center',
  },
  titleCard: { fontFamily: 'Lato' },
});

const HomeItems = (props) => {
  const classes = styles();
  return (
    <Grid item xs={12}>
      <Paper square elevation={2} className={classes.cardBody}>
        <Grid container xs={12}>
          <Grid item xs={4}>
            imagen
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={8}
            className={classes.containerCard}
          >
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.titleCard}>
                titulo
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {
                'Veniam nisi elit deserunt non incididunt cillum reprehenderit sit ullamco incididunt do dolor. Irure sint exercitation amet esse nisi velit deserunt aliquip ea eu. Fugiat mollit ex qui deserunt voluptate id incididunt fugiat duis sunt do laboris id. Enim amet ea adipisicing dolor in amet eiusmod. Aliqua ullamco occaecat consequat officia culpa velit minim laborum.'
              }
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default HomeItems;
