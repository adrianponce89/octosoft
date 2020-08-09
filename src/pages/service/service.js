import React, {useEffect, useState} from "react";
import {ServiceBody} from "./ServiceBody";
import {fetchFromContentful} from "../../Contentful";
import {makeStyles} from '@material-ui/core/styles';
import {Template} from "../template";

const useStyles = makeStyles(theme => ({
    }));

export const Service = ({service}) => {
    const [data, setData] = useState();
    const classes = useStyles();
    const contentfulId = service.id;

    useEffect(() => {
            fetchFromContentful(contentfulId, setData)
        }, [contentfulId]
    )


    return (<>
            {data &&
            <Template headerTitle={data.headerText} innerTitle={'ABOUT US'}>
                <ServiceBody data={data}/>
            </Template>
            }
        </>
    )
};
