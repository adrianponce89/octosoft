import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

const OurPortfolio = ({ description, colorTitle, title }) => {
  const classes = useStyles({ colorTitle });
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
          {title}
        </Typography>
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.description}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    marginTop: theme.spacing(8),
    borderRadius: 16,
    backgroundPosition: '0 33%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.common.white,
    backgroundOrigin: 'padding-box',
    zIndex: 1,
  },
  box: { zIndex: 3 },
  media: {
    height: '100%',
    width: '100%',
  },
  titleCard: {
    color: ({ colorTitle }) => colorTitle ?? '#DA2BBC',
    fontSize: '2.5rem',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    marginBottom: theme.spacing(4),
  },
  description: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    whiteSpace: 'break-spaces',
    fontSize: '1.625rem',
    textAlign: 'center',
  },
}));

export default OurPortfolio;
