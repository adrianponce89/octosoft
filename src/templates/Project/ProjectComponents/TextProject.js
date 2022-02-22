import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const TextProject = ({text= 'text'}) => {
    const classes = useStyle();
  return (<div className={classes.container}><Typography className={classes.title}> {text}
    </Typography></div>);
};

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: 25
    },
    title: {
        color: '#303030',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: '13px',
    }
}))

export default TextProject