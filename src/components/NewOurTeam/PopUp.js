import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SocialNetwork from '../AboutUs/OurTeam/SocialNetwork';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import CloseIcon from '@material-ui/icons/Close';

const PopUp = ({
  name,
  section,
  background,
  biography,
  expertise,
  socialMedia,
  onClose,
}) => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  console.log("biography >>",biography);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const classes = useStyles({ background, windowDimensions });

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.divPhoto}>
          <Grid item className={classes.gridPhoto} />
        </div>
        <div className={classes.secondColumn}>
          <div className={classes.upInfo}>
            <div className={classes.column}>
              <div className={classes.divName}>
                <Typography className={classes.name}>
                  {name}
                </Typography>
              </div>
              <div className={classes.divSection}>
                <Typography className={classes.section}>
                  {section}
                </Typography>
              </div>
            </div>
            <div className={classes.divSocialMedia}>
              <SocialNetwork
                socialMedia={socialMedia}
                className={classes.social}
                container
              />
            </div>
          </div>
          <div className={classes.divSubs}>
            <Typography className={classes.titles}>
              Expertise
            </Typography>
            <div className={classes.divExpertise}>
              {expertise &&
                expertise.map(({ content }, index) => (
                  <div key={index} className={classes.eachExpertise}>
                    <Typography key={index} className={classes.expertise}>
                      {content[0].content[0].value}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
          <div className={classes.divSubs}>
            <Typography className={classes.titles}>Bio</Typography>
            <div className={classes.divBio}>
              {biography &&
                biography.map(({ content }, index) => (
                  <div key={index} className={classes.eachBio}>
                    <Typography key={index} className={classes.expertise}>
                      {content[0].content[0].value}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divButton}>
        <IconButton className={classes.button} onClick={onClose}>
          <CloseIcon className={classes.iconClose} />
        </IconButton>
      </div>
    </Fragment>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: ({ windowDimensions }) =>
      (windowDimensions.width * 90) / 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7F7',
    height: '45rem',
    '@media (max-width: 1800px)': {
      width: ({ windowDimensions }) => windowDimensions.width,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'scroll',
    },
    '@media (max-width: 1024px)': {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'scroll',
    },
  },
  divPhoto: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1800px)': {
      display: 'none',
    },
  },
  gridPhoto: {
    width: '80%',
    height: '90%',
    backgroundImage: ({ background }) => background,
    backgroundColor: '#C0BAC6',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 6,
  },
  secondColumn: {
    display: 'flex',
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  upInfo: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    marginTop: '2rem',
    flexDirection: 'row',
    '@media (max-width: 1024px)': {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    '@media (max-width: 1024px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divName: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0',
    },
  },
  name: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '4vh',
    margin: '0',
    color: '#37ADD4',
    textTransform: 'capitalize',
    '@media (max-width: 1024px)': {
      fontSize: '3.5vh',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divSection: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      margin: '0',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1rem',
    },
  },
  section: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '4vh',
    margin: '0',
    color: '#000000',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '3vh',
      margin: '0',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1rem',
    },
  },
  divSocialMedia: {
    display: 'flex',
    width: '40%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: '7.7%',
    '@media (max-width: 1024px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0',
    },
  },
  social: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divSubs: {
    display: 'flex',
    width: '90%',
    height: 'fit-content',
    marginTop: '1rem',
    marginBottom: '1rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '90%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  titles: {
    width: '100%',
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '2vh',
    color: '#8249DC',
    marginTop: '1rem',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '2vh',
      margin: '0',
      justifyContent: 'flex-start',
    },
  },
  divExpertise: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    height: '5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '100%',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      marginTop: '1rem',
      marginBottom: '1rem',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'scroll',
      height: '10rem',
    },
  },
  eachExpertise: {
    display: 'flex',
    width: '30%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '90%',
      height: '100%',
    },
  },
  expertise: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '20',
    color: '#4D4D4D',
  },
  divBio: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    height: '5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      width: '100%',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      marginTop: '1rem',
      marginBottom: '1rem',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'scroll',
      height: '10rem',
    },
  },
  eachBio: {
    display: 'flex',
    width: '50%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: '10%',
    '@media (max-width: 1024px)': {
      width: '90%',
      height: '100%',
    },
  },
  divButton: {
    display: 'flex',
    position: 'absolute',
    zIndex: '5',
    top: '5%',
    right: '2%',
    '@media (max-width: 1024px)': {
      right: '0%',
      top: '0%',
    },
  },
  button: {
    border: 'transparent',
    backgroundColor: 'transparent',
  },
  iconClose: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '3vh',
  },
  textButton: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#000000',
    fontSize: 18,
    textTransform: 'none',
  },
}));

export default PopUp;
