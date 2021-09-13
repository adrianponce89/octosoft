import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import TramaAboutUs from '../../../assets/TramaAboutUs.png';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    marginTop: theme.spacing(8),
    borderRadius: 16,
    backgroundImage: `url(${TramaAboutUs})`,
    backgroundPosition: '0 33%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFF',
    backgroundOrigin: 'padding-box',
    zIndex: 1,
  },
  box: { zIndex: 3 },
  media: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: '35vh',
    minHeight: '40vmin',
  },

  titleCard: {
    color: ({ color }) => color ?? null,
    fontSize: '2.5rem',
    fontWeight: 800,
    fontFamily: 'Poppins',
    marginBottom: theme.spacing(4),
  },
  description: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    whiteSpace: 'break-spaces',
    fontSize: '1rem',
    textAlign: 'center',
  },
}));

const index = ({ aboutUs }) => {
  const classes = useStyle({ color: aboutUs.color });
  return (
    <Paper square elevation={1} className={classes.root}>
      <Grid
        item
        xs={12}
        container
        justify="center"
        className={classes.box}
      >
        <Typography variant="h5" className={classes.titleCard}>
          The Octosoft Team
        </Typography>
        {aboutUs.description.internal.content ? (
          <Grid item xs={10}>
            <Typography
              variant="body1"
              className={classes.description}
            >
              {aboutUs.description.internal.content}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </Paper>
  );
};

export default index;
