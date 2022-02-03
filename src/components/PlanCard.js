import React from 'react'
import { Grid, Typography, Divider} from '@material-ui/core';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ color }) => color,
    height: 470,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 6,
    overflow: 'hidden',
    boxSizing: 'border-box',
    transition: 'border filter 0.3s linear',
    filter:
      'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1)) drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.1))',
    '&:hover': {
      filter: ({ index }) => {
        switch (index) {
          case 0:
            return `drop-shadow(6px 6px 10px rgba(255, 159, 59, 0.1)) drop-shadow(-6px -6px 10px rgba(255, 159, 59, 0.1))`;
          case 1:
            return `drop-shadow(6px 6px 10px rgba(117, 67, 219, 0.1)) drop-shadow(-6px -6px 10px rgba(117, 67, 219, 0.1))`;
          case 2:
            return `drop-shadow(6px 6px 10px rgba(55, 212, 173, 0.1)) drop-shadow(-6px -6px 10px rgba(55, 212, 173, 0.1))`;
          default:
            return 'drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1)) drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.1))';
        }
      },
      border: ({ color }) => `1px solid ${color}`,
    },
    '@media (max-width: 760px)': {
      marginBottom: 50,
    },
    '@media (max-width: 1368px)': {
      height: 450,
      marginBottom: 50,
    },
  },
  content: {
    padding: 30,
    backgroundColor: '#FFFF',
    height: 410,
    '@media (max-width: 1368px)': {
      height: 400,
    },
  },
  choose: {
    textAlign: 'center',
    color: '#FFFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 15,
    //paddingBottom: theme.spacing(2),
    transition: 'all 0.3s linear',
    '&:hover': {
      color: ({ index }) => {
        switch (index) {
          case 0:
            return '#FFC991';
          case 1:
            return '#B192EF';
          case 2:
            return '#B2ECDC';
          default:
            return '#FFFF';
        }
      },
    },
  },
  price: {
    textAlign: 'left',
    color: '#1d2178',
    fontFamily: 'Montserrat',
    fontSize: 40,
    marginRight: 10,
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
    '@media (max-width: 1368px)': {
      fontSize: 30,
    },
  },
  month: {
    textAlign: 'left',
    color: 'grey',
    fontFamily: 'Montserrat',
    fontSize: 17,
    '@media (max-width: 760px)': {
      fontSize: 16,
    },
  },
  descriptionContainer: {
    height: 220,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '@media (max-width: 1368px)': {
      width: 230,
      height: 175,
    },
    '& p': {
      fontSize: theme.spacing(4),
      color: 'grey',
      paddingTop: 3,
      '@media (max-width: 1024px)': {
        fontSize: theme.spacing(3),
        paddingTop: 1,
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
        marginBottom: 10,
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
      marginLeft: 0,
      content: '"· "',
      display: 'inline',
      fontWeight: 'bold',
    },
  },
  description: {
    textAlign: 'left',
    marginLeft: 15,
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
    color: '#231D4F',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: theme.spacing(5),
    '@media (max-width: 760px)': {
      fontSize: 25,
    },
    '@media (max-width: 1368px)': {
      fontSize: 28,
    },
  },
  link: {
    textDecoration: 'none',
    float: 'right',
  },
}));

const PlanCard = ({plan, index}) => {
    const {node:planNode} = plan 
    const classes = styles({index, color: planNode.color});
    return (
      <Grid
        item
        container
        className={classes.root}
        sm={4}
        md={4}
        lg={3}
      >
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          md={12}
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
        
          <Grid container item xs={12} alignItems="flex-start" justifyContent="center">
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
        
      </Grid>
    );
}

export default PlanCard;

