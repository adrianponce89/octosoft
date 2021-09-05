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

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: theme.spacing(4, 16),
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // color: 'black',
    background: '#1d2178',
    flexWrap: 'wrap',
    '@media (max-width: 576px)': { padding: theme.spacing(2) },
  },
  section: {
    flex: 1,
    margin: theme.spacing(4),
    minWidth: 200,
  },
  input: {
    color: '#fff',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkText: {
    color: '#fff',
    paddingTop: 20,
    fontSize: 14,
    fontFamily: 'Montserrat',
    '@media (max-width: 576px)': { paddingTop: 5 },
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
  const classes = useStyles();
  return (
    <Grid container className={classes.toolbar} justify="center">
      <Grid item xs={12} md={10} container justify="space-between">
        <Grid item xs={12} sm={4} className={classes.section}>
          <Typography className={classes.text}>
            Subscribe to our newsletter
          </Typography>
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
                className={classes.input}
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
            <Link className={classes.link} margin={2} to="/aboutus">
              <div className={classes.linkText}>About Us</div>
            </Link>
            <Link
              className={classes.link}
              margin={2}
              to="/ourservices"
            >
              <div className={classes.linkText}>Services</div>
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
        <Grid
          item
          xs={12}
          sm={2}
          justify="flex-end"
          className={classes.section}
        >
          <Typography className={classes.sectionTitle}>
            HELP
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
      </Grid>
    </Grid>
  );
};

export default FooterTop;
