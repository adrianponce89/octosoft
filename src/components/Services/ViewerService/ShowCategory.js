import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  root: {
    border: '5px solid #c2c1bf',
    width: '100%',
    margin: '40px auto 40px auto',
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
  boxIcon: { position: 'relative', overflow: 'hidden' },
});

const ShowCategory = ({ title, json, image, description }) => {
  const classes = styles({ image });
  return (
    <>
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
          {title}
        </Grid>
        {json ? (
          <Grid
            container
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(json),
            }}
          />
        ) : description ? (
          <Grid container>{description}</Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default ShowCategory;
