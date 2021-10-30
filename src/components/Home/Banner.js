import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TypingAnimation from '../TypingAnimation';
import MainLogo from './MainLogo';
import OctoLogoName from '../../assets/Logoocto2.svg';
import Fade from 'react-reveal/Fade';

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
    minHeight: '90vh',
    position: 'relative',
    '@media (max-width: 560px)': { height: '100%' },
  },
  mainLogo: {
    position: 'absolute',
    left: '2vw',
    top: '5vh',
    zIndex: 11,
  },
  typingContainer: {
    alignSelf: 'flex-start',
    display: 'flex',
    marginLeft: '20vw',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerArrow: {
    position: 'absolute',
    bottom: -180,
  },
  logoName: {
    width: 310,
  },
  video: {
    width: '130vw',
    marginLeft: '-280px',
    '@media (max-width: 760px)': {
      width: 350,
    },
    zIndex: '1',
  },
}));

const words = ['Diverse.', 'Secure.', 'Budget friendly.'];

export default ({ descriptionLanding }) => {
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });
  return (
    <div className={classes.backgroundHead}>
      <MainLogo className={classes.mainLogo} />
      <div className={classes.typingContainer}>
        <TypingAnimation words={words} />
      </div>
      <Grid
        container
        justify="center"
        className={classes.containerArrow}
      >
        <Fade bottom>
          <div className={classes.imgContainer}>
            <OctoLogoName className={classes.logoName} />
          </div>
        </Fade>
      </Grid>
    </div>
  );
};
