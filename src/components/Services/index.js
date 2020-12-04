import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from '@reach/router';
import { Grid } from '@material-ui/core';
import Banners from '../Banners';
import ItemService from './ItemService';
import ViewerService from './ViewerService';

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
  const [index, selectedIndex] = useState(1);

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
      {/* <Grid
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
      </Grid> */}

      <Banners
        title={title}
        subtitle={subtitle}
        backgroundImage={image}
        color={colorTitle}
        right
      />
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
              <ItemService node={node} index={index} />
            </Grid>
          ))}
      </Grid>
      {services.length > 0 ? (
        <ViewerService service={services[index]} />
      ) : (
        ''
      )}
    </>
  );
};

export default Services;
