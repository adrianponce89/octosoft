import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const styles = makeStyles({
  root: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  '@keyframes fadein': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  iconsDescriptions: {
    width: '100%',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: '150%',
    backgroundPosition: '0% 50%',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '100%',
    animation: '$fadein 3000ms forwards',
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 45,
    fontWeight: 'bolder',
  },
  containerDescription: {
    overflow: 'auto',
    background: 'transparent',
    padding: 0,
    animation: '$fadein 3000ms forwards',
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
});

const ShowCategory = ({ title, json, image, description }) => {
  const classes = styles({ image });
  return (
    <>
      <Grid item xs={8} sm={4} container alignItems="center">
        <Grid item className={classes.iconsDescriptions} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="column"
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
