import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  CardMedia,
  Grid,
  Typography,
  Divider,
  Paper,
  Hidden,
} from '@material-ui/core';

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
    fontFamily: 'Montserrat',
    fontSize: '2em',
    fontWeight: 900,
    marginBottom: theme.spacing(4),
    '@media (max-width: 576px)': {
      textAlign: 'center',
    },
  },
  description: {
    fontFamily: 'Montserrat',
    whiteSpace: 'break-spaces',
    fontSize: '1em',
  },
}));

const index = ({ aboutUs }) => {
  const classes = useStyle({ color: aboutUs.color });
  return (
    <Paper square elevation={1} className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.containerItem}
      >
        <Grid item xs={12} sm={3} className={classes.imageContainer}>
          <CardMedia
            image={aboutUs.image.file.url}
            className={classes.media}
          />
        </Grid>

        <Hidden xsDown>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        </Hidden>

        <Grid item container direction="column" xs={12} sm={8}>
          <Typography variant="h5" className={classes.titleCard}>
            {aboutUs.title}
          </Typography>
          {aboutUs.description.internal.content ? (
            <Typography
              variant="body1"
              className={classes.description}
            >
              {aboutUs.description.internal.content}
            </Typography>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default index;
