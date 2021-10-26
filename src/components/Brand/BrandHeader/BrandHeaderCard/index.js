import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import headerCardBackground from '../../../../assets/headerCardBackgroud.png'

const BrandHeaderCard = ({ item }) => {
  const classes = useStyles({ headerCardBackground });
  return (
    <Grid container className={classes.root}>
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.title}>
          {item.title}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {item.description.description}
        </Typography>
      </div>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '286px',
    height: '196px',
    marginBottom: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(6),
    boxShadow:
      '-10px -10px 20px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(0, 0, 0, 0.1);',
    backgroundImage: `url(${headerCardBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 13,
  },
}));

export default BrandHeaderCard
