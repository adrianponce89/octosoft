import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import TitleProject from '../ProjectComponents/TitleProject'
import SubtitleProject from '../ProjectComponents/SubtitleProject'
import TextProject from '../ProjectComponents/TextProject'
import ImageProject from '../ProjectComponents/ImageProject'

const DesignContent = ({project}) => {
    const { description } = project.description
    const classes = useStyle();
    console.log('hola', project.designAssets.length);
    return (
        <Container className={classes.root}>
            <Grid container justify="flex-start" xs={12} >
                <Grid container item md={6} xs={12}>
                    <div className={classes.description}>
                        <TitleProject title={project.title} />
                        <SubtitleProject text={project.subtitle}/>
                        <TextProject text={description}/>
                    </div>
                </Grid> 
            </Grid>
            {project.designAssets && (
                <>
                    <Grid container justify="space-between" xs={12}>
                        {project.designAssets.length >= 3 && 
                            project.designAssets.slice(0,3).map(({file,description})=>{
                                return(
                                    <ImageProject  
                                        imgWidth={file.details.image.width} 
                                        imgHeight={file.details.image.height} 
                                        imgUrl={file.url} 
                                        description={description}
                                    />
                                )
                            })
                        }
                    </Grid>
                    
                    <Grid container justify="space-between" xs={12}>
                        {project.designAssets.length >= 6 && 
                            project.designAssets.slice(3,6).map(({file,description})=>{
                                return(
                                    <ImageProject  
                                        imgWidth={file.details.image.width} 
                                        imgHeight={file.details.image.height} 
                                        imgUrl={file.url} 
                                        description={description}
                                    />
                                )
                            })
                        }
                    </Grid>
                    <Grid container justify="space-between" xs={12}>
                        {project.designAssets.length >= 8 && 
                            project.designAssets.slice(6,8).map(({file,description})=>{
                                return(
                                    <ImageProject  
                                        imgWidth={file.details.image.width} 
                                        imgHeight={file.details.image.height} 
                                        imgUrl={file.url} 
                                        description={description}
                                    />
                                )
                            })
                        }
                    </Grid>
                </>
            )}
            
        </Container>
    )
    ;
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
  }));
  

export default DesignContent;
