import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import CalendarIcon from '../assets/calentarIcon.svg'

const styles = makeStyles({
  root: {
    width: '65px',
    height: '65px',
    backgroundColor: '#37ADD4',
    clipPath:
      'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    transform: 'rotate(20deg)',
    position: 'absolute',
    top: '0',
    left: '0',
    boxShadow: 'box-shadow: 0px 0px 18px 0px rgba(143,131,131,0.61);',
    zIndex: 98,
  },
  container: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65px',
    height: '65px',
    top: '90vh',
    right: '10px',
  },
  calendarIcon: {
    zIndex: 99,
  },
});

const CalendarButton = () => {
    const classes = styles();
    return (
      <div className={classes.container}>
        <div className={classes.root}></div>
        <CalendarIcon className={classes.calendarIcon} />
      </div>
    );
}

export default CalendarButton
