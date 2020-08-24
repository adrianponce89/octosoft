import React, { useState } from 'react';
import Container from '../components/Container';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/Background.png';
import { data as DummyData } from '../assets/DummyData';
import { ReactComponent as OctoLogo } from '../assets/logo.svg';
import { Grid } from '@material-ui/core';

const styles = makeStyles({
  headTitle: {
    fontSize: 40,
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
    width: 150,
    height: 150,
    fill: (props) => props.fill,
  },
  descriptionAvatars: {
    background: '#ECECEC',
    marginTop: 15,
    width: 150,
    height: 60,
  },
  containerPartners: {
    background: '#ECECEC',
  },
  itemPartners: {
    margin: 20,
    background: '#5c5f5c',
    height: 60,
  },
});

const OurServices = (props) => {
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
            lg={3}
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
        <Grid container lg={3} direction="column" alignItems="center">
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
          lg={6}
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
        {DummyData.map((data) => (
          <Grid
            container
            lg={3}
            direction="column"
            alignItems="center"
            className={classes.itemAvatar}
          >
            <OctoLogo
              className={classes.iconAvatar}
              fill={data.color}
            />
            <div className={classes.descriptionAvatars}></div>
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
          {DummyData.map((data) => (
            <Grid container lg={4} justify="center">
              <Grid container className={classes.itemPartners}></Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;
