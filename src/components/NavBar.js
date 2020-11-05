import React, { useState } from 'react';
import { Link } from 'gatsby';
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
import OctoLogo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    background: ({ transparent }) =>
      !!transparent ? 'transparent' : '#fff',
    transition: '0.2s',
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
    opacity: ({ transparent }) => (!!transparent ? '0' : '1'),
  },
  logo: {
    width: 46,
    height: 46,
    marginRight: 10,
    opacity: ({ transparent }) => (!!transparent ? '0' : '1'),
    fill: '#33adff',
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: ({ transparent }) => (!!transparent ? '#fff' : 'black'),
    textShadow: ({ transparent }) =>
      !!transparent ? '0 0 6px black' : 'none',
  },
  appbar: {
    height: 80,
    background: 'none',
    boxShadow: ({ transparent }) =>
      !!transparent ? 'none' : '0 0 4px gray',
  },
  iconDrawer: {
    color: ({ transparent }) => (!!transparent ? '#fff' : 'black'),
    textShadow: ({ transparent }) =>
      !!transparent ? '0 0 6px black' : 'none',
  },
}));

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({});
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const NavLinks = (props) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Link className={classes.link} margin={2} to="/">
        <div className={classes.linkText}>{'Home'}</div>
      </Link>
      <Link className={classes.link} margin={2} to="/aboutus">
        <div className={classes.linkText}>{'About Us'}</div>
      </Link>
      <Link className={classes.link} margin={2} to="/news">
        <div className={classes.linkText}>{'News'}</div>
      </Link>
      <Link className={classes.link} margin={2} to="/ourservices">
        <div className={classes.linkText}>{'Our Services'}</div>
      </Link>
      <Link
        className={classes.link}
        margin={2}
        to="/borderlessIdentities"
      >
        <div className={classes.linkText}>
          {'Borderless Identities'}
        </div>
      </Link>
      <Link className={classes.link} margin={2} to="/clientsupport">
        <div className={classes.linkText}>{'Client Support'}</div>
      </Link>
      <Link className={classes.link} margin={2} to="/contact">
        <div className={classes.linkText}>{'Contact Us'}</div>
      </Link>
    </React.Fragment>
  );
};

const NavBar = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });
  const transparent = !trigger && props.home;

  const classes = useStyles({ transparent });
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Link to={'/'} className={classes.link}>
              <div className={classes.links}>
                <div className={classes.logo}>
                  <OctoLogo className={classes.logo} />
                </div>
                <div className={classes.textLogo}>
                  {'Octosoft Professionals'}
                </div>
              </div>
            </Link>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setShowDrawer(true)}
                edge="start"
                className={classes.iconDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Box className={classes.links}>
                <NavLinks transparent={transparent} />
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
          <NavLinks color="black" textShadow="none" />
        </SwipeableDrawer>
      </Hidden>
    </React.Fragment>
  );
};

export default NavBar;
