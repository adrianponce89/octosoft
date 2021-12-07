import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Cards = (props) => {
  const classes = useStyles(props);

  return (
    <Grid
      item
      className={classes.root}
      xs={12}
      alignItems="center"
      justifyContent="center"
    >
      <div className={classes.cardBody}>
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
          sm={6}
          className={classes.containerCard}
        >
          <Typography className={classes.descriptionCard}>
            {props.description}
          </Typography>
        </Grid>
      </div>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 60,
    marginTop: 60,
  },
  cardBody: {
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  containerCard: {
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'pre-wrap',
    order: ({ right }) => (right ? 1 : -1),
    '@media (max-width: 768px)': {
      order: () => 1,
      alignItems: 'center',
      width: '90%',
    },
  },
  descriptionCard: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
    '@media (max-width: 768px)': {
      width: '90%',
      textAlign: 'center',
      fontSize: 16,
      marginTop: 20,
      marginBottom: 20,
    },
  },
  backgroundCardImage: {
    backgroundImage: (props) => props.backgroundImage || '#ECEC',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '35vh',
    height: 'inherit',
    order: ({ right }) => (right ? -1 : 1),
    '@media (max-width: 768px)': {
      order: () => -1,
    },
  },
}));

export default Cards;
