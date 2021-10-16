import React from 'react';

import {
  Button,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Left = ({ email, setEmail }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Grid item xs={12} container wrap className={classes.root}>
        <Typography variant="h1" className={classes.title}>
          UNDER CONSTRUCTION
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          We are currently renewing our site!
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={7}>
            <TextField
              fullWidth
              id="email"
              label="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" className={classes.btn}>
              <Typography variant="button" className={classes.btnTxt}>
                NOTIFY ME
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    rowGap: `${theme.spacing(7.5)}px`,
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    letterSpacing: '0.15rem',
    fontSize: theme.spacing(20),
    backgroundColor: 'rgb(131,58,180)',
    background:
      'radial-gradient(circle, #3B1440 11%, #F7B900 56%, #BB6DC7 90%)',
    backgroundRepeat: 'no-repeat',
    fontStyle: 'normal',
    width: 'fit-content',
    boxSizing: 'border-box',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
  },
  subTitle: {
    width: 'fit-content',
    color: ' #737373',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: theme.spacing(6),
    fontStyle: 'normal',
  },
  input: {
    boxShadow: '5px 15px 25px rgba(187, 109, 199, 0.25)',
    borderRadius: theme.spacing(2.5),
    '@global': {
      '.MuiInputBase-input': {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: theme.spacing(3),
        color: ' #737373',
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.spacing(2.5),
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderRadius: theme.spacing(2.5),
        borderColor: 'none',
      },
    },
  },
  btn: {
    background: 'linear-gradient(97.69deg, #37ADD4 0%, #1E2178 100%)',
    boxShadow: '5px 15px 25px rgba(187, 109, 199, 0.25)',
    borderRadius: 10,
    padding: theme.spacing(3, 5, 3, 5),
  },
  btnTxt: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: theme.spacing(4.5),
    color: theme.palette.common.white,
  },
}));

export default Left;
