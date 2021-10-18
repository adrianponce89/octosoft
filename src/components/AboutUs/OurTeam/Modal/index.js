import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import SocialNetwork from '../../../SocialNetwork';
import CornerTopRight from '../../../../assets/Trama2.png';
import CornerBottomRight from '../../../../assets/octoOrang.png';

const OurTeamModal = ({
  name,
  onClose,
  background,
  biography,
  expertise,
  socialMedia,
}) => {
  const classes = useStyles({ background });
  const even = (even) => even !== '';
  const letterFirst = (str) => {
    const res = [];
    if (str.length != 0) {
      const arrAux = str.split(' ');
      arrAux.forEach((item) => {
        res.push({ first: item.slice(0, 1), second: item.slice(1) });
      });
    }

    return res;
  };
  console.log('expertise :>> ', expertise.json);
  return (
    <Grid item container justify="flex-end" className={classes.root}>
      <Grid item xs={4} className={classes.boxImageMember}>
        <div className={classes.imageMember} />
      </Grid>
      <Grid item xs={4} className={classes.cornerTopRight} />

      <Grid
        item
        xs={9}
        container
        justify="flex-end"
        className={classes.boxInfo}
      >
        <Grid item xs={10} container alignItems="center">
          <Typography variant="h3" className={classes.titleName}>
            {name}
          </Typography>
        </Grid>

        <Grid item xs={10}>
          <Grid item xs={9}>
            {letterFirst('Expertise').map(({ first, second }) => (
              <Grid item xs={5} container alignItems="baseline">
                <Typography
                  variant="h4"
                  className={[classes.subTitle, classes.first]}
                >
                  {first}
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  {second}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={9}
            container
            direction="column"
            className={classes.containerDescription}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(expertise.json),
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={9}>
            {letterFirst('Bio').map(({ first, second }) => (
              <Grid item xs={5} container alignItems="baseline">
                <Typography
                  variant="h4"
                  className={[classes.subTitle, classes.first]}
                >
                  {first}
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  {second}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={9} className={classes.description}>
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(biography.json),
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item sm={9} container alignItems="center">
              {Object.values(socialMedia).some(even) ? (
                <Typography
                  variant="caption"
                  className={classes.text}
                >
                  {`Follow ${name} on Social Media:`}
                </Typography>
              ) : null}
              <SocialNetwork socialMedia={socialMedia} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        className={classes.button}
        onClick={onClose}
      >
        <Typography
          variant="subtitle1"
          className={classes.textButton}
        >
          Back
        </Typography>
      </Button>
      <div className={classes.cornerBottomRight} />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    borderRadius: 16,
    background: '#F1F1F1',
    overflow: 'hidden',
    height: '80vh',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '60%',
    backgroundImage: `url(${CornerTopRight})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: -158,
    right: -112,
    width: '31%',
    paddingBottom: '31%',
    backgroundImage: `url(${CornerBottomRight})`,
    backgroundSize: '95%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  boxInfo: {
    zIndex: 3,
    rowGap: `${theme.spacing(4)}px`,
  },
  boxImageMember: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  imageMember: {
    width: '100%',
    height: '100%',
    backgroundImage: ({ background }) => background,
    backgroundColor: '#ECECEC',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '5px 0px 0px rgb(130 127 132)',
    borderRadius: 10,
  },
  boxName: { columnGap: `${theme.spacing(4)}px` },
  titleName: {
    textShadow: '3px 1px 1px rgb(130 127 132)',
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#26A1FF',
    '@media (max-width: 1024px)': {
      fontSize: '2vmax',
    },
    '@media (max-width: 585px)': {
      fontSize: '5vmin',
    },
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#f9a055',
  },
  first: { fontWeight: 'bold' },
  text: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    fontWeight: 500,
    color: '#26A1FF',
  },
  description: {
    background: 'transparent',
    '& p': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '.90em',
      '@media (max-width: 1256px)': {
        fontSize: '1.2vmax',
      },
      '@media (max-width: 585px)': {
        fontSize: '2.6vmax',
      },
      '@media (max-width: 565px)': {
        fontSize: '2.6vmin',
      },
    },
  },
  containerDescription: {
    overflow: 'auto',
    background: 'transparent',
    padding: 0,
    '& li p': {
      fontFamily: 'Poppins',
      fontWeight: 500,
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
      background: 'transparent',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignSelf: 'stretch',
      height: '100%',
      maxHeight: '30vh',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
        maxHeight: 'max-content',
      },
    },
  },
  boxButton: { position: 'relative' },
  button: {
    zIndex: 3,
    backgroundColor: '#26A1FF',
    boxShadow: '5px 0px 0px rgb(130 127 132)',
    borderRadius: 8,
    padding: theme.spacing(4, 8),
    position: 'absolute',
    right: 75,
    bottom: 40,
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontSize: theme.spacing(4.5),
  },
}));

export default OurTeamModal;
