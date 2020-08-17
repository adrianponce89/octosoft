import React from 'react';
import { Header } from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NavBar from './NavBar';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  backgroundBox: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    padding: '10vh 5vw',
    flexDirection: 'column',
  },
  container: {
    padding: '5vh 5vw',
  },
  title: {
    fontSize: '200%',
    fontWeight: 'bold',
  },
}));

export const Template = ({ headerTitle, innerTitle, children }) => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div
        className={classes.backgroundBox}
        style={{ minHeight: '100vh' }}
      >
        <>
          <Header headerTitle={headerTitle} />
          <Paper className={classes.container}>
            <div className={classes.title}>{innerTitle}</div>
            {children}
          </Paper>
        </>
      </div>
    </>
  );
};
