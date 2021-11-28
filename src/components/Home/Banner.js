import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainLogo from './MainLogo';

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
    paddingTop: '10vh',
    minHeight: '50vh',
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

  console.log(isActive, window.scrollY);

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
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
        className={classes.mainLogo}
      >
        <MainLogo />
      </div>
    </>
  );
};
