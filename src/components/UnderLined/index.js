import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Line from '../../assets/Divider.svg';

const UnderLined = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} md={11} justify="center">
      <Typography variant="h5" className={classes.description}>
        From freelancers to the world, we <br />
        help people build great digital <br /> products from head to
        toe.
      </Typography>
      <Grid
        container
        item
        xs={11}
        md={7}
        justify="flex-end"
        className={classes.gridLine}
      >
        <Line className={classes.line} />
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  line: {
    width: '60%',
    marginBottom: theme.spacing(5),
    '@media (min-width: 2800px)': {
      width: '70%',
    },
    '@media (max-width: 760px)': {
      visibility: 'hidden',
    },
  },
  root: {},
  gridLine: {
    '@media (max-width: 760px)': {
      display: 'flex',
      marginRight: '15%',
    },
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 36,
    color: '#000000',
    textAlign: 'center',
    '@media (max-width: 760px)': {
      fontSize: 16,
    },
  },
}));

export default UnderLined;
