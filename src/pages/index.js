import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import HeroImage from '../assets/header_cropped.png';
import BannerImage from '../assets/BannerFinal.png';
import BackgroundImage from '../assets/Background.png';
import OctoLogo from '../assets/logoHome.svg';

const useStyles = makeStyles((theme) => ({
  backgroundHead: {
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '15vh',
    height: '85vh',
    position: 'relative',
  },
  containerHead: {
    marginBottom: '8vh',
    display: 'flex',
    '@media (max-width: 560px)': {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  logo: {
    width: 125,
    height: 125,
    filter: 'drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.50))',
  },
  arrowDown: { fontSize: '5em', color: '#fff' },
  containerArrow: { position: 'absolute', bottom: 0 },
  textLogo: {
    cursor: 'default',
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: 50,
    letterSpacing: 2,
    fontWeight: 'bold',
    textShadow: '0px 5px 4px rgba(0, 0, 0, 0.50)',
    '@media (max-width: 560px)': { textAlign: 'center' },
  },
  containerHeadCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    width: '65vw',
    '@media (max-width: 560px)': { width: '85vw' },
    paddingBottom: '15vh',
  },
  textCard: {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: 20,
    margin: 15,
  },
  cardBody: {
    paddingBottom: '10vh',
    borderRadius: 'none',
  },
  containerCard: {
    padding: '5vh',
    display: 'flex',
    justifyContent: 'center',
  },
  titleCard: { fontFamily: 'Lato' },
  separatorBanner: {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '45vh',
    width: '100%',
    filter: 'blur(4px)',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.backgroundHead}>
        <Container transparent={'none'}>
          <Grid contantain justify="center">
            <Grid
              container
              direction="column"
              alignItems="center"
              xs={12}
            >
              <Grid
                container
                xs={12}
                alignItems="center"
                justify="center"
                className={classes.containerHead}
              >
                <Grid item sm={3}>
                  <OctoLogo className={classes.logo} />
                </Grid>
                <Grid item xs={11} sm={4}>
                  <Typography
                    variant="h1"
                    className={classes.textLogo}
                  >
                    {'Octosoft Professionals'}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={9} className={classes.containerHeadCard}>
                <Typography
                  variant="body1"
                  className={classes.textCard}
                >
                  {'Professional solutions in every field '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Grid
          container
          xs={12}
          justify="center"
          className={classes.containerArrow}
        >
          <a href="#work">
            <ExpandMoreIcon className={classes.arrowDown} />
          </a>
        </Grid>
      </div>
      <section id="work">
        <Container
          background={`url(${BackgroundImage})`}
          transparent={'none'}
          className={classes.containerCard}
        >
          <Grid
            container
            direction="column"
            justify="center"
            xs={9}
            spacing={2}
          >
            <Grid item xs={12}>
              <Paper
                square
                elevation={2}
                className={classes.cardBody}
              >
                <Grid container xs={12}>
                  <Grid item xs={4}>
                    imagen
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    xs={8}
                    className={classes.containerCard}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h5">titulo</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {
                        'Veniam nisi elit deserunt non incididunt cillum reprehenderit sit ullamco incididunt do dolor. Irure sint exercitation amet esse nisi velit deserunt aliquip ea eu. Fugiat mollit ex qui deserunt voluptate id incididunt fugiat duis sunt do laboris id. Enim amet ea adipisicing dolor in amet eiusmod. Aliqua ullamco occaecat consequat officia culpa velit minim laborum.'
                      }
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <div className={classes.separatorBanner}></div>
          </Grid>
        </Container>
      </section>
    </>
  );
};
