import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  outsideBox: (props) => ({
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  }),
  background: (props) => ({
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    opacity: 0.2,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    background: props.background || 'none',
    backgroundColor: theme.palette.background.default,
    backgroundPosition: 'initial',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '-1',
  }),
  innerBox: (props) => ({
    maxWidth: 982,
    background: props.transparent ? 'none' : 'white',
    padding: '80px 25px 25px 25px',
  }),
}));

const Container = (props) => {
  const classes = styles(props);
  return (
    <div className={classes.outsideBox}>
      <div className={classes.background} />
      <div className={`${classes.innerBox} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
