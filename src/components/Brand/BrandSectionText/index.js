import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const BrandSectionText = ({haveList = false}) => {
    const list = [
      'Lorem ipsum dolor sit amet, onsec tetur adipiscing elit. ',
      'Lorem ipsum dolor sit amet, onsec tetur adipiscing elit. ',
      'Lorem ipsum dolor sit amet, onsec tetur adipiscing elit. ',
      'Lorem ipsum dolor sit amet, onsec tetur adipiscing elit. ',
      'Lorem ipsum dolor sit amet, onsec tetur adipiscing elit. ',
    ];
    const classes = useStyles();
    return (
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid xs={12} container className={classes.titleLeft}>
          <Typography variant="h4" className={classes.title}>
            LEGAL DISCLAIMER
          </Typography>
        </Grid>
        <Grid xs={12} container className={classes.textContainer}>
          <Typography variant="subtitle" className={classes.text}>
            Hola
          </Typography>
        </Grid>
        {haveList && (
          <Grid xs={12} container className={classes.textContainer}>
            <Grid xs={5} container className={classes.textContainer}>
              <Typography variant="subtitle" className={classes.text}>
                Hola
              </Typography>
              {list &&
                list.map((item) => (
                  <Typography
                    variant="subtitle"
                    className={classes.text}
                  >
                    {item}
                  </Typography>
                ))}
            </Grid>
            <Grid xs={5} container className={classes.textContainer}>
              <Typography variant="subtitle" className={classes.text}>
                Hola
              </Typography>
              {list &&
                list.map((item) => (
                  <Typography
                    variant="subtitle"
                    className={classes.text}
                  >
                    {item}
                  </Typography>
                ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(0, 5) },
  fontContainer: {
    margin: theme.spacing(6, 0),
  },
  link: {
    textDecoration: 'none',
  },
  buttonLink: {
    padding: theme.spacing(2, 5),
    marginTop: theme.spacing(3),
    border: '1px solid #FF9F3B',
    boxShadow:
      '-3px -3px 5px rgba(255, 159, 59, 0.25), 3px 3px 5px rgba(255, 159, 59, 0.25);',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 40,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 28,
    },
  },
}));

export default BrandSectionText
