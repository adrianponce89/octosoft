import React from 'react';

import {
  Button,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Left = ({ email, setEmail, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4} className={classes.root}>
      <Grid item xs={12} container wrap className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          UNDER CONSTRUCTION
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          We are currently renewing our site!
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          <form
            name="contactunder"
            onSubmit={handleSubmit}
            data-netlify="true"
            className={classes.boxForm}
          >
            <input
              type="hidden"
              name="form-name"
              value="contactunder"
            />
            <Grid item xs={7} sm={6}>
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
            <Grid item xs={4} sm={5}>
              <Button
                variant="contained"
                className={classes.btn}
                type="submit"
              >
                <Typography
                  variant="button"
                  className={classes.btnTxt}
                >
                  NOTIFY ME
                </Typography>
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.5),
    },
  },
  container: {
    rowGap: `${theme.spacing(7.5)}px`,
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 800,
    letterSpacing: '0.15rem',
    fontSize: '4vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '9vw',
    },
    backgroundColor: 'rgb(131,58,180)',
    background:
      'linear-gradient(to bottom right, #3B1440 15%, #BB6DC7 40%, #F7B900 70%) bottom right, linear-gradient(to bottom left, #3B1440 15%, #BB6DC7 40%, #F7B900 70%) bottom left, linear-gradient(to top left, #3B1440 25%, #BB6DC7 70%) top left, linear-gradient(to top right,  #3B1440 25%, #BB6DC7 70%) top right;',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50% 50%',
    fontStyle: 'normal',
    width: 'fit-content',
    boxSizing: 'border-box',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
  },
  subTitle: {
    width: 'fit-content',
    color: ' #737373',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: theme.spacing(6),
    fontStyle: 'normal',
  },
  boxForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
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
    color: theme.palette.common.white,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.775rem',
    },
  },
}));

export default Left;
