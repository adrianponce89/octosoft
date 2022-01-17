import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const CardSubCategories = ({
  title,
  description,
  color,
  icon,
  octagon,
  length,
  titleChanged,
  filter,
}) => {
  const classes = useStyles({ color, octagon, icon, filter });
  const [firstTitle, setFirstTitle] = useState('');
  const [secondTitle, setSecondTitle] = useState('');

  useEffect(() => {
    setFirstTitle(title.split(' ').slice(0, 1));
    setSecondTitle(title.split(' ').slice(1, title.length));
  }, [title]);

  return (
    <div className={length ? classes.rootFive : classes.root}>
      <div className={classes.sortIcon}>
        <img
          src={octagon}
          alt="octagon"
          className={classes.octagon}
        ></img>
        <div className={classes.icon} />
      </div>
      {!titleChanged ? (
        <Typography className={classes.title}>{title}</Typography>
      ) : (
        <Fragment>
          <Typography className={classes.title}>
            {firstTitle}
          </Typography>
          {secondTitle ? (
            <Typography className={classes.title}>
              {secondTitle[0]}
              {secondTitle[1] ? secondTitle[1] : null}
            </Typography>
          ) : null}
        </Fragment>
      )}
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
    width: '28rem',
    marginTop: '0.8rem',
    marginBottom: '0.8rem',
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    minHeight: '35rem',
    height: 'fit-content',
    opacity: '0.8',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: '0.8rem',
    '@media (max-width: 800px)': {
      width: '20rem',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
      height: 'fit-content',
      minHeight: '30rem',
    },
  },
  root: {
    display: 'flex',
    width: '28rem',
    marginTop: '0.8rem',
    marginBottom: '0.8rem',
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    minHeight: '35rem',
    height: 'fit-content',
    opacity: '0.8',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: '0.8rem',
    '@media (max-width: 800px)': {
      width: '20rem',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
      backgroundColor: '#FFFFFF',
      height: 'fit-content',
      minHeight: '30rem',
    },
  },
  sortIcon: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '2rem',
    marginTop: '2.5rem',
  },
  octagon: {
    display: 'flex',
    width: '250px',
    filter: ({ filter }) => filter,
  },
  icon: {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: ({ icon }) => icon || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '125px 125px',
    paddingBottom: '100%',
    marginBottom: '3%',
    zIndex: 1,
  },
  title: {
    width: '100%',
    color: ({ color }) => color,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: '3vh',
    margin: '0%',
    marginBottom: '1px',
    '@media (max-width: 800px)': {
      width: '90%',
    },
  },
  description: {
    width: '85%',
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: '2vh',
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '2rem',
    lineHeight: '1.5',
    '@media (max-width: 800px)': {
      fontSize: '1,5vh',
      width: '90%',
      marginBottom: '1.5rem',
    },
  },
}));

export default CardSubCategories;
