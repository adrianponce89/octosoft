import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import TitleProject from '../ProjectComponents/TitleProject'
import SubtitleProject from '../ProjectComponents/SubtitleProject'
import TextProject from '../ProjectComponents/TextProject'

const SoftwareContent = ({project}) => {
    
    const { url } = project.asset.file
    const { description } = project.description
    

    const classes = useStyle({imageUrl: url});
    return (
      <Container className={classes.root}>
        <Grid container justify="center" xs={12}>
          <Grid
            item
            container
            justify="center"
            xs={11}
            sm={5}
            md={6}
            className={classes.imageContainer}
          >
            <div className={classes.image}></div>
          </Grid>
          <Grid
            item
            container
            justify="center"
            xs={11}
            sm={5}
            md={6}
            className={classes.descriptionContainer}
          >
            <div className={classes.description}>
              <TitleProject title={project.title} />
              <SubtitleProject
                text={project.subtitle}
                clientName={project.clientName}
              />
              <TextProject text={description} />
            </div>
            <Link
              underline="none"
              variant="body2"
              className={classes.btnLink}
              target="_blank"
              onClick={() => {
                console.info("I'm a button.");
              }}
              href={project.linkProject}
            >
              <Typography className={classes.btnText}>
                VIEW ON GITHUB
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
}

const useStyle = makeStyles((theme) => ({
  imageContainer: {
    padding: '0 10px 0 0',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
    },
  },
  description: {
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  descriptionContainer: {
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
    },
  },
  image: {
    borderRadius: '11px',
    overflow: 'hidden',
    backgroundImage: ({ imageUrl }) =>
      imageUrl ? `url(${imageUrl})` : `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    width: '100%',
    height: 384,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  root: {
    padding: 0,
    marginTop: '80px',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '40px',
      marginBottom: '40px',
      //marginLeft: '-5%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      justifyContent: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  btnLink: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 24px',
    border: '1px solid #33ADFF',
    borderRadius: '3px',
    boxShadow:
      ' -3.73106px -3.73106px 11.1932px rgba(51, 173, 255, 0.25), 3.73106px 3.73106px 11.1932px rgba(51, 173, 255, 0.25);',
    [theme.breakpoints.down('xs')]: {
      padding: '6px 10px',
      marginTop: 20,
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 20,
      width: '90%',
    },
  },
  btnText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '17px',
    color: '#000000',
  },
}));
  

export default SoftwareContent
