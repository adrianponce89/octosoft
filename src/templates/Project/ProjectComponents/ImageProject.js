import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import TextProject from '../ProjectComponents/TextProject'

const ImageProject = ({imgUrl, imgWidth, imgHeight, description}) => {
    const classes = useStyle({ imgUrl});
    console.log(description)
    if(imgWidth <= 600){
        return <Grid container item className={classes.imageGrid1} ></Grid>
    } else {
        if(imgHeight < 390){
            return (
            <>
                <Grid container item className={classes.imageGrid2} ></Grid>
                {description && (
                    <Grid container justify="flex-start" xs={12} >
                        <Grid container item md={6} xs={12}>
                            <div className={classes.description}>
                                <TextProject text={description}/>
                            </div>
                        </Grid>
                    </Grid>
                )}
            </>)
        } else {
            return (
                <>
                    <Grid container item className={classes.imageGrid3} ></Grid>
                    {description && (
                        <Grid container justify="flex-start" xs={12} >
                            <Grid container item md={6} xs={12}>
                                <div className={classes.description}>
                                    <TextProject text={description}/>
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </>)
        }
    }
};

const useStyle = makeStyles((theme) => ({
    imageContainer:{
      padding:'0 10px 0 0',
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
    imageGrid1:{
        backgroundImage: ({ imgUrl }) =>
        imgUrl ? `url(${imgUrl})` : null,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '49%',
        height: '45vh',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            minHeight: '30vh',
          },
    },
    imageGrid2:{
        backgroundImage: ({ imgUrl }) =>
        imgUrl ? `url(${imgUrl})` : null,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '45vh',
        marginTop: '2%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            minHeight: '30vh',
          },
    },
    imageGrid3 : {
        backgroundImage: ({ imgUrl }) =>
        imgUrl ? `url(${imgUrl})` : null,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        marginTop: '2%',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            minHeight: '30vh',
          },
    },
    descriptionContainer:{
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
    image:{
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
        width: '110%',
        marginTop: '40px',
        marginBottom: '40px',
        marginLeft: '-5%',
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
      boxShadow: ' -3.73106px -3.73106px 11.1932px rgba(51, 173, 255, 0.25), 3.73106px 3.73106px 11.1932px rgba(51, 173, 255, 0.25);',
      [theme.breakpoints.down('xs')]: {
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
      color: '#000000'
    }
  }));

export default ImageProject;
