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
}) => {
  const classes = useStyles({ color, octagon, icon });
  const [firstTitle, setFirstTitle] = useState('');
  const [secondTitle, setSecondTitle] = useState('');
  useEffect(() => {
    setFirstTitle(title.split(' ').slice(0, 1));
    setSecondTitle(title.split(' ').slice(1, title.length));
  }, [title]);
  console.log(secondTitle);
  return (
    <div className={length ? classes.rootFive : classes.root}>
      <div className={classes.octagon}>
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
              {secondTitle[0]}{' '}
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
    width: '25rem',
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
    width: '25rem',
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
  octagon: {
    display: 'flex',
    width: '100%',
    height: '15rem',
    alignItems: 'center',
    marginTop: '1.5rem',
    marginBottom: '.5rem',
    justifyContent: 'center',
    backgroundImage: ({ octagon }) => octagon || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '185px 185px',
  },
  icon: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: ({ icon }) => icon || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75px 75px',
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
