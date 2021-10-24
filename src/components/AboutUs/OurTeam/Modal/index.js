import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import SocialNetwork from '../SocialNetwork';
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

  return (
    <Grid item container className={classes.root}>
      <Grid item xs={4} className={classes.boxImageMember}>
        <div className={classes.imageMember} />
      </Grid>

      <Grid item xs={4} className={classes.cornerTopRight} />
      <Grid
        item
        container
        justify="flex-start"
        className={classes.boxInfo}
      >
        <Grid item xs={10} container alignItems="center">
          <Typography variant="h3" className={classes.titleName}>
            {name}
          </Typography>
        </Grid>

        <Grid item  className={classes.fixResponsive}>
          <Grid item xs={10} container alignItems="center">
            <Typography variant="h4" className={classes.subTitle}>
              Expertise
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            className={classes.containerDescription}
          >
            <div
            className={classes.expertise}
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(expertise.json),
              }}
            />
          </Grid>
        </Grid>
        <Grid F className={classes.fixResponsive}>
          <Grid item xs={10} container alignItems="center">
            <Typography variant="h4" className={classes.subTitle}>
              Bio
            </Typography>
          </Grid>

          <Grid item className={classes.boxBio}>
            <Grid item className={classes.description}>
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(biography.json),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={10}
        container
        justify="flex-start"
        className={classes.boxSocialMedia}
      >
        <SocialNetwork
          socialMedia={socialMedia}
          className={classes.social}
          container
        />
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
    '@media (max-width: 768px)': {
      width: '90%',
      left: '5%',
    },
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
    opacity: '0.7',
    bottom: -160,
    right: -148,
    width: '31%',
    paddingBottom: '31%',
    backgroundImage: `url(${CornerBottomRight})`,
    backgroundSize: '88%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  boxInfo: {
    zIndex: 3,
    marginLeft: '36%',
    '@media (max-width: 768px)': {
      width: '90%',
      marginLeft: '5%',
    },
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
    '@media (max-width: 768px)': {
      display: 'none',
      width: '0%',
      height: '85%',
    },
  },
  boxName: { columnGap: `${theme.spacing(4)}px` },
  titleName: {
    padding: theme.spacing(8, 0, 4, 0),
    /* textShadow: '3px 1px 1px rgb(130 127 132)', */
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#26A1FF',
    '@media (max-width: 1024px)': {
      fontSize: '2vmax',
    },
    '@media (max-width: 585px)': {
      fontSize: '5vmin',
    },
    '@media (max-width: 768px)': {
      padding: 0,
      marginTop: '5%',
      marginBottom: '5%',
    },
  },
  subTitle: {
    fontSize: '2.7vmin',
    fontFamily: 'Poppins',
    fontWeight: 700,
    color: '#f9a055',
    '@media (max-width: 768px)': {
      fontSize: '1.7vh',
      padding: 0,
      marginTop: '5%',
      marginBottom: '5%',
    },
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '1em',
    fontWeight: 500,
    color: '#26A1FF',
    width: '100%',
  },
  expertise:{
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  fixResponsive: {
    width: '100%',
    '@media (max-width: 768px)': {
      height: '40vh',
      width: '100%',
    },
  },
  description: {
    background: 'transparent',
    whiteSpace: 'pre-line',
    height: 245,
    '& p': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '1em',
      '@media (max-width: 1256px)': {
        fontSize: '1.2vmax',
        height: 'fit-content',
      },
      '@media (max-width: 585px)': {
        fontSize: '1.5vh',
        height: 'fit-content',
        width: '100%',
      },
      '@media (max-width: 565px)': {
        fontSize: '1.5vh',
        height: 'fit-content',
        width: '100%',
      },
    },
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  containerDescription: {
    overflow: 'auto',
    background: 'transparent',
    paddingTop: theme.spacing(3.5),
    '& li p': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '1em',
      lineHeight: '1.2em',
      margin: '0 10px 10px 0',
      '@media (max-width: 768px)': {
        fontSize: '1.5vh',
        width: '100%',
      },
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
      maxHeight: '24vh',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 760px)': {
        flexWrap: 'nowrap',
        maxHeight: 'max-content',
        width: '100%',
      },
    },
    '@media (max-width: 768px)': {
      width: '100%',
      height: '70%',
      margin: 0,
    },
  },
  boxBio: {
    maxHeight: '30vh',
    marginBottom: 40,
    overflow: 'auto',
    '@media (max-width: 768px)': {
      top: '0%',
      width: '100%',
      margin: 0,
    },
  },
  boxButton: {
    position: 'relative',
    '@media (max-width: 768px)': {
      position: 'absolute',
    },
  },
  boxSocialMedia: {
    position: 'absolute',
    bottom: 0,
    left: 45,
    '@media (max-width: 768px)': {
      left: 0,
    },
  },
  button: {
    zIndex: 3,
    backgroundColor: '#26A1FF',
    boxShadow: '5px 0px 0px rgb(130 127 132)',
    borderRadius: 8,
    padding: theme.spacing(3, 7.5),
    position: 'absolute',
    right: 32,
    bottom: 40,
    '@media (max-width: 768px)': {
      position: 'fixed',
      right: 20,
      height: '2.5rem',
      bottom: '2%',
    },
  },
  textButton: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontWeight: 500,
    textTransform: 'capitalize',
    fontSize: theme.spacing(4.5),
  },
  social: {
    borderRadius: 10,
    backgroundColor: theme.palette.common.white,
    position: 'relative',
    zIndex: 3,
    margin: 30,
    width: 'fit-content',
    '@media (max-width: 768px)': {
      left: 0,
      width: '100rem',
      margin: 0,
    },
  },
}));

export default OurTeamModal;
