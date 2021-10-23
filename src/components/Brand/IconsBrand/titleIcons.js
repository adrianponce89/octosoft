import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const TitleIcons = ({ title, sort }) => {
  const classes = useStyles();
  return (
    <Grid
      xs={12}
      container
      className={
        sort === 'Left' ? classes.titleLeft : classes.titleRight
      }
    >
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    marginLeft: '1%',
    marginBottom: '4%',
    marginTop: '4%',
  },
  titleLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  titleRight: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media (max-width: 768px)': {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
}));

export default TitleIcons;
