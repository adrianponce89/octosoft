import React, {useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Template} from "../template";
import {fetchFromContentfulByContentType} from "../../Contentful";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const useStyles = makeStyles(theme => ({
    testimony: {
        margin: theme.spacing(10),
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
    },
    textBox: {
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        display: "flex",
        flexDirection: 'column',
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'space-evenly',
    },
    text: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(4),
    },
    avatar: {
        height: '200px',
        width: '200px',
    },
    centered: {
        display: "flex",
        justifyContent: 'center',
    }
}));

export const Testimonies = () => {
    const [data, setData] = React.useState({});
    const classes = useStyles();
    useEffect(() => {
            fetchFromContentfulByContentType('testimony', setData)
        }, []
    )

    return (
        <Template headerTitle={'Testimonies'} innerTitle={'TESTIMONIES'}>
            {data.length && data.map(({fields}) =>
                <Paper className={classes.testimony}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} md={4} sm={12} xs={12} className={classes.centered}>
                            <Avatar className={classes.avatar}
                                    alt={fields.photo.fields.description}
                                    src={fields.photo.fields.file.url}/>
                        </Grid>
                        <Grid item lg={9} md={8} sm={12} xs={12}>
                            <Box className={classes.textBox}>
                                <FormatQuoteIcon fontSize={'large'}/>
                                <Typography className={classes.text}>
                                    {fields.text}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </Template>
    )
};
