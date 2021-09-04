import React from 'react';
import { Link } from 'gatsby';

import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';

import PrimaryInput from '../PrimaryInput';

const Styles = makeStyles((theme) => ({
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    color: 'gray',
    paddingTop: 5,
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  formContainer: {
    paddingTop: 10,
  },
  IconSend: {
    fontSize: 14,
    fill: '#37add4',
  },
}));

const FooterTop = ({ handleSubmit, email, setEmail }) => {
  const classes = Styles();
  return (
    <Box className={classes.toolbar}>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography className={classes.sectionTitle}>
          OCTOSOFT
        </Typography>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Link className={classes.link} margin={2} to="/">
            <div className={classes.linkText}>Home</div>
          </Link>

          <Link className={classes.link} margin={2} to="/aboutus">
            <div className={classes.linkText}>About Us</div>
          </Link>

          <Link className={classes.link} margin={2} to="/#ourplans">
            <div className={classes.linkText}>Our Plans</div>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography className={classes.sectionTitle}>
          {'CONTACT & SUPPORT'}
        </Typography>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
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
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography className={classes.sectionTitle}>
          COMMUNITY
        </Typography>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
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
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography className={classes.sectionTitle}>
          LEGAL
        </Typography>
        <div className={classes.links}>
          <Link className={classes.link} margin={2} to="/legal">
            <div className={classes.linkText}>Terms of Service</div>
          </Link>

          <Link className={classes.link} margin={2} to="/legal">
            <div className={classes.linkText}>Terms of Use</div>
          </Link>

          <Link className={classes.link} margin={2} to="/legal">
            <div className={classes.linkText}>Privacy Policy</div>
          </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={2} className={classes.section}>
        <Typography className={classes.sectionTitle}>
          SUBSCRIBE
        </Typography>
        <div className={classes.linkText}>
          Don't miss out on our latest news
        </div>
        <div className={classes.formContainer}>
          <form
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <PrimaryInput
              id="EmailInput"
              value={email}
              name="email"
              onChange={({ target }) => setEmail(target.value)}
              label="Your Email"
              variant="filled"
              type="email"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <Send className={classes.IconSend} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </div>
      </Grid>
    </Box>
  );
};

export default FooterTop;
