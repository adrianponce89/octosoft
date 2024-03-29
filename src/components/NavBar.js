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
  Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import HorizontalLogo from '../assets/horizontalLogo.svg';
import Contact from './Contact';
import PopUpContact from './PopupContact'; 

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({});
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const menuList = [
  { title: 'HOME', link: '/' },
  {
    title: 'ABOUT US',
    children: [
      { title: 'About Octosoft', link: '/aboutus' },
      { title: 'Our Team', link: '/ourteam' },
      { title: 'Our Brand', link: '/brand' },
    ],
  },
  {
    title: 'WHAT WE DO',
    children: [
      { title: 'Our Services', link: '/ourservices' },
      { title: 'Portfolio', link: '/portfolio' },
    ],
  },
  {
    title: 'COMMUNITY',
    children: [
      { title: 'News', link: '/underConstruction/' },
      { title: 'Events', link: '/underConstruction/' },
      { title: 'Blog', link: '/underConstruction/' },
      {
        title: 'Borderless Identities',
        link: '/underConstruction/',
      },
    ],
  },
  { title: 'CONTACT US', children: [], linkContact: '/contact' },
];
const NavLinks = (props) => {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuSelected, setMenuSelected] = React.useState(null);
  const [showPopUp, setShowPopUp] = React.useState(false);
  const handleClick = (event, title) => {
    setAnchorEl(event.currentTarget);
    setMenuSelected(title);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {menuList.map((menu) =>
        menu.link ? (
          <Link
            className={classes.link}
            margin={2}
            to={'/'}
            to={menu.link}
          >
            <div className={classes.linkText}>{menu.title}</div>
          </Link>
        ) : menu.children ? (
          <>
            {props.onDesktop !== true ? (
              menu.title !== 'CONTACT US' ? (
                <a
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(e) => handleClick(e, menu.title)}
                  className={classes.link}
                  margin={2}
                >
                  <div className={classes.chevron}>{menu.title}</div>
                </a>
              ) : null
            ) : (
              <a
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(e) => handleClick(e, menu.title)}
                className={classes.link}
                margin={2}
              >
                <div className={classes.chevron}>{menu.title}</div>
              </a>
            )}
            {/* {(menu.title !== 'CONTACT US') &
            (props.onDesktop !== true) ? (
              <a
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(e) => handleClick(e, menu.title)}
                className={classes.link}
                margin={2}
              >
                <div className={classes.chevron}>{menu.title}</div>
              </a>
            ) : null} */}

            {/* {props.onDesktop === false &&
            menu.title === 'CONTACT US' ? (
              <Link
                className={classes.link}
                margin={2}
                to={menu.linkContact}
              >
                <div className={classes.linkText}>{menu.title}</div>
              </Link>
            ) : null} */}
            {menuSelected === menu.title ? (
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                style={{ marginTop: '4px' }}
              >
                {menu.title === 'CONTACT US' ? (
                  <Contact />
                ) : (
                  menu.children.map((child) => (
                    <MenuItem
                      component={Link}
                      to={'/'}
                      to={child.link}
                      onClick={handleClose}
                    >
                      <Typography className={classes.subItem}>
                        {child.title}
                      </Typography>
                    </MenuItem>
                  ))
                )}
              </Menu>
            ) : null}
          </>
        ) : null,
      )}
      <>
        {props.onDesktop !== true ? (
          <a
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => setShowPopUp(!showPopUp)}
            className={classes.link}
            margin={2}
          >
            <div className={classes.linkText}>{'CONTACT US'}</div>
          </a>
        ) : null}
      </>

      <Link
        className={classes.linkButton}
        to="https://calendly.com/xoakin-r/interview"
      >
        <Button className={classes.button}>
          <div className={classes.linkText}>{'BOOK A ZOOM CALL'}</div>
        </Button>
      </Link>
      <>
        {showPopUp ? (
          <PopUpContact handleClose={setShowPopUp} />
        ) : null}
      </>
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
            <Link to={'/'} className={classes.linkLogo}>
              <div className={classes.links}>
                  <HorizontalLogo className={classes.logo} />
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
              <Box className={classes.links}>
                <NavLinks
                  transparent={transparent}
                  onDesktop={true}
                />
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
          <NavLinks
            color="black"
            textShadow="none"
            onDesktop={false}
          />
        </SwipeableDrawer>
      </Hidden>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5) + '!important',
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
  subItem: {
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  link: {
    margin: '15px 25px',
    padding: '0px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkLogo: {
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
    width: 135,
    //height: 46,
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
  chevron: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'black',
    fontFamily: 'Montserrat',
    textShadow: ({ transparent }) =>
      !!transparent ? '0 0 4px #FFF' : 'none',
    '&::after': {
      content: '" ⌄"',
      display: 'inline',
      position: 'relative',
      top: '-0.25em',
      fontSize: '120%',
    },
  },
  appbar: {
    background: 'none',
    paddingRight: '0px !important',
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
    padding: '6px 30px',
  },
  menu: {
    background: 'pink',
    width: '100vw',
  },
}));
export default NavBar;