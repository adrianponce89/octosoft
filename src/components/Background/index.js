import React from 'react';
import OctoThree from '../../assets/VectorStart.png';
import OctoOne from '../../assets/Vector.png';
import { makeStyles } from '@material-ui/core/styles';

const Background = () => {
  const classes = useStyles();

  return (
    <div className="background">
      <img
        src={OctoThree}
        className={classes.backgroundStart}
        alt="background"
      />
      <img src={OctoOne} className={classes.octo} alt="background" />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  octo: {
    position: 'absolute',
    width: '700px',
    top: '30%',
    left: '-7%',
    zIndex: '0',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  backgroundStart: {
    position: 'absolute',
    top: '5%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
}));

export default Background;
