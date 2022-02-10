import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import BackgroundImage from '../../assets/Version_Horizontal.png';

import ProjectCard from './ProjectCard';

const ServicePortfolioGrid = ({ portfolio }) => {
  const classes = useStyle({ portfolio });

  return (
    <Container className={classes.root}>
      <div class="grid">
        {portfolio.length > 0 && portfolio.map(project => {
          return (
            <ProjectCard
              bannerUrl={project.banner.file.url}
              size={project.bannerDimensions}
              key={project.order}
              title={project.title}
              subtitle={project.subtitle}
              category={project.category}
              id={project.contentful_id}
            />
          );
        })}
      </div>
    </Container>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: '80px',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      width: '110%',
      marginTop: '40px',
      marginBottom: '40px',
      marginLeft: '-5%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  grid: {
    [theme.breakpoints.down('sm')]: {},
  },
  gridItem: {
    width: '32%',
    aspectRatio: '4/4',
    float: 'left',
    background: 'rgb(220, 114, 153)',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '200ms ease-in-out',
    '&:hover': {
      mixBlendMode: 'soft-light',
    },
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  gridItem_width2: {
    width: '64%',
    aspectRatio: '4/2',
    float: 'left',
    backgroundImage: ({ portfolio }) =>
      portfolio.length > 0
        ? `url(${portfolio[0].banner.file.url})`
        : `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '500ms all ease-in-out',
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    '&:hover': {
      mixBlendMode: 'soft-light',
    },

    [theme.breakpoints.down('sm')]: {},
  },
  gridItem_height2: {
    width: '32%',
    height: '50vw',
    aspectRatio: '4/2',
    float: 'left',
    background: 'rgb(220, 114, 153)',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '200ms ease-in-out',
    '&:hover': {
      mixBlendMode: 'soft-light',
    },
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  gridItem_width_height2: {
    width: '64%',
    height: '50vw',
    aspectRatio: '4/4',
    float: 'left',
    background: 'rgb(220, 114, 153)',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '200ms ease-in-out',
    '&:hover': {
      mixBlendMode: 'soft-light',
    },
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  itemImage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  itemTitle: {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '5px 0',
    transition: '200ms all ease-in-out',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5rem',
      color: '#303030',
      textAlign: 'center',
      lineHeight: 'normal',
      margin: ' 0 2.5px',
    },
  },
  itemSubtitle: {
    fontSize: '1rem',
    margin: '5px 0',
    fontWeight: 400,
    transition: '200ms all ease-in-out',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.3rem',
      color: '#303030',
      textAlign: 'center',
    },
  },
}));

export default ServicePortfolioGrid;
