import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '10px 0',
  },
  cardBody: {
    borderRadius: theme.borderRadius,
    margin: '5px 0',
    width: '100%',
    overflow: 'hidden',
  },
  containerCard: {
    padding: '5vh',
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'pre-wrap',
  },
  titleCard: { fontFamily: 'Lato' },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage || '#ECEC',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    minHeight: '40vh',
    height: 'inherit',
  },
  link: {
    textDecoration: 'none',
  },
}));

const HomeItems = (props) => {
  const classes = styles(props);
  return (
    <Grid item className={classes.root} xs={12}>
      <Link className={classes.link} to={props.link}>
        <Paper square elevation={2} className={classes.cardBody}>
          <Grid
            item
            container
            direction="row"
            alignItems="stretch"
            xs={12}
          >
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
              <Grid item>
                <Typography
                  variant="h5"
                  className={classes.titleCard}
                >
                  {props.title}
                </Typography>
              </Grid>
              <Grid item>{props.description}</Grid>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default HomeItems;
