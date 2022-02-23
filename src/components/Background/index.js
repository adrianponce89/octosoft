import React from 'react';
import OctoThree from '../../assets/VectorStart.png';
import OctoOne from '../../assets/Complete.png';
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
    top: '7%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  backgroundStart: {
    position: 'absolute',
    top: '7%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
}));

export default Background;
