import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const OurPortfolio = ({ colorTitle, title }) => {
  const classes = useStyles({ colorTitle });

  return (
    <Box square elevation={1} className={classes.root}>
      <Grid
        item
        xs={12}
        container
        justify="center"
        className={classes.box}
      >
        <Typography variant="h5" className={classes.titleCard}>
          {title || 'Our Portfolio'}
        </Typography>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    marginTop: theme.spacing(8),
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(7),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
  },
  box: { zIndex: 3 },
  media: {
    height: '100%',
    width: '100%',
  },
  titleCard: {
    color: ({ colorTitle }) => '#37ADD4' /* colorTitle ?? '#8249DC' */,
    fontSize: '6rem',
    fontWeight: 900,
    fontFamily: 'Montserrat',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '3rem'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: '2rem'
    },
  },
}));

export default OurPortfolio;
