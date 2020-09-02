import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import OctoLogo from '../assets/logo.svg';

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
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
});

const Services = ({ services, title, subtitle }) => {
  const classes = styles();
  const [index, selectedIndex] = useState(0);
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>{title}</h1>
        <Grid
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          {subtitle}
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        md={10}
        xs={12}
        className={classes.keypad}
      >
        {services.map(({ node }, i) => (
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
                fill={node.color}
              />
              <div className={classes.buttonText}>
                {`${node.title}`}
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
      {services.length > 0 ? (
        <Grid
          container
          direction="row"
          justify="space-evenly"
          className={classes.infoContainer}
        >
          <Grid
            container
            md={3}
            direction="column"
            alignItems="center"
          >
            <OctoLogo
              fill={services[index].node.color}
              className={classes.iconsDescriptions}
            />
            <div className={classes.titleDescriptions}>
              {services[index].node.title}
            </div>
          </Grid>
          <Grid
            container
            md={6}
            className={classes.containerDescription}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  services[index].node.content.json,
                ),
              }}
            />
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </>
  );
};

export default Services;
