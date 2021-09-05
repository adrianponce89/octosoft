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
    flexWrap: 'wrap',
    padding: theme.spacing(2, 16),
    '@media (max-width: 576px)': { padding: theme.spacing(2) },
  },
  bottomText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Montserrat',
    margin: theme.spacing(4, 0),

    '@media (max-width: 576px)': { textAlign: 'center' },
  },
  itemSocial: {
    paddingLeft: 10,
    paddingRight: 10,
    '@media (max-width: 576px)': { margin: theme.spacing(0) },
  },
  iconSocial: {
    width: 40,
    height: 40,
    marginLeft: 15,
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
  linkText: {
    color: '#fff',
    padding: theme.spacing(2, 5, 2, 0),
    fontSize: 14,
    fontFamily: 'Montserrat',
    '@media (max-width: 576px)': { textAlign: 'center' },
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
      justify="center"
      alignItems="center"
      className={classes.bottomBar}
    >
      <Grid citem xs={12} md={10} container justify="space-between">
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="flex-start"
          className={classes.section}
        >
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Link className={classes.link} margin={2} to="/legal">
              <div className={classes.linkText}>
                Terms & Conditions
              </div>
            </Link>

            <Link className={classes.link} margin={2} to="/legal">
              <div className={classes.linkText}>Privacy Policy</div>
            </Link>
          </Grid>
          <Typography className={classes.bottomText}>
            Copyright 2018-2021 Octosoft Professionals All Rights
            Reserved.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          alignContent="center"
          justify="center"
        >
          <Grid item xs={10} sm={4} container justify="center">
            <Link
              className={classes.link}
              to="https://www.facebook.com/octosoftprofessionals"
            >
              <ItemSocial>
                <FacebookIcon />
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
              to="https://www.instagram.com/octosoftprofessionals/"
            >
              <ItemSocial>
                <InstagramIcon />
              </ItemSocial>
            </Link>
            <Typography className={classes.bottomText}>
              Email: info@octosoftprofessionals.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterBottom;
