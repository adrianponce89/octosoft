import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const TypographySection = () => {
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
            TYPOGRAPHY
          </Typography>
        </Grid>
        <Grid
          xs={12}
          container
          justify="space-between"
          className={classes.fontContainer}
        >
          <Grid item xs={12} md={5} container direction="column">
            <Typography
              variant="h4"
              className={classes.typographyMontserrat}
            >
              MONSTSERRAT FONT
            </Typography>
            <Typography
              variant="h4"
              className={classes.montserratHeadlines}
            >
              HEADLINES: Montserrat Black
            </Typography>
            <Typography
              variant="h4"
              className={classes.montserratSubtitles}
            >
              uppercase & subtitles: Montserrat semi bold
            </Typography>
            <Typography
              variant="h4"
              className={classes.montserratRegular}
            >
              Regular text: Montserrat Regular
            </Typography>
            <a
              href={'https://fonts.google.com/specimen/Montserrat'}
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.buttonLink}>
                <Typography variant="subtitle">
                  DOWNLOAD FROM GOOGLE FONTS
                </Typography>
              </Button>
            </a>
          </Grid>
          <Grid item xs={11} md={5} container>
            <Typography
              variant="h4"
              className={classes.typographyMontserrat}
            >
              ABCDEFGHIJKLMNOCTOSOFTUVWXYZ <br />
              abcdefghijklmnoctosoftuvwxyz <br />
              ¡€£$¿@?!=+/&#”%^&*() <br />
              1234567890,.;'
            </Typography>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justify="space-between"
          className={classes.fontContainer}
        >
          <Grid item xs={12} md={5} container direction="column">
            <Typography
              variant="h4"
              className={classes.typographyPoppins}
            >
              POPPINS FONT
            </Typography>
            <Typography
              variant="h4"
              className={classes.poppinsHeadlines}
            >
              HEADLINES: Poppins Black
            </Typography>
            <Typography
              variant="h4"
              className={classes.poppinsSubtitles}
            >
              uppercase & subtitles: Poppins semi bold
            </Typography>
            <Typography
              variant="h4"
              className={classes.poppinsRegular}
            >
              Regular text: Poppins Regular
            </Typography>
            <a
              href={'https://fonts.google.com/specimen/Poppins'}
              target="_blank"
              className={classes.link}
            >
              <Button className={classes.buttonLink}>
                <Typography variant="subtitle">
                  DOWNLOAD FROM GOOGLE FONTS
                </Typography>
              </Button>
            </a>
          </Grid>
          <Grid item xs={11} md={5} container>
            <Typography
              variant="h4"
              className={classes.typographyPoppins}
            >
              ABCDEFGHIJKLMNOCTOSOFTUVWXYZ <br />
              abcdefghijklmnoctosoftuvwxyz <br />
              ¡€£$¿@?!=+/&#”%^&*() <br />
              1234567890,.;'
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {},
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
  typographyMontserrat: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '50px',
    color: '#000000',
    letterSpacing: '0.05em',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  montserratHeadlines: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 20,
    lineHeight: '40px',
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  poppinsSubtitles: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 20,
    lineHeight: '40px',
    textTransform: 'uppercase',
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  montserratSubtitles: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 20,
    textTransform: 'uppercase',
    lineHeight: '40px',
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  montserratRegular: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '40px',
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  poppinsRegular: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '40px',
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  typographyPoppins: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '50px',
    color: '#000000',
    letterSpacing: '0.05em',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  poppinsHeadlines: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 20,
    lineHeight: '40px',
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 14,
    },
  },
  titleLeft: {},
}));

export default TypographySection
