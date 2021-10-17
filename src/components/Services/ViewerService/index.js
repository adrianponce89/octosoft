import React, { useState, useEffect } from 'react';
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

const ViewerService = ({
  words,
  categories,
  categoryShow,
  setCategoryShow,
}) => {
  const classes = styles();
  const [category, setCategory] = useState({});
  const selectedCategory = (node) => {
    setCategoryShow(!categoryShow);
    setCategory(node);
  };

  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 1500);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      categories
        .map(({ node }) => node.icon.file.url)
        .map((image) => loadImage(image)),
    )
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log('Failed to load images', err));
  }, []);

  return (
    <Grid justify="center" className={classes.root}>
      <Grid item container className={classes.infoContainer}>
        {categories.length > 0 ? (
          imgsLoaded ? (
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              className={classes.rotate}
            >
              {categoryShow ? (
                <ShowCategory
                  title={category.title}
                  image={category.iconLarge.file.url}
                  description={category.description.description}
                />
              ) : (
                <>
                  {categories.map(({ node }, i) => (
                    <ItemCategory
                      index={i}
                      key={node.title}
                      icon={node.icon.file.url}
                      onClick={() => selectedCategory(node)}
                    />
                  ))}
                </>
              )}
            </Grid>
          ) : (
            <Grid item xs={12} className={classes.rotate}>
              <AnimationWords words={[node.title]} />
            </Grid>
          )
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
