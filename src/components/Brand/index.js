import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TypographySection from './TypographySection/index'
import BrandHeader from './BrandHeader'

const Brand = () => {
    const classes = useStyles();
    return (
      <Grid
        item
        xs={12}
        container
        justify="center"
        className={classes.root}
      >
        <BrandHeader />
        <TypographySection />
      </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    root:{
        // height: 100,
    }
}))

export default Brand
