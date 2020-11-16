import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../Container';
import { makeStyles } from '@material-ui/core/styles';
import OctoLogo from '../../assets/logoHome.svg';
import TypingAnimation from '../TypingAnimation';

const useStyles = makeStyles((theme) => ({
  backgroundHead: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '10vh',
    minHeight: '60vh',
    position: 'relative',
    '@media (max-width: 560px)': { height: '100%' },
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
  },
  arrowDown: {
    fontSize: '5em',
    color: '#000',
    margin: 0,
    padding: 0,
  },
  containerArrow: { position: 'absolute', bottom: -25 },
  textLogo: {
    cursor: 'default',
    fontSize: 50,
    lineHeight: 0.75,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  textLogoSub: {
    cursor: 'default',
    fontSize: 31,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
}));

const words = ['Diverse.', 'Secure.', 'Budget friendly.'];

export default ({ descriptionLanding }) => {
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });
  return (
    <div className={classes.backgroundHead}>
      <Container innerBackground={'none'} innerPadding={'0'} partial>
        <Grid justify="center">
          <Grid container direction="column" alignItems="center">
            <Grid
              container
              alignItems="center"
              justify="center"
              className={classes.containerHead}
            >
              <Grid item sm={2}>
                <OctoLogo className={classes.logo} />
              </Grid>
              <Grid
                item
                container
                xs={11}
                sm={4}
                justifyContent="center"
              >
                <Typography variant="h1" className={classes.textLogo}>
                  {'Octosoft'}
                </Typography>
                <Typography
                  variant="h2"
                  className={classes.textLogoSub}
                >
                  {'Professionals'}
                </Typography>
              </Grid>
            </Grid>
            <TypingAnimation words={words} />
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        justify="center"
        className={classes.containerArrow}
      >
        <a href="#work">
          <ExpandMoreIcon className={classes.arrowDown} />
        </a>
      </Grid>
    </div>
  );
};
