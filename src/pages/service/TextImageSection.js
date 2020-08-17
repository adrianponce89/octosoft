import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    textAlign: 'justify',
    fontWeight: 'lighter',
    lineHeight: '120%',
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'center',
    height: '100%',
  },
  left: {
    paddingRight: '3vw',
  },
  right: {
    paddingLeft: '3vw',
  },

  img: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  imgLeft: {
    alignItems: 'flex-start',
  },
  imgRight: {
    alignItems: 'flex-end',
  },
}));

const breakpoints = {
  paragraph: {
    md: 8,
    sm: 12,
  },
  img: {
    md: 4,
    sm: 6,
  },
};

export function Paragraphs({ section, reverse }) {
  const classes = useStyles();
  return (
    <Grid
      item
      md={breakpoints.paragraph.md}
      sm={breakpoints.paragraph.sm}
    >
      <Box
        className={`${classes.text} ${
          reverse ? classes.right : classes.left
        }`}
      >
        {section.text.split('\n').map((line) => (
          <p className={classes.paragraph}>{line}</p>
        ))}
      </Box>
    </Grid>
  );
}

export function Image({ section, reverse }) {
  const classes = useStyles();
  return (
    <Grid item md={breakpoints.img.md} sm={breakpoints.img.sm}>
      <Box
        className={`${classes.img} ${
          reverse ? classes.imgLeft : classes.imgRight
        }`}
      >
        <img
          src={section.image}
          alt={section.title}
          style={{ aspectRatio: '1/1', maxWidth: '250px' }}
        />
      </Box>
    </Grid>
  );
}

export const TextImageSection = ({ section, reverse }) => {
  const classes = useStyles();

  return (
    <>
      {!reverse && (
        <>
          <Paragraphs section={section} reverse={reverse} />
          <Image section={section} reverse={reverse} />
        </>
      )}
      {!!reverse && (
        <>
          <Image section={section} reverse={reverse} />
          <Paragraphs section={section} reverse={reverse} />
        </>
      )}
    </>
  );
};
