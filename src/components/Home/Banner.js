import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypingAnimation from '../TypingAnimation';
import MainLogo from './MainLogo';
import BridgeVideo from '../../assets/brige-octo.mp4'


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
    width: '100vw',
    // marginLeft: '-280px',
    '@media (max-width: 760px)': {
      width: 350,
    },
    zIndex: '1',
  },
  white: {
    backgroundColor: 'white',
    width: '80vw',
  },
}));

const words = ['Diverse.', 'Secure.', 'Budget friendly.'];

export default ({ descriptionLanding }) => {
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className={classes.backgroundHead}
      >
        {/* <div className={classes.typingContainer}>
        <TypingAnimation words={words} />
      </div> */}
        {/* <video className={classes.video} autoPlay loop muted>
        <source src={BridgeVideo} type="video/mp4"></source>
      </video> */}
        {/* <img src={BridgeVideo} className={classes.video} /> */}
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className={classes.mainLogo}
      >
        <MainLogo />
      </div>
    </>
  );
};
