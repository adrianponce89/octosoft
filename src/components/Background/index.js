import React from 'react';
import OctoThree from '../../assets/VectorStart.png';
import OctoOne from '../../assets/Complete.png';
import OctoTwo from '../../assets/OctoBrandSecond.png';
import OctoFour from '../../assets/VectorMid.png';
import { makeStyles } from '@material-ui/core/styles';

const Background = ({isFullLength = false}) => {
  const classes = useStyles();
  return (
    <div className="background">
      <img
        src={OctoThree}
        className={classes.backgroundStart}
        alt="background"
      />
      <img
        src={OctoOne}
        className={classes.octoOne}
        alt="background"
      />
      {isFullLength && (
        <>
          <img src={OctoThree} alt="" className={classes.OctoThree} />
          <img src={OctoFour} alt="" className={classes.OctoFour} />
          <img src={OctoTwo} alt="" className={classes.octoTwo} />
        </>
      )}
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  background: {
    width: '100%',
    height: 'fit-content',
    minHeight: '100vh',
    backgroundColor: '#F5F7F7',
  },
  octoTwo: {
    position: 'absolute',
    width: '700px',
    bottom: '-250%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  octoOne: {
    position: 'absolute',
    width: '700px',
    top: '30%',
    left: '-7%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  OctoThree: {
    position: 'absolute',
    top: '9%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  OctoFour: {
    position: 'absolute',
    bottom: '-190%',
    left: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  OctoFive: {
    position: 'absolute',
    bottom: '-579%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  backgroundStart: {
    position: 'absolute',
    top: '8%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
}));

export default Background;
