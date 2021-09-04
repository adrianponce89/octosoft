import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(8),
    borderRadius: 16,
  },
  media: {
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    height: '35vh',
    minHeight: '40vmin',
  },
  divider: {
    backgroundColor: ({ color }) => (color ? color : null),
    width: 6,
    borderRadius: 50,
  },
  titleCard: {
    color: ({ color }) => (color ? color : null),
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
      <Grid item xs={12} container justify="center">
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
        ) : (
          ''
        )}
      </Grid>
    </Paper>
  );
};

export default index;
