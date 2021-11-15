import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  useScrollTrigger,
  Slide,
  Hidden,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
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
    padding: 15,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkButton: {
    padding: 6,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  textLogoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 20,
    margin: 0,
    fontWeight: 800,
    fontFamily: 'Montserrat',
    opacity: ({ transparent }) => (!!transparent ? '0' : '1'),
  },
  textLogoSub: {
    fontSize: 13,
    margin: 0,
    fontWeight: 800,
    fontFamily: 'Montserrat',
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
    color: 'black',
    fontFamily: 'Montserrat',
    textShadow: ({ transparent }) =>
      !!transparent ? '0 0 4px #FFF' : 'none',
  },
  appbar: {
    background: 'none',
    boxShadow: ({ transparent }) =>
      !!transparent ? 'none' : '0 0 4px gray',
  },
  iconDrawer: {
    color: 'black',
    textShadow: ({ transparent }) =>
      !!transparent ? '0 0 6px black' : 'none',
  },
  button: {
    backgroundColor: '#33adff',
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link className={classes.link} margin={2} to="/">
        <div className={classes.linkText}>{'HOME'}</div>
      </Link>

      <Hidden mdDown>|</Hidden>

      <Link className={classes.link} margin={2} to="/aboutus">
        <div className={classes.linkText}>{'ABOUT US'}</div>
      </Link>

      <Hidden mdDown>|</Hidden>

      <Link className={classes.link} margin={2} to="/ourservices">
        <div className={classes.linkText}>{'OUR SERVICES'}</div>
      </Link>

      <Hidden mdDown>|</Hidden>
      <a
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.link}
        margin={2}
      >
        <div className={classes.linkText}>{'COMMUNITY'}</div>
      </a>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/news" onClick={handleClose}>
          {'NEWS'}
        </MenuItem>
        <MenuItem
          component={Link}
          to="/borderlessIdentities"
          onClick={handleClose}
        >
          {'BORDERLESS IDENTITIES'}
        </MenuItem>
      </Menu>

      <Hidden mdDown>|</Hidden>

      <Link className={classes.link} margin={2} to="/clientsupport">
        <div className={classes.linkText}>{'CLIENT SUPPORT'}</div>
      </Link>

      <Hidden mdDown>|</Hidden>

      <Link className={classes.link} margin={2} to="/contact">
        <div className={classes.linkText}>{'CONTACT US'}</div>
      </Link>

      <Hidden mdDown>|</Hidden>

      <Link
        className={classes.linkButton}
        to="https://calendly.com/octosoftprofessionals/no-strings-consultation?month=2021-03"
      >
        <Button className={classes.button}>
          <div className={classes.linkText}>{'BOOK A ZOOM CALL'}</div>
        </Button>
      </Link>
    </>
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
                <div className={classes.textLogoContainer}>
                  <p className={classes.textLogo}>{'Octosoft'}</p>
                  <p className={classes.textLogoSub}>
                    {'Professionals'}
                  </p>
                </div>
              </div>
            </Link>
            <Hidden lgUp>
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
            <Hidden mdDown>
              <Box
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className={classes.links}
              >
                <NavLinks transparent={transparent} />
              </Box>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Hidden lgUp>
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
