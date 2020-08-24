import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
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
    fontSize: '14px',
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

const NavLinks = (props) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <RouterLink className={classes.link} margin={2} to="/">
        <div className={classes.linkText}>{'Home'}</div>
      </RouterLink>
      <RouterLink className={classes.link} margin={2} to="/aboutus">
        <div className={classes.linkText}>{'About Us'}</div>
      </RouterLink>
      <RouterLink className={classes.link} margin={2} to="/">
        <div className={classes.linkText}>{'Blogs'}</div>
      </RouterLink>
      <RouterLink
        className={classes.link}
        margin={2}
        to="/ourservices"
      >
        <div className={classes.linkText}>{'Our Services'}</div>
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
        <div className={classes.linkText}>{'Client Support'}</div>
      </RouterLink>
      <RouterLink className={classes.link} margin={2} to="contact">
        <div className={classes.linkText}>{'Contact Us'}</div>
      </RouterLink>
    </React.Fragment>
  );
};

export default function NavBar(props) {
  const classes = useStyles(props);
  const [showDrawer, setShowDrawer] = useState(false);
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
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setShowDrawer(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Box className={classes.links}>
                <NavLinks {...props} />
              </Box>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Hidden mdUp>
        <SwipeableDrawer
          anchor={'right'}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
        >
          <NavLinks {...props} />
        </SwipeableDrawer>
      </Hidden>
    </React.Fragment>
  );
}
