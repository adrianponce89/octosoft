import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Container = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.outsideBox}>
      <div className={classes.background} />
      <div className={`${classes.innerBox} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  outsideBox: (props) => ({
    width: '100%',
    height: '100%',
    minHeight: !!props.partial ? '50vh' : '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  }),
  background: (props) => ({
    width: '100%',
    height: '100%',
    minHeight: !!props.partial ? '50vh' : '100vh',
    opacity: props.opacity || 0.2,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    background: props.background || 'none',
    backgroundColor:
      props.backgroundColor || theme.palette.background.default,
    backgroundPosition: 'initial',
    backgroundRepeat: 'repeat',
    backgroundSize: '100vw',
    zIndex: '-1',
  }),
  innerBox: (props) => ({
    width: '100%',
    //Los max width bloquean el ancho de la pantalla, hay que reverlo
    maxWidth: '80%',
    '@media (min-width: 1362px)': {
      maxWidth: '95%'
    },
    background: props.innerBackground || theme.palette.common.white,
    padding: props.innerPadding || '80px 0 0 0',
  }),
}));

export default Container;
