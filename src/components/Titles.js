import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const Titles = ({ title, color }) => {
  const classes = useStyles({ color });
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        item
        xs={10}
        sm={6}
        container
        justify="center"
        alignItems="center"
      >
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(20, 0, 15, 0),
  },
  title: {
    color: ({ color }) => color || theme.palette.primary.main,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
}));

Titles.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Titles.defaultProps = {
  title: 'This is the default title',
};

export default Titles;
