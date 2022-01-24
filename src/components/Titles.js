import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const Titles = ({ title, subTitle, color }) => {
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
        {subTitle && (
          <Typography variant="h3" className={classes.subTitle}>
            {subTitle}
          </Typography>
        )}
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
    fontWeight: 900,
    fontFamily: 'Montserrat',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 30,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
  },
}));

Titles.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  color: PropTypes.string,
};

Titles.defaultProps = {
  title: 'This is the default title',
};

export default Titles;
