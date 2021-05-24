import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BehanceIcon from '../assets/behance.svg';
import WebIcon from '@material-ui/icons/Web';
import { Grid, IconButton, Tooltip } from '@material-ui/core';

import { Link } from 'gatsby';

const style = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: 'rgb(0 0 0 / 70%)',
    color: '#fff',
    padding: 5,
    fontSize: '.9em',
    fontWeight: '600',
  },
  instagram: {
    display: ({ instagram }) => (!!instagram ? 'block' : 'none'),
  },
  facebook: {
    display: ({ facebook }) => (!!facebook ? 'block' : 'none'),
  },
  twitter: {
    display: ({ twitter }) => (!!twitter ? 'block' : 'none'),
  },
  github: {
    display: ({ github }) => (!!github ? 'block' : 'none'),
  },
  linkedin: {
    display: ({ linkedin }) => (!!linkedin ? 'block' : 'none'),
  },
  behance: {
    display: ({ behance }) => (!!behance ? 'block' : 'none'),
  },
  web: {
    display: ({ web }) => (!!web ? 'block' : 'none'),
  },
  iconBehance: {
    width: '1em',
    height: '1em',
    fill: '#26A1FF',
  },
  icon: { fill: '#26A1FF', fontSize: '3em' },
}));

const socialNetwork = ({ socialMedia }) => {
  const {
    instagram,
    facebook,
    twitter,
    github,
    linkedin,
    behance,
    web,
  } = socialMedia;
  const classes = style({
    instagram,
    facebook,
    twitter,
    github,
    linkedin,
    behance,
    web,
  });
  return (
    <Grid item xs={8} container direction="row" alignItems="center">
      <Grid item xs={1} className={classes.instagram}>
        <Link to={instagram}>
          <Tooltip title="Instagram" classes={classes}>
            <InstagramIcon
              fontSize="large"
              className={classes.icon}
            />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item xs={1} className={classes.facebook}>
        <Link to={facebook}>
          <Tooltip title="Facebook" classes={classes}>
            <FacebookIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item xs={1} className={classes.twitter}>
        <Link to={twitter}>
          <Tooltip title="Twitter" classes={classes}>
            <TwitterIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item xs={1} className={classes.github}>
        <Link to={github}>
          <Tooltip title="GitHub" classes={classes}>
            <GitHubIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item xs={1} className={classes.behance}>
        <Link to={behance}>
          <Tooltip title="Behance" classes={classes}>
            <BehanceIcon className={classes.iconBehance} />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item xs={1} className={classes.linkedin}>
        <Link to={linkedin}>
          <Tooltip title="Linked In" classes={classes}>
            <LinkedInIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Link>
      </Grid>
      <Grid item xs={1} className={classes.web}>
        <Link to={web}>
          <Tooltip title="Web" classes={classes}>
            <WebIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Link>
      </Grid>
    </Grid>
  );
};

export default socialNetwork;
