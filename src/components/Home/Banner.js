import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainLogo from './MainLogo';
import BannerTrama from '../../assets/trama2.png';

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
    paddingTop: '20vh',
    minHeight: '85vh',
    position: 'relative',
    '@media (max-width: 560px)': { height: '100%' },
  },
  background: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '20vh',
    minHeight: '50vh',
    position: 'relative',
    '@media (max-width: 560px)': { height: '100%' },
  },
  mainLogo: {
    position: 'absolute',
    left: '2vw',
    top: '5vh',
    zIndex: 16,
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
    '@media (max-width: 760px)': {
      width: 350,
    },
    zIndex: '1',
  },
  white: {
    backgroundColor: 'white',
    width: '80vw',
  },
  trama: {
    width: '50%',
    height: '70%',
    minHeight: '10vh',
    opacity: 0.6,
    top: -160,
    left: -400,
    bottom: 0,
    right: 0,
    position: 'absolute',
    background: `url(${BannerTrama})`,
    backgroundColor: '#FFFFFF',
    backgroundPosition: 'initial',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    zIndex: '-2',
  },
}));

export default ({ descriptionLanding }) => {
  const [isActive, setIsActive] = useState(false)
  const [firstView, setFirstView] = useState(true)
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });

  const handleScroll = () => {
    if (window.scrollY >= 1000 && !isActive && firstView) {
      setIsActive(true);
      setFirstView(false);
    } else if (window.scrollY < 1000 && isActive && !firstView) {
      setIsActive(false);
    } else if (!firstView) {
      setIsActive(false);
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, [])

  return (
    <>
      <div
        className={
          isActive ? classes.background : classes.backgroundHead
        }
      ></div>
      {/* <div
        data-aos="fade-down-right"
        data-aos-once="true"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={firstView ? classes.trama : { display: 'none' }}
      ></div>*/}

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-once="true"
        className={classes.mainLogo}
      >
        <MainLogo />
      </div>
    </>
  );
};
