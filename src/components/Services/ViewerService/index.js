import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import BackgroundImage from '../../../assets/Trama.png';
import AnimationWords from './AnimationWords';
import ShowCategory from './ShowCategory';
import ItemCategory from './ItemCategory';

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
});

const ViewerService = ({ service, words, categories }) => {
  const classes = styles();
  const {
    node: { order },
  } = service;

  return (
    <Grid justify="center" className={classes.root}>
      <Grid item container className={classes.infoContainer}>
        {order >= 0 ? (
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.rotate}
          >
            {categories.length > 0 ? (
              categories.map(({ node }, i) => (
                <ItemCategory
                  index={i}
                  key={node.title}
                  title={node.title}
                  icon={node.icon.file.url}
                />
              ))
            ) : (
              <Grid item xs={12}>
                <AnimationWords words={words} />
              </Grid>
            )}

            {/* <ShowCategory
              title={service.node.title}
              json={service.node.content.json}
              image={service.node.images[1].file.url}
            /> */}
          </Grid>
        ) : (
          <Grid item xs={12} className={classes.rotate}>
            <AnimationWords words={words} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ViewerService;
