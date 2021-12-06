import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
const CardSubCategories = ({ title, description }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <div className={classes.paper}>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google"
          className={classes.img}
        />
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
    </Grid>
  );
};

CardSubCategories.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
CardSubCategories.defaultProps = {
  title: 'title default',
  description:
    'Sint exercitation cupidatat nostrud ad sit laborum officia eu culpa id sunt voluptate quis qui. Id dolore exercitation aliquip velit esse duis ut pariatur. Consectetur ut ea elit aliquip amet ad esse excepteur ea. Tempor excepteur mollit veniam ut culpa anim ea amet id.',
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(10),
  },
  paper: {
    alignItems: 'center',
    padding: theme.spacing(10, 12),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 12,
    width: 415,
    height: 500,
    background: '#ffffff52',
  },
  img: { width: 200, height: 200 },
  title: {
    color: '#9E7BE6',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 'min-content',
    fontSize: 30,
    marginBottom: theme.spacing(2),
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: 20,
  },
}));

export default CardSubCategories;
