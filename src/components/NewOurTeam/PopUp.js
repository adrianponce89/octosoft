import React, { Fragment, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SocialNetwork from '../AboutUs/OurTeam/SocialNetwork';

const PopUp = ({
  name,
  section,
  background,
  biography,
  expertise,
  socialMedia,
  member,
  popup,
}) => {
  const classes = useStyles({ background });

  const handleClick = () => {
    popup(false);
    member(null);
  };
  console.log(socialMedia);
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.divPhoto}>
          <Grid item className={classes.gridPhoto} />
        </div>
        <div className={classes.secondColumn}>
          <div className={classes.upInfo}>
            <div className={classes.divName}>
              <Typography className={classes.name}>{name}</Typography>
            </div>
            <div className={classes.divSection}>
              <Typography className={classes.section}>
                {section}
              </Typography>
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
                  <div className={classes.eachExpertise}>
                    <Typography key={index} className={classes.bio}>
                      {content[0].content[0].value}{' '}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
          <div className={classes.divSubs}>
            <Typography className={classes.titles}>Bio</Typography>
            <div className={classes.divText}>
              <Typography className={classes.bio}>
                {biography}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divButton}>
        <Button
          className={classes.button}
          onClick={() => handleClick()}
        >
          <Typography className={classes.textButton}>Back</Typography>
        </Button>
      </div>
    </Fragment>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '110rem',
    backgroundColor: '#F5F7F7',
    height: '50rem',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divPhoto: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      width: '90%',
      height: '100%',
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
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      boxShadow: 'none',
    },
  },
  secondColumn: {
    display: 'flex',
    width: '70%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divName: {
    display: 'flex',
    width: 'fit-content',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginRight: '1rem',
    '@media (max-width: 768px)': {
      margin: '0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  name: {
    width: '100%',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '4vh',
    margin: '0',
    color: '#37ADD4',
    textTransform: 'capitalize',
    '@media (max-width: 768px)': {
      fontSize: '3.5vh',
    },
  },
  divSection: {
    display: 'flex',
    width: 'fit-content',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    '@media (max-width: 768px)': {
      margin: '0',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1rem',
    },
  },
  section: {
    width: '100%',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '4vh',
    margin: '0',
    color: '#000000',
    textTransform: 'uppercase',
    '@media (max-width: 768px)': {
      fontSize: '3vh',
    },
  },
  divSocialMedia: {
    display: 'flex',
    width: '40%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media (max-width: 768px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  social: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media (max-width: 768px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  divSubs: {
    width: '90%',
    height: 'fit-content',
    marginTop: '1rem',
    marginBottom: '1rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    '@media (max-width: 768px)': {
      fontSize: '3vh',
      margin: '0',
    },
  },
  divText: {
    display: 'flex',
    width: '100%',
    textAlign: 'justify',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'fit-content',
    '@media (max-width: 768px)': {
      width: '100%',
      flexDirection: 'column',
      marginTop: '1rem',
      marginBottom: '1rem',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'scroll',
      height: '13rem',
    },
  },
  bio: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Poppins',
    fontWeight: 50,
    fontSize: '1,5vh',
    color: '#4D4D4D',
    '@media (max-width: 768px)': {
      width: '95%',
    },
  },
  divExpertise: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '10rem',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
      width: '90%',
      height: '100%',
    },
  },
  divButton: {
    display: 'flex',
    position: 'absolute',
    zIndex: '5',
    bottom: '5%',
    right: '5%',
    '@media (max-width: 768px)': {
      position: 'fixed',
      bottom: '1%',
      right: '1%',
    },
  },
  button: {
    width: '10rem',
    height: '3rem',
    borderRadius: 8,
    border: `0.2rem solid #37ADD4`,
    backgroundColor: '#F5F7F7',
    '@media (max-width: 768px)': {
      backgroundColor: '#F5F7F7',
    },
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
