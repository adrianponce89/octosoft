import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Title = ({ color, title }) => {
  const classes = useStyles({ color });
  return (
    <Typography variant="h5" className={classes.title}>
      {title}
    </Typography>
  );
};
const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontSize: '5vh',
    color: ({ color }) => color || '#ECECEC',
    fontWeight: '700',
    marginTop: '2rem',
    marginBottom: '0rem',
  },
}));

export default Title;
