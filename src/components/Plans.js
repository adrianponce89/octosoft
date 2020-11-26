import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Link } from 'gatsby';

const styles = makeStyles(() => ({
  containerPlan: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  descriptionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    background: '#ccc',
    borderBottom: '12px solid #1d2178',
  },
  titlePlan: { fontFamily: 'Montserrat', marginTop: '0.5em' },
  descriptionPlan: {
    background: '#fff',
    paddingBottom: 25,

    width: '100%',
    flex: 1,
    overflow: 'auto',
    '& p': {
      lineHeight: '1em',
      margin: 4,
    },
    '& li:nth-child(odd)': {
      background: '#ddd',
    },
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: 320,
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      paddingTop: 10,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
        // height: '100%',
        minHeight: 400,
      },
    },
    '@media (max-width: 760px)': {
      '& ul::after': {
        content: '" "',
        display: 'block',
        minHeight: 30,
      },
    },
    '& li': {
      paddingLeft: 10,
      minWidth: '45%',
    },
    '& li p::before': {
      content: '"· "',
      display: 'inline',
      fontWeight: 'bold',
    },
  },
  containerAmount: {
    position: 'relative',
    display: 'flex',
  },
  amountPlan: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    backgroundColor: '#1d2178',
    color: 'white',
    padding: '10px 25px',
    position: 'relative',
    top: -32,
    display: (props) => (props.amount !== null ? 'block' : 'none'),
  },
  buttonPlan: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    margin: '15px 0',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Plans = (props) => {
  const classes = styles(props);
  return (
    <Grid item xs={12} style={{ padding: 0 }}>
      <Grid item className={classes.containerPlan}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.descriptionContainer}
        >
          <div className={classes.descriptionPlan}>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(props.description.json),
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          direction="column"
        >
          <Link
            className={classes.link}
            encodeURIComponent
            to={`/contact#${props.title}`}
          >
            <div className={classes.containerAmount}>
              <Typography variant="h5" className={classes.amountPlan}>
                {props.amount}
              </Typography>
            </div>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Plans;
