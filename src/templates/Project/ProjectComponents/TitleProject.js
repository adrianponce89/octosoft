import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const TitleProject = ({title= 'Title'}) => {
    const classes = useStyle();
  return (<div><Typography className={classes.title}> {title}
    </Typography></div>);
};

const useStyle = makeStyles((theme) => ({
    title: {
        color: '#303030',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: '30px',
    }
}))

export default TitleProject;
