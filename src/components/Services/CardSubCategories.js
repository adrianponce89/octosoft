import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Polygon from '../../assets/ServicesExample.png';
const CardSubCategories = ({ title, description, color }) => {
  const classes = useStyles({color});
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
          src={Polygon}
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
    borderRadius: 12,
    width: 415,
    height: 500,
    background: '#FFFFFF',
    zIndex: '1',
  },
  img: { width: 200, height: 200 },
  title: {
    color: ({ color }) => color,
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
