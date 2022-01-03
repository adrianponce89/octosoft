import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import Masonry from 'masonry-layout'
import './pepe.css'

const ServicePortfolioGrid = () => {
  const classes = useStyle();

  return (
    <Container className={classes.root}>

      <div class="grid">
        <div className={classes.gridItem_width2} >
          <div className={classes.itemImage}>
            <h1 className={classes.itemTitle}>Hola</h1>
          </div>
        </div>
        <div className={classes.gridItem}></div>

        <div className={classes.gridItem}></div>
        <div className={classes.gridItem_width2}></div>

        <div className={classes.gridItem_width2}></div>
        <div className={classes.gridItem}></div>

        <div className={classes.gridItem_height2}></div>
        <div className={classes.gridItem_width_height2}></div>

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
      height: '80vh',
      width: '110%',
      marginLeft: '-5%'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  grid: {

    [theme.breakpoints.down('sm')]: {

    },
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
      mixBlendMode: 'soft-light'
    },
    '&:hover itemTitle': {
      visibility: 'visible'
    },
    [theme.breakpoints.down('sm')]: {

    },
  },
  gridItem_width2: {
    width: '64%',
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
      mixBlendMode: 'soft-light'
    },
    '& .itemImage .itemTitle': {
      visibility: 'hidden'
    },
    '&:hover .itemImage .itemTitle': {
      visibility: 'visible'
    },
    [theme.breakpoints.down('sm')]: {

    },
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
      mixBlendMode: 'soft-light'
    },
    '& .itemTitle': {
      visibility: 'hidden'
    },
    '&:hover .itemTitle': {
      visibility: 'visible'
    },
    [theme.breakpoints.down('sm')]: {

    },
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
      mixBlendMode: 'soft-light'
    },
    '& .itemTitle': {
      visibility: 'hidden'
    },
    '&:hover .itemTitle': {
      visibility: 'visible'
    },
    [theme.breakpoints.down('sm')]: {

    },
  },
  itemImage: {

  },
  itemTitle: {

  },
}));

export default ServicePortfolioGrid;
