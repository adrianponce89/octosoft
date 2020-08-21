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
      '0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 0px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
  },
  highlightedButton: {
    boxShadow:
      'inset 0 0 0 2px #007bff, 0px 3px 1px 2px rgba(0 0 0 / 2%), 0px 0px 0px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 2%), 0px 5px 5px 0px rgb(0 0 0 / 9%)',
  },
  buttonIcon: {
    width: 32,
    height: 32,
    fill: (props) => props.color,
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
  },
  infoContainer: {
    margin: 'auto',
  },
  iconsDescriptions: {
    width: 250,
    height: 250,
    fill: (props) => props.fill,
    transition: 'fill 1.1s ease',
  },
  titleDescriptions: {
    fontSize: 27,
    fontWeight: 'bolder',
    textAlign: 'center',
    margin: '50px 25px',
  },
  containerDescription: {
    background: '#ECECEC',
    margin: 26,
    padding: 25,
    width: '38vw',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  descriptionItem: {
    fontWeight: 'bolder',
  },
});

const OurServices = (props) => {
  const classes = styles(props);
  const [index, selectedIndex] = useState(0);
  return (
    <Container background={`url(${BackgroundImage})`}>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Services</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          Learn about our departaments and the services they can
          provide to your business
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
        justify="center"
        className={classes.infoContainer}
      >
        <div>
          <OctoLogo
            fill={DummyData[index].color}
            className={classes.iconsDescriptions}
          />
          <div className={classes.titleDescriptions}>
            {DummyData[index].title}
          </div>
        </div>
        <div className={classes.containerDescription}>
          {DummyData[index].description.map((item) => (
            <li className={classes.descriptionItem}>{item}</li>
          ))}
        </div>
      </Grid>
    </Container>
  );
};

export default OurServices;
