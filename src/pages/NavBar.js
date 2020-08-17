import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
  },
  link: {
    padding: 20,
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <RouterLink to={'/'} className={classes.link}>
              <Typography>{'Octosoft'}</Typography>
            </RouterLink>
            <Box className={classes.links}>
              <RouterLink
                className={classes.link}
                margin={2}
                to={'/testimonies'}
              >
                <Typography>{'Testimonies'}</Typography>
              </RouterLink>
              <RouterLink
                className={classes.link}
                margin={2}
                to={'/contact'}
              >
                <Typography>{'Contact'}</Typography>
              </RouterLink>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
