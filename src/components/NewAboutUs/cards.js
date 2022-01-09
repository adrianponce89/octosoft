import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

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

          <Typography className={classes.descriptionCard}>
            {props.description}
          </Typography>

          {(props.link != null) && 
            <Link className={classes.link} to={props.link}>
              <Typography className={classes.descriptionLink}>
                KNOW OUR TEAM
              </Typography>
            </Link>
          }
          
        </Grid>
      </div>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '40px',
    marginTop: '40px',
  },
  separator: {
    borderWidth: 1,
    alignSelf: 'stretch',
    margin: 5,
    '@media (max-width: 100px)': {
      height: 0,
    },
  },
  cardBody: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
      order: () => 1,
      alignItems: 'center',
      width: '90%',
    },
  },
  titleCard: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 30,
    paddingBottom: 10,
  },
  descriptionCard: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '30px',
    textAlign: 'left',
    color: '#000000',
    '@media (max-width: 768px)': {
      width: '90%',
      textAlign: 'left',
      fontSize: 16,
      marginTop: 20,
      marginBottom: 20,
    },
  },
  link: {
    width: '149px',
    height: '50px',
  },
  descriptionLink: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    lineHeight: '20px',
    width: '149px',
    height: '50px',
    textAlign: 'center',
    color: '#000000',
    justifyContent: 'left',
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      textDecoration: 'underline',
      color: '#8249DC',
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
    '@media (max-width: 576px)': {
      order: () => -1,
    },
  },
}));

export default Cards;
