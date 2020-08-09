import React from "react";
import {getLines} from "../Contentful";
import {makeStyles} from '@material-ui/core/styles';
import BackgroundImage from '../assets/clouds.jpg';

const useStyles = makeStyles(theme => ({
    header: {
        height: '300px',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    text: {
        padding: '20px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '10vh',
        textAlign: 'end',
    }
}));

export const Header = ({headerTitle}) => {
    const classes = useStyles();
    return <div className={classes.header}>
        <div className={classes.text}>
            {getLines(headerTitle)}
        </div>
    </div>
}