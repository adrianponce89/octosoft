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
    width: '80vw',
  },
  titlesContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  planTitle: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    background: ({ color }) => color,
    padding: 10,
    textAlign: 'center',
    minWidth: 200,
  },
  planType: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    color: ({ color }) => color,
    borderBottomWidth: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: ({ color }) => color,
    padding: 5,
    alignSelf: 'flex-end',
    marginRight: 40,
    minWidth: 200,
    textAlign: 'center',
  },
  descriptionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: '-24px',
    background: '#ccc',
  },
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
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: 320,
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      paddingTop: 10,
      '@media (max-width: 1024px)': {
        flexWrap: 'nowrap',
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
    top: '-28px',
  },
  amountPlan: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    backgroundColor: ({ color }) => color,
    color: 'white',
    padding: '10px 25px',
    position: 'relative',
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
    <div className={classes.containerPlan}>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.descriptionContainer}
      >
        <div className={classes.titlesContainer}>
          <Typography className={classes.planTitle}>
            {props.title}
          </Typography>
          <Typography className={classes.planType}>
            {props.type}
          </Typography>
        </div>
        <div className={classes.descriptionPlan}>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(props.description.json),
            }}
          />
        </div>
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
    </div>
  );
};

export default Plans;
