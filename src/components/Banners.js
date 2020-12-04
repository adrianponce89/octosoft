import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      paddingLeft: 0,
      paddingRight: 0,
    },
    color: ({ color }) => color,
  },
  containerCard: {
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'pre-wrap',
    order: ({ right }) => (right ? 1 : -1),
    '@media (max-width: 576px)': {
      order: () => 1,
    },
  },
  titleCard: {
    fontFamily: 'Montserrat',
    fontSize: 64,
    fontWeight: 900,
    '@media (max-width: 576px)': {
      textAlign: 'center',
    },
  },
  descriptionCard: {
    fontFamily: 'Montserrat',
  },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage || '#ECEC',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    minHeight: '35vh',
    height: 'inherit',
    order: ({ right }) => (right ? -1 : 1),
    '@media (max-width: 576px)': {
      order: () => -1,
    },
  },
  link: {
    textDecoration: 'none',
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
    <Grid item className={classes.root} xs={12} id={props.id}>
      <Link className={classes.link} to={props.link}>
        <div className={classes.cardBody}>
          <Grid
            item
            container
            xs={12}
            sm={6}
            className={classes.backgroundCardImage}
          ></Grid>
          <div className={classes.separator}></div>
          <Grid
            item
            container
            direction="column"
            xs={12}
            sm={6}
            className={classes.containerCard}
          >
            <Typography variant="h5" className={classes.titleCard}>
              {props.title}
            </Typography>
            {!!props.description ? (
              <div className={classes.descriptionContainer}>
                <Typography className={classes.description}>
                  {props.description}
                </Typography>
              </div>
            ) : (
              ''
            )}
          </Grid>
        </div>
      </Link>
    </Grid>
  );
};

export default Banners;
