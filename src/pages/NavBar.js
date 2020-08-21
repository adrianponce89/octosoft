import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { ReactComponent as OctoLogo } from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    background: (props) => props.background || '#fff',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
  },
  link: {
    padding: 20,
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  textLogo: {
    width: 40,
    fontSize: 20,
    fontWeight: 800,
    opacity: (props) => props.opacity,
  },
  logo: {
    width: 46,
    height: 46,
    marginRight: 10,
    opacity: (props) => props.opacity,
    fill: '#33adff',
  },
  linkText: {
    fontWeight: 'bold',
    color: (props) => props.color || 'black',
  },
  appbar: {
    height: 80,
    background: 'none',
    boxShadow: (props) => props.boxShadow || '2',
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
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <RouterLink to={'/'} className={classes.link}>
              <div className={classes.links}>
                <div className={classes.logo}>
                  <OctoLogo className={classes.logo} />
                </div>
                <div className={classes.textLogo}>
                  {'Octosoft Professionals'}
                </div>
              </div>
            </RouterLink>
            <Box className={classes.links}>
              <RouterLink className={classes.link} margin={2} to="/">
                <div className={classes.linkText}>{'Home'}</div>
              </RouterLink>
              <RouterLink className={classes.link} margin={2} to="/">
                <div className={classes.linkText}>{'About Us'}</div>
              </RouterLink>
              <RouterLink className={classes.link} margin={2} to="/">
                <div className={classes.linkText}>{'Blogs'}</div>
              </RouterLink>
              <RouterLink className={classes.link} margin={2} to="/">
                <div className={classes.linkText}>
                  {'Our Services'}
                </div>
              </RouterLink>
              <RouterLink
                className={classes.link}
                margin={2}
                to="testimonies"
              >
                <div className={classes.linkText}>
                  {'Borderless Identities'}
                </div>
              </RouterLink>
              <RouterLink
                className={classes.link}
                margin={2}
                to="/clientsupport"
              >
                <div className={classes.linkText}>
                  {'Client Support'}
                </div>
              </RouterLink>
              <RouterLink
                className={classes.link}
                margin={2}
                to="contact"
              >
                <div className={classes.linkText}>{'Contact Us'}</div>
              </RouterLink>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
