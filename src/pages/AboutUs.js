import React, { useState } from 'react';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Background.png';
import { data as DummyData } from '../assets/DummyData';
import { dataAbout as DummyDataAbout } from '../assets/DummyData';
import { ReactComponent as OctoLogo } from '../assets/logo.svg';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  headTitle: {
    fontSize: 40,
    '@media (max-width: 576px)': {
      fontSize: '10vw',
    },
  },
  headSubTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  keypad: {
    margin: 'auto',
  },
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 50,
    boxShadow:
      '0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 2px 1px rgb(0 0 0 / 6%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
  },
  highlightedButton: {
    boxShadow:
      'inset 0 0 0 2px #007bff, 0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 2px 1px rgb(0 0 0 / 6%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
  },
  buttonIcon: {
    width: 32,
    height: 32,
    fill: (props) => props.color,
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
    '@media (max-width: 576px)': {
      fontSize: '3.3vw',
    },
  },
  infoContainer: {
    margin: '40px auto 40px auto',
    padding: '20px 0 20px 0',
    boxShadow:
      '0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 2px 1px rgb(0 0 0 / 6%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
  },
  iconsDescriptions: {
    width: 250,
    height: 250,
    fill: (props) => props.fill,
    transition: 'fill 1.1s ease',
  },
  titleDescriptions: {
    margin: '20px 0 20px 0',
    fontSize: 27,
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  containerDescription: {
    background: '#ECECEC',
    padding: 25,
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  descriptionItem: {
    fontWeight: 'bolder',
  },
  itemAvatar: {
    padding: 20,
  },
  iconAvatar: {
    width: 160,
    height: 160,
    '@media (max-width: 576px)': {
      width: 100,
      height: 100,
    },
    background: '#ECECEC',
    clipPath:
      'polygon(50% 0, 85.5% 14.5%, 100% 50%, 85.5% 85.5%, 50% 100%, 14.5% 85.5%, 0 50%, 14.5% 14.5% )',
  },
  picAvatar: {
    width: 160,
    '@media (max-width: 576px)': {
      width: 100,
    },
  },
  descriptionAvatars: {
    background: '#ECECEC',
    marginTop: 15,
    padding: 5,
    width: 150,
    height: 65,
    '@media (max-width: 576px)': {
      fontSize: '3vw',
      width: 100,
      height: 55,
    },
    overflow: 'hidden',
  },
  containerPartners: {
    background: '#ECECEC',
  },
  itemPartners: {
    margin: 10,
    padding: 25,
    background: '#5c5f5c',
  },
});

const AboutUs = (props) => {
  const classes = styles(props);
  const [index, selectedIndex] = useState(0);
  return (
    <Container background={`url(${BackgroundImage})`}>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>The Octosoft Team</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          Learn about our departaments and how they can help you and
          your company.
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        md={10}
        xs={12}
        className={classes.keypad}
      >
        {DummyData.map((data, i) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            xs={6}
            md={3}
            onClick={() => {
              selectedIndex(i);
            }}
          >
            <Grid
              container
              justify="space-evenly"
              alignItems="center"
              className={`${classes.button} ${
                i === index ? classes.highlightedButton : ''
              }`}
            >
              <OctoLogo
                className={classes.buttonIcon}
                fill={data.color}
              />
              <div className={classes.buttonText}>
                {`${data.title}`}
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        className={classes.infoContainer}
      >
        <Grid container md={3} direction="column" alignItems="center">
          <OctoLogo
            fill={DummyData[index].color}
            className={classes.iconsDescriptions}
          />
          <div className={classes.titleDescriptions}>
            {DummyData[index].title}
          </div>
        </Grid>
        <Grid
          container
          md={6}
          className={classes.containerDescription}
        >
          {DummyData[index].description.map((item) => (
            <li className={classes.descriptionItem}>{item}</li>
          ))}
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Team</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          Learn about our departaments and how they can help you and
          your company.
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        className={classes.containerAvatars}
      >
        {DummyDataAbout.map((dataAbout) => (
          <Grid
            container
            md={3}
            xs={6}
            direction="column"
            alignItems="center"
            className={classes.itemAvatar}
          >
            <Grid
              container
              justify="center"
              alignContent="center"
              className={classes.iconAvatar}
            >
              <img
                src={dataAbout.picUrl}
                className={classes.picAvatar}
              />
            </Grid>
            <Grid
              container
              justify="center"
              alignContent="center"
              className={classes.descriptionAvatars}
            >
              {dataAbout.name}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Partners</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          Learn about our departaments and how they can help you and
          your company.
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.containerPartners}
        >
          {DummyDataAbout.map((dataAbout) => (
            <Grid container md={4} justify="center">
              <Grid
                container
                justify="center"
                alignContent="center"
                wrap
                className={classes.itemPartners}
              >
                {dataAbout.name}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
