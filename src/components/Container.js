import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  root: (props) => ({
    maxWidth: 1032,
    background: props.background || 'none',
    width: '64vw',
    height: '100vh',
    margin: 'auto',
    paddingTop: 39,
    paddingLeft: 22,
    paddingRight: 22,
    display: 'flex',
    flexDirection: 'column',
  }),
});

const Container = (props) => {
  const classes = styles(props);
  return <div className={classes.root}>{props.children}</div>;
};

export default Container;
