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
    fontWeight: 900,
    fontSize: 32,
  },
  descriptionCard: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    textAlign: 'justify',
  },
  descriptionLink: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    textAlign: 'right',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage || '#ECEC',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
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
}));

const HomeItems = (props) => {
  const classes = styles(props);
  return (
    <Grid item className={classes.root} xs={12}>
      <div className={classes.cardBody}>
        <Grid
          item
          container
          xs={12}
          sm={4}
          className={classes.backgroundCardImage}
        ></Grid>
        <div className={classes.separator}></div>
        <Grid
          item
          container
          direction="column"
          xs={12}
          sm={8}
          className={classes.containerCard}
        >
          <Typography variant="h5" className={classes.titleCard}>
            {props.title}
          </Typography>

          <Typography className={classes.descriptionCard}>
            {props.description}
          </Typography>
          <Link className={classes.link} to={props.link}>
            <Typography className={classes.descriptionLink}>
              Learn more...
            </Typography>
          </Link>
        </Grid>
      </div>
    </Grid>
  );
};

export default HomeItems;
