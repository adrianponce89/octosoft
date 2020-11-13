import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from '@reach/router';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import OctoLogo from '../assets/logo.svg';

const styles = makeStyles((theme) => ({
  headTitle: {
    fontSize: 40,
    textAlign: 'center',
    lineHeight: '38px',
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
    boxShadow: theme.boxShadow,
    borderRadius: theme.borderRadius,
  },
  highlightedButton: {
    boxShadow: `inset 0 0 0 2px #007bff, ${theme.boxShadow}`,
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
    boxShadow: theme.boxShadow,
    borderRadius: theme.borderRadius,
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
    '& p': {
      margin: 15,
    },
  },
}));

const Services = ({ services, selected, title, subtitle }) => {
  const classes = styles();
  const [index, selectedIndex] = useState(0);

  const navigate = useNavigate();

  const selectService = (s) => {
    const newIndex = services.findIndex(
      (v) => v.node.title.toLowerCase() === s.toLowerCase(),
    );
    if (newIndex >= 0) {
      selectedIndex(newIndex);
    }
  };

  useEffect(() => {
    selectService(selected);
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>{title}</h1>
        <Grid
          item
          container
          justify="center"
          xs={10}
          className={classes.headSubTitle}
        >
          {subtitle}
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        md={10}
        xs={12}
        className={classes.keypad}
      >
        {services
          .filter(({ node }) => node.order >= 0)
          .map(({ node }, i) => (
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={6}
              md={3}
              key={i}
              onClick={() => {
                selectService(node.title.toLowerCase());
                navigate(`/ourservices#${node.title.toLowerCase()}`);
              }}
            >
              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={`${classes.button} ${
                  node.order === index
                    ? classes.highlightedButton
                    : ''
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
            item
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
          <Grid item md={6} className={classes.containerDescription}>
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
