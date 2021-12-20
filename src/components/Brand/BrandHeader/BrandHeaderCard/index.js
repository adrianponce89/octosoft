import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import headerCardBackground from '../../../../assets/TORESIZE.png';

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
    maxWidth: '410px',
    height: '240px',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(6),
    overflow: 'auto',
    boxShadow:
      '-10px -10px 20px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(0, 0, 0, 0.1);' ,
    backgroundImage: `url(${headerCardBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFFFFF',
    zIndex: '1',
  },
  title: {
    fontFamily: 'Montserrat',
    color: '#414141',
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#000000',
    fontSize: 13,
    overflow: 'auto',
    maxHeight: '105px',
  },
}));

export default BrandHeaderCard;
