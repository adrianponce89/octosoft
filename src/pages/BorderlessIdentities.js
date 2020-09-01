import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import BackgroundBanner from '../assets/BackgroundBanner.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BorderlessItems from '../components/BorderlessItems';
import { fetchFromContentfulByContentType } from '../Contentful';

const styles = makeStyles({
  root: {},
  backgroundGlobal: {
    background: '#fff',
    height: '100%',
  },
  backgroundBaner: {
    background: `url(${BackgroundBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '30%',
  },
  titleItems: { fontSize: '18px' },
});

const BorderlessIdentities = () => {
  const classes = styles();

  const [borderlessItems, setBorderlessItems] = useState([]);
  useEffect(() => {
    fetchFromContentfulByContentType(
      'borderlessItem',
      setBorderlessItems,
    );
  }, []);

  return (
    <Container
      background={`url(${BackgroundImage})`}
      transparent={'none'}
    >
      <div className={classes.root}>
        <Grid item md={12} className={classes.backgroundGlobal}>
          <Grid item md={12}>
            <div className={classes.backgroundBaner}></div>
          </Grid>
          <Grid container justify="center" md={12}>
            <h1 className={classes.titleItems}>
              What is Borderless Identities?
            </h1>
          </Grid>
          <Grid item>
            {borderlessItems.map(({ fields }, i) => (
              <BorderlessItems
                background={`url(${fields.photo.fields.file.url})`}
                description={fields.description}
                textAlign={i % 2 ? '' : 'left'}
                flexDirection={i % 2 ? '' : 'row'}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default BorderlessIdentities;
