import React from 'react';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Link } from 'gatsby';

const styles = makeStyles((theme) => ({
  relativContainer: { position: 'relative' },
  sizeContainer: {
    paddingBottom: '210%',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  containerPlan: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
  },
  backgroundImagePlan: {
    backgroundImage: (props) => props.imagePlan,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '60%',
  },
  descriptionContainer: { height: '-webkit-fill-available' },
  titlePlan: { fontFamily: 'Lato', marginTop: '0.5em' },
  descriptionPlan: {
    width: '85%',
    flex: '1',
    overflow: 'auto',
    '& p': {
      lineHeight: '1em',
      margin: 4,
    },
  },
  amountPlan: {
    fontFamily: 'Lato',
    backgroundColor: '#ececec',
    padding: '10px 25px',
    borderRadius: '45.705px',
    display: (props) => (props.amount !== null ? 'block' : 'none'),
  },
  buttonPlan: { fontSize: 20, fontFamily: 'Lato', margin: '15px 0' },
  link: {
    textDecoration: 'none',
  },
}));

const Plans = (props) => {
  const classes = styles(props);
  return (
    <Grid item xs={10} sm={6} md={4}>
      <Grid item className={classes.relativContainer}>
        <dir className={classes.sizeContainer} />
        <Paper square className={classes.containerPlan} elevation={2}>
          <div className={classes.backgroundImagePlan}></div>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
            className={classes.descriptionContainer}
            xs={12}
          >
            <Grid
              item
              container
              direction="column"
              alignItems="center"
            >
              <Typography variant="h4" className={classes.titlePlan}>
                {props.title}
              </Typography>

              <Grid item className={classes.descriptionPlan}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(
                      props.description.json,
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container justify="center">
              <Typography variant="h5" className={classes.amountPlan}>
                {props.amount}
              </Typography>
              <Link
                className={classes.link}
                encodeURIComponent
                to={`/contact#${props.title}`}
              >
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  size="large"
                  className={classes.buttonPlan}
                >
                  {props.link !== null ? 'Learn More' : 'Contact Us'}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Plans;
