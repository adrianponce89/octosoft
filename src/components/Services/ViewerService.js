import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import BackgroundImage from '../../assets/Trama.png';
import TypingAnimation from '../TypingAnimation';

const styles = makeStyles({
  root: {
    border: '5px solid #c2c1bf',
    width: '100%',
    margin: '40px auto 40px auto',
  },
  infoContainer: {
    width: '100%',
    transform: 'scaleX(-1)',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: 'transparent',
    backgroundPosition: 'initial',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    minHeight: '65vh',
  },
  iconsDescriptions: {
    position: 'absolute',
    left: '-5vw',
    width: '100%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: '150%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '150%',
    // '@media (max-width: 760px)': {
    //   backgroundSize: 'contain',
    // },
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 45,
    fontWeight: 'bolder',
  },
  containerDescription: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    background: 'transparent',
    padding: 0,
    '& li p': {
      fontSize: '2.1vmin',
      lineHeight: '1.2em',
      margin: '0 10px 10px 0',
    },
    '& li p::before': {
      content: '"· "',
      display: 'inline',
      fontWeight: 'bold',
    },
    '& ul': {
      display: 'flex',
      background: '#fff',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignSelf: 'stretch',
      height: '100%',
      maxHeight: '60vh',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
        maxHeight: 'max-content',
      },
    },
  },
  rotate: { transform: 'scaleX(-1)' },
  boxIcon: { position: 'relative', overflow: 'hidden' },
  internal: { height: '100%' },
});

const ViewerService = ({ service }) => {
  const classes = styles({ image: service.node.images[1].file.url });
  const {
    node: { order },
  } = service;
  const words = [
    'Software Engineering.',
    'Web Development.',
    'Social Media.',
    'Data Science.',
    'IT.',
    'Design.',
    'Marketing.',
    'Productions.',
  ];

  return (
    <Grid justify="center" className={classes.root}>
      <Grid item container className={classes.infoContainer}>
        {order >= 0 ? (
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            className={classes.rotate}
          >
            <Grid
              item
              xs={8}
              sm={4}
              container
              alignItems="center"
              className={classes.boxIcon}
            >
              <Grid item className={classes.iconsDescriptions} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              className={classes.containerDescription}
            >
              <Grid container className={classes.titleDescriptions}>
                {service.node.title}
              </Grid>
              <Grid
                container
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(
                    service.node.content.json,
                  ),
                }}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid item xs={12} className={classes.rotate}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.internal}
            >
              <TypingAnimation words={words} fontSize="70px" />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ViewerService;
