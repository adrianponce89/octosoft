import React from "react";
import {TextImageSection} from "./TextImageSection";

import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({



}));


export const ServiceBody = ({data}) => {
    const classes = useStyles();
    const sect = data.imageAndTextBlock
        .map(block => ({
            text: block.fields.text,
            image: block.fields.image.fields.file.url
        }));

    return (<Grid container>{sect.map((section, i) =>
            <TextImageSection section={section} reverse={i % 2}/>
        )}</Grid>)
}