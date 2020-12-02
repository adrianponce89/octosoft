import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { submitForm } from '../utils';
import PrimaryInput from './PrimaryInput';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    boxShadow: 'inset 0 2px 3px #ccc',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'black',
    background: '#fff',
    flexWrap: 'wrap',
  },
  section: {
    flex: 1,
    margin: theme.spacing(4),
    minWidth: 200,
  },
  sectionTitle: {
    color: '#37add4',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    color: 'gray',
    paddingTop: 5,
    fontSize: '14px',
    color: 'gray',
    fontFamily: 'Montserrat',
  },
  formContainer: {
    paddingTop: 10,
  },
  bottomBar: {
    background: '#1d2178',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(8),
  },
  bottomText: {
    fontSize: '14px',
    color: '#fff',
    fontFamily: 'Montserrat',
  },
  sectionSocial: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  itemSocial: {
    paddingLeft: 10,
    paddingRight: 10,
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
}));

const ItemSocial = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemSocial}>
      <div className={classes.iconSocial}>{children}</div>
    </div>
  );
};

const Footer = (props) => {
  const [email, setEmail] = useState('');
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm('subscribe', {
      email,
    })
      .then(() =>
        alert('Your email was received. We will keep you updated.'),
      )
      .catch((error) => alert(error));
    setEmail('');
  };

  return (
    <div className={classes.container}>
      <Box className={classes.toolbar}>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            OCTOSOFT
          </Typography>
          <div className={classes.links}>
            <Link className={classes.link} margin={2} to="/">
              <div className={classes.linkText}>Home</div>
            </Link>

            <Link className={classes.link} margin={2} to="/aboutus">
              <div className={classes.linkText}>About Us</div>
            </Link>

            <Link className={classes.link} margin={2} to="/#ourplans">
              <div className={classes.linkText}>Our Plans</div>
            </Link>
          </div>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            {'CONTACT & SUPPORT'}
          </Typography>
          <div className={classes.links}>
            <Link className={classes.link} margin={2} to="/contact">
              <div className={classes.linkText}>Contact Us</div>
            </Link>
            <Link
              className={classes.link}
              margin={2}
              to="/clientsupport"
            >
              <div className={classes.linkText}>Client Support</div>
            </Link>
          </div>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            COMMUNITY
          </Typography>
          <div className={classes.links}>
            <Link className={classes.link} margin={2} to="/news">
              <div className={classes.linkText}>News</div>
            </Link>

            <Link
              className={classes.link}
              margin={2}
              to="/borderlessIdentities"
            >
              <div className={classes.linkText}>
                Borderless Identities
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            LEGAL
          </Typography>
          <div className={classes.links}>
            <Link
              className={classes.link}
              margin={2}
              to="/termsofservice"
            >
              <div className={classes.linkText}>Terms of Service</div>
            </Link>

            <Link
              className={classes.link}
              margin={2}
              to="/termsofuse"
            >
              <div className={classes.linkText}>Terms of use</div>
            </Link>

            <Link
              className={classes.link}
              margin={2}
              to="/privacypolicy"
            >
              <div className={classes.linkText}>Privacy policy</div>
            </Link>
          </div>
        </div>
        <div className={classes.section}>
          <Typography className={classes.sectionTitle}>
            SUBSCRIBE
          </Typography>
          <div className={classes.linkText}>
            Don't miss out on our latest news
          </div>
          <div className={classes.formContainer}>
            <form
              name="subscribe"
              onSubmit={handleSubmit}
              data-netlify="true"
            >
              <input
                type="hidden"
                name="form-name"
                value="subscribe"
              />
              <PrimaryInput
                id="EmailInput"
                value={email}
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                label="Your Email"
                variant="filled"
                type="email"
                required
              />
            </form>
          </div>
        </div>
      </Box>
      <div className={classes.bottomBar}>
        <div className={classes.section}>
          <Typography className={classes.bottomText}>
            Copyright 2020 Octosoft Professionals All Rights Reserved.
          </Typography>
        </div>
        <div className={classes.sectionSocial}>
          <Typography className={classes.bottomText}>
            Email: info@octosoftprofessionals.com
          </Typography>
        </div>
        <div className={classes.sectionSocial}>
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
            to="https://github.com/octosoftprofessionals"
          >
            <ItemSocial>
              <GitHubIcon />
            </ItemSocial>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
