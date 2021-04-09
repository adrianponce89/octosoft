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
    fill: 'rgba(0, 0, 0, 0.54)',
  },
}));

const socialNetwork = ({
  instagram,
  facebook,
  twitter,
  github,
  linkedin,
  behance,
  web,
}) => {
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
    <>
      <Grid
        container
        item
        xs={12}
        sm={8}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={1} className={classes.instagram}>
          <Link to={instagram}>
            <Tooltip title="Instagram" popper classes={classes}>
              <IconButton>
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.facebook}>
          <Link to={facebook}>
            <Tooltip title="Facebook" classes={classes}>
              <IconButton>
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.twitter}>
          <Link to={twitter}>
            <Tooltip title="Twitter" classes={classes}>
              <IconButton>
                <TwitterIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.github}>
          <Link to={github}>
            <Tooltip title="GitHub" classes={classes}>
              <IconButton>
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.behance}>
          <Link to={behance}>
            <Tooltip title="Behance" classes={classes}>
              <IconButton>
                <BehanceIcon className={classes.iconBehance} />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.linkedin}>
          <Link to={linkedin}>
            <Tooltip title="Linked In" classes={classes}>
              <IconButton>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.web}>
          <Link to={web}>
            <Tooltip title="Web" classes={classes}>
              <IconButton>
                <WebIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default socialNetwork;
