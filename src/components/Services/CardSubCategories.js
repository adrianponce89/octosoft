import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const CardSubCategories = ({
  title,
  description,
  color,
  icon,
  octagon,
  length,
}) => {
  const classes = useStyles({ color, octagon, icon });
  return (
    <div className={length ? classes.rootFive : classes.root}>
      <div className={classes.octagon}>
        <div className={classes.icon} />
      </div>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        className={classes.description}
      >
        {description}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  rootFive: {
    display: 'flex',
    width: '30rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    height: '40rem',
    opacity: '0.8',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 800px)': {
      width: '20rem',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
      height: 'fit-content',
    },
  },
  root: {
    display: 'flex',
    width: '30rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    height: '40rem',
    opacity: '0.8',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 800px)': {
      width: '20rem',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
      backgroundColor: '#FFFFFF',
      height: 'fit-content',
    },
  },
  octagon: {
    display: 'flex',
    width: '100%',
    height: '15rem',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
    justifyContent: 'center',
    backgroundImage: ({ octagon }) => octagon || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '240px 240px',
  },
  icon: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: ({ icon }) => icon || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '110px 110px',
    paddingBottom: '100%',
    marginBottom: '3%',
    zIndex: 1,
  },
  title: {
    width: '80%',
    color: ({ color }) => color,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    margin: '0%',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
    '@media (max-width: 800px)': {
      width: '90%',
    },
  },
  description: {
    width: '80%',
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: '2.5vh',
    textAlign: 'center',
    '@media (max-width: 800px)': {
      fontSize: '2vh',
      width: '90%',
      marginBottom: '1.5rem',
    },
  },
}));

export default CardSubCategories;
