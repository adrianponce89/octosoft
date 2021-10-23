import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icons from './IconsBrand/indexIcons';
import Colors from './ColorsBrand/indexColors';
import TypographySection from './TypographySection/index';
import BrandHeader from './BrandHeader';
const Brand = ({ logos, colors }) => {
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
      <Icons logos={logos} />
      <Colors colors={colors} />
      <TypographySection />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    padding: theme.spacing(0, 15),
    '@media (max-width: 768px)': {
      padding: 0,
    },
  },
}));

export default Brand;
