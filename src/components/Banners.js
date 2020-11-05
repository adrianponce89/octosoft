import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  separatorBanner: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '45vh',
    width: '100vw',
    position: 'absolute',
    left: 0,
    backgroundAttachment: 'fixed',
  },
  containerBanner: {
    height: '45vh',
    width: '100%',
  },
});

const Banners = (props) => {
  const classes = styles(props);
  return (
    <div className={classes.containerBanner}>
      <div className={classes.separatorBanner}></div>
    </div>
  );
};

export default Banners;
