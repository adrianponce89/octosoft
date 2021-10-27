import React from 'react'
import { Grid, Typography, Divider} from '@material-ui/core';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ index }) => {
      switch (index) {
        case 0:
          return '#F34604';
          break;
        case 1:
          return '#1d2178';
          break;
        case 2:
          return '#FF9929';
          break;
      }
    },
    width: 350,
    height: 500,
    '@media (max-width: 760px)': {
      marginBottom: 50,
    },
  },
  content: {
    padding: 20,
    marginLeft: -20,
    marginTop: -20,
    backgroundColor: '#FFFF',
    height: 450,
  },
  choose: {
    textAlign: 'left',
    marginLeft: 15,
    color: '#FFFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 22,
  },
  price: {
    textAlign: 'left',
    color: '#1d2178',
    fontFamily: 'Montserrat',
    fontSize: 40,
    marginRight: 20,
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
  },
  month: {
    textAlign: 'left',
    color: 'grey',
    fontFamily: 'Montserrat',
    fontSize: 24,
    '@media (max-width: 760px)': {
      fontSize: 16,
    },
  },
  descriptionContainer: {
    height: 220,
    width: 300,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 40,
    '& p': {
      lineHeight: '1.2em',
      fontSize: '1.5vmin',
      color: 'grey',
      margin: 4,
      '@media (max-width: 1024px)': {
        fontSize: '2.5vmin',
      },
    },
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 1024px)': {
        flexWrap: 'nowrap',
        // minHeight: 400,
      },
      '@media (max-width: 760px)': {
        marginBottom: 14,
        '& li:last-child::after': {
          content: '" "',
          display: 'block',
          minHeight: 30,
        },
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
      width: '100%',
      '@media (max-width: 760px)': {
        width: '100%',
      },
    },
    '& li p::before': {
      marginLeft: 15,
      content: '"· "',
      display: 'inline',
      fontWeight: 'bold',
    },
  },
  description: {
    textAlign: 'left',
    color: 'grey',
    fontFamily: 'Montserrat',
  },
  descriptionTitle: {
    height: 60,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  type: {
    textAlign: 'left',
    color: '#1d2178',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 30,
    '@media (max-width: 760px)': {
      fontSize: 25,
    },
  },
  link: {
    textDecoration: 'none',
    float: 'right',
  },
}));

const PlanCard = ({plan, index}) => {
    const {node:planNode} = plan 
    const classes = styles({index});
    return (
      <Grid item container className={classes.root}>
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          md={11}
          className={classes.content}
        >
          <div className={classes.descriptionTitle}>
            <Typography className={classes.price}>
              {`${planNode.amount}`}
            </Typography>
            <Typography className={classes.month}>/month</Typography>
          </div>
          <Typography className={classes.type}>
            {planNode.type}
          </Typography>
          <Divider />
          {/* <div className={classes.descriptionContainer}>
            {plan.content.map((text) => {
              return (
                <Typography className={classes.description}>
                  {text}
                </Typography>
              );
            })}
          </div> */}
          <div className={classes.descriptionContainer}>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  planNode.description.json,
                ),
              }}
            />
          </div>
        </Grid>
        <Link
          className={classes.link}
          encodeURIComponent
          to={`/contact?budged=${planNode.amount}#${planNode.title}`}
        >
          <Typography className={classes.choose}>
            CHOOSE PLAN
          </Typography>
        </Link>
      </Grid>
    );
}

export default PlanCard;
