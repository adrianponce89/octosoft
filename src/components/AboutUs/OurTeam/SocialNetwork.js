import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import BehanceIcon from '../../../assets/behance.svg';
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Grid, Tooltip } from '@material-ui/core';

import { Link } from 'gatsby';

const style = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: 'rgb(0 0 0 / 70%)',
    color: '#fff',
    padding: 5,
    fontSize: '.9em',
    fontWeight: '600',
  },
  iconBehance: {
    width: '3em',
    height: '3em',
    fill: '#c0bac6',
    '@media (max-width: 565px)': {
      width: '2em',
      height: '2em',
    },
  },
  icon: {
    fill: '#c0bac6',
    fontSize: '3em',
    '@media (max-width: 565px)': {
      fontSize: '2em',
    },
  },
  link: {
    padding: theme.spacing(1, 2),
    alignItems: 'center',
  },
}));

const socialNetwork = ({ socialMedia, ...props }) => {
  const {
    instagram,
    facebook,
    twitter,
    github,
    linkedin,
    behance,
    web,
    youtube,
  } = socialMedia;

  const classes = style();

  return (
    <Grid {...props}>
      <Link
        to={instagram}
        className={classes.link}
        style={{ display: !!instagram ? 'flex' : 'none' }}
        key={'instagram'}
      >
        <Grid item xs={1} className={classes.instagram}>
          <Tooltip title="Instagram" classes={classes}>
            <InstagramIcon
              fontSize="large"
              className={classes.icon}
            />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={facebook}
        className={classes.link}
        style={{
          display: !!facebook ? 'block' : 'none',
        }}
        key={'facebook'}
      >
        <Grid item xs={1} className={classes.facebook}>
          <Tooltip title="Facebook" classes={classes}>
            <FacebookIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={twitter}
        className={classes.link}
        style={{
          display: !!twitter ? 'block' : 'none',
        }}
        key={'twitter'}
      >
        <Grid item xs={1} className={classes.twitter}>
          <Tooltip title="Twitter" classes={classes}>
            <TwitterIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={github}
        className={classes.link}
        style={{
          display: !!github ? 'block' : 'none',
        }}
        key={'github'}
      >
        <Grid item xs={1} className={classes.github}>
          <Tooltip title="GitHub" classes={classes}>
            <GitHubIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={behance}
        className={classes.link}
        style={{
          display: !!behance ? 'block' : 'none',
        }}
        key={'behance'}
      >
        <Grid item xs={1} className={classes.behance}>
          <Tooltip title="Behance" classes={classes}>
            <BehanceIcon className={classes.iconBehance} />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={linkedin}
        className={classes.link}
        style={{
          display: !!linkedin ? 'block' : 'none',
        }}
        key={'linkedin'}
      >
        <Grid item xs={1} className={classes.linkedin}>
          <Tooltip title="Linkedin" classes={classes}>
            <LinkedInIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={web}
        className={classes.link}
        style={{
          display: !!web ? 'block' : 'none',
        }}
        key={'web'}
      >
        <Grid item xs={1} className={classes.web}>
          <Tooltip title="Web" classes={classes}>
            <WebIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Grid>
      </Link>
      <Link
        to={youtube}
        className={classes.link}
        style={{
          display: !!youtube ? 'block' : 'none',
        }}
        key={'youtube'}
      >
        <Grid item xs={1} className={classes.youtube}>
          <Tooltip title="YouTube" classes={classes}>
            <YouTubeIcon fontSize="large" className={classes.icon} />
          </Tooltip>
        </Grid>
      </Link>
    </Grid>
  );
};

export default socialNetwork;
