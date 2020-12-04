import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from 'gatsby';
import { darkenColor } from '../../utils';

const styles = makeStyles(() => ({
  containerPlan: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '80vw',
    maxWidth: 1024,
    background: '#ccc',
  },
  titlesContainer: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  planType: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    background: ({ color }) => color,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    minWidth: 200,
    '@media (max-width: 576px)': {
      fontSize: '4vw',
      minWidth: 'auto',
    },
  },
  planTitle: {
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
    '@media (max-width: 576px)': {
      marginRight: 0,
      fontSize: '3.5vw',
      minWidth: 'auto',
    },
    textAlign: 'center',
  },
  descriptionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: '-24px',
    background: '#ccc',
    '@media (max-width: 760px)': {
      marginBottom: 14,
    },
  },
  descriptionPlan: {
    background: '#fff',
    paddingBottom: 25,
    width: '100%',
    flex: 1,
    overflow: 'auto',
    '& p': {
      lineHeight: '1.2em',
      fontSize: 18,
      margin: 4,
    },
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      alignItems: 'flex-start',
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
  contactContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    bottom: 28,
    right: 20,
    color: '#091868',
    padding: '10px 25px',
    animation: 'moveR 1s linear infinite',
    '&:hover': {},
    '@media (max-width: 760px)': {
      bottom: 0,
    },
  },
  contactPlan: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    position: 'relative',
  },
  buttonPlan: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    margin: '15px 0',
  },
  link: {
    textDecoration: 'none',
    float: 'right',
  },
  arrow: {
    width: 40,
    height: 40,
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
          <Typography className={classes.planType}>
            {props.type}
          </Typography>
          <Typography className={classes.planTitle}>
            {props.title}
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
          direction="row"
        >
          <div className={classes.containerAmount}>
            <Typography variant="h5" className={classes.amountPlan}>
              {props.amount}
            </Typography>
          </div>
          <Link
            className={classes.link}
            encodeURIComponent
            to={`/contact?budged=${props.amount}#${props.title}`}
          >
            <div className={classes.contactContainer}>
              <Typography
                variant="h5"
                className={classes.contactPlan}
              >
                Contact Us
              </Typography>
              <DoubleArrowIcon className={classes.arrow} />
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Plans;
