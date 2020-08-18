import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/clouds.jpg';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getLines } from '../Contentful';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '35vh',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    padding: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '10vh',
    textAlign: 'end',
  },
  textSmall: {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'xxx-large',
    textAlign: 'end',
  },
}));

export default ({ headerTitle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.header}>
      <div className={isSmall ? classes.textSmall : classes.text}>
        {getLines(headerTitle)}
      </div>
    </div>
  );
};
