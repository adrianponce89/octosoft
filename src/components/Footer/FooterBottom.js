import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import BehanceIcon from '../../assets/behance.svg';

const useStyles = makeStyles((theme) => ({
  section: {
    flex: 1,
    margin: theme.spacing(4),
    minWidth: 200,
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  bottomBar: {
    background: '#1d2178',
    color: '#fff',
    padding: theme.spacing(8),
  },
  bottomText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Montserrat',
    marginBottom: theme.spacing(4),
    '@media (max-width: 576px)': { textAlign: 'center' },
  },
  itemSocial: {
    paddingLeft: 10,
    paddingRight: 10,
    '@media (max-width: 576px)': { margin: theme.spacing(1) },
  },
  iconSocial: {
    width: 40,
    height: 40,
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
    background: 'white',
    color: '#1d2178',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      transition: '0.2s',
    },
    '&:hover svg': {
      width: 30,
      height: 30,
    },
  },
  iconBehance: {
    width: 25,
    height: 25,
    fill: '#1d2178',
  },
}));

const ItemSocial = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemSocial}>
      <div className={classes.iconSocial}>{children}</div>
    </div>
  );
};
const FooterBottom = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      className={classes.bottomBar}
    >
      <Grid
        item
        xs={12}
        sm={4}
        container
        justify="center"
        className={classes.section}
      >
        <Typography className={classes.bottomText}>
          Copyright 2018-2021 Octosoft Professionals All Rights
          Reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} container justify="center">
        <Typography className={classes.bottomText}>
          Email: info@octosoftprofessionals.com
        </Typography>
      </Grid>
      <Grid item xs={9} sm={4} container justify="center">
        <Link
          className={classes.link}
          to="https://www.facebook.com/octosoftprofessionals"
        >
          <ItemSocial>
            <FacebookIcon />
          </ItemSocial>
        </Link>
        <Link className={classes.link} to="/">
          <ItemSocial>
            <YouTubeIcon />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://www.instagram.com/octosoftprofessionals/"
        >
          <ItemSocial>
            <InstagramIcon />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://twitter.com/octosoftprofessionals"
        >
          <ItemSocial>
            <TwitterIcon />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://www.behance.net/Octosoftprofessional"
        >
          <ItemSocial>
            <BehanceIcon className={classes.iconBehance} />
          </ItemSocial>
        </Link>
        <Link
          className={classes.link}
          to="https://github.com/octosoftprofessionals"
        >
          <ItemSocial>
            <GitHubIcon />
          </ItemSocial>
        </Link>
      </Grid>
    </Grid>
  );
};

export default FooterBottom;
