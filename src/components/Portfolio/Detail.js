import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import ItemPortfolio from './Item';
import { Link } from 'gatsby';

const DetailPortfolio = ({ portfolios, projectsContent }) => {
  const classes = useStyle();
  console.log(projectsContent);

  return (
    <Container className={classes.root}>
      <Grid container xs={12} className={classes.gridContainer}>
        {portfolios.map((node) => {
          let viewPage = projectsContent.some(
            (project) =>{
              if(project.active){
                return project.category === node.category
              }else{
                return false
              }
            }
          );
            
          return (
            <Link
              item
              xs={12}
              md={3}
              container
              justify="center"
              key={node.newName}
              className={classes.boxGrid}
              to={
                viewPage
                  ? `/portfolio/${node.category}`
                  : `/underConstruction/`
              }
            >
              <ItemPortfolio data={node} />
            </Link>
          );})}
      </Grid>
    </Container>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      height: '80vh',
      width: '110%',
      marginLeft: '-5%'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  gridContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    maxWidth: 'unset',
    [theme.breakpoints.down('sm')]: {
      height: '95%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      //gap: '5px'
    },
  },
  boxGrid: {
    minHeight: '380px',
    flexWrap: 'wrap',
    flexGrow: 0,
    maxWidth: '11%',
    flexBasis: '25%',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: '0.5s ease-out',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      maxWidth: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: 'initial',
      minHeight: '11%',
      flexBasis: '0',
      borderRadius: '4px',
      '&:hover': {
        minHeight: '15%',
        maxWidth: 'initial'
      },
    },
  },
}));

export default DetailPortfolio;
