import React from 'react';
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
    minHeight: '35vh',
    position: 'relative',
    '@media (max-width: 560px)': { minHeight: '30vh' },
    transition: 'all 1s linear',
  },
  mainLogo: {
    position: 'absolute',
    left: '2vw',
    top: '5vh',
    zIndex: 16,
  },
}));

export default ({ descriptionLanding, isActive }) => {
  
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
    isActive
  });

  

  return (
    <>
      <div
        className={classes.backgroundHead}
      ></div>

      <div
        className={classes.mainLogo}
      >
        <MainLogo />
      </div>
    </>
  );
};
