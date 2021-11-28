import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
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
