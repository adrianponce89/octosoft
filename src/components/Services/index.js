import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from '@reach/router';
import { Grid } from '@material-ui/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import OctoLogo from '../../assets/logo.svg';

const styles = makeStyles((theme) => ({
  contanerHead: {
    marginTop: 20,
  },
  containerImga: {
    borderRight: `7px solid`,
    borderColor: (props) => props.colorTitle,
  },
  image: {
    backgroundImage: (props) => props.image,
    backgroundPosition: 'center',
    width: '23vw',
    paddingBottom: '64%',
  },
  headTitle: {
    margin: 0,
    fontSize: 70,
    fontWeight: '900',
    textAlign: 'start',
    color: (props) => props.colorTitle,
  },
  headSubTitle: {
    fontSize: 20,
    lineHeight: '170%',
    textAlign: 'start',
  },
  keypad: {
    margin: 'auto',
  },
  button: {
    margin: 10,
    cursor: 'pointer',
    height: 70,
    backgroundColor: (props) => props.color,
  },
  highlightedButton: {
    backgroundColor: '#ECECEC',
    color: '#000',
  },
  buttonIcon: {
    width: 32,
    height: 32,
    fill: (props) => props.color,
  },
  buttonText: {
    width: '50%',
    fontWeight: 'bolder',
    color: '#FFFF',
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

const Services = ({
  services,
  selected,
  title,
  subtitle,
  image,
  colorTitle,
}) => {
  const classes = styles({ colorTitle, image });
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
    console.log('selected:', selected);
    selectService(selected);
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        className={classes.contanerHead}
      >
        <Grid
          item
          container
          justify="center"
          xs={10}
          md={5}
          className={classes.containerImga}
        >
          <div className={classes.image}></div>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignContent="flex-start"
          xs={10}
          md={6}
        >
          <h1 className={classes.headTitle}>{title}</h1>
          <p className={classes.headSubTitle}>{subtitle}</p>
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
              key={i}
              xs={6}
              md={3}
              onClick={() => {
                selectService(node.title.toLowerCase());
                navigate(`/ourservices#${node.title.toLowerCase()}`);
              }}
            >
              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                style={{ backgroundColor: node.color }}
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
          <Grid
            container
            item
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
