import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TypographySection from './TypographySection/index';
import BrandHeader from './BrandHeader';
import BrandSectionText from './BrandSectionText';
import Icons from './IconsBrand/indexIcons';
import Colors from './ColorsBrand/indexColors';
import EndSection from './BrandSectionText/sectionEnd';
import OctoOne from '../../assets/OctoOne.png';
import OctoThree from '../../assets/VectorStart.png';
const Brand = ({
  logos,
  colors,
  identityInfo,
  legalInfo,
  titles,
}) => {
  const {
    description: { description },
    title,
  } = legalInfo;
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      className={classes.root}
    >
      <img src={OctoOne} alt="" className={classes.octoOne} />
      <img src={OctoThree} alt="" className={classes.OctoThree} />
      <BrandHeader titles={titles} />
      <Icons logos={logos} />
      <Colors colors={colors} />
      <TypographySection />
      <BrandSectionText
        title="IDENTITY GUIDELINES"
        haveList
        listItems={identityInfo}
      />
      <EndSection title={title} text={description} />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    backgroundColor: '#F5F7F7',
    '@media (max-width: 960px)': {
      padding: 0,
    },
  },
  octoOne: {
    position: 'absolute',
    width: '700px',
    top: '30%',
    left: '-7%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
 
  OctoThree: {
    position: 'absolute',
    top: '8%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  OctoFour: {
    position: 'absolute',
    bottom: '-190%',
    left: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
  OctoFive: {
    position: 'absolute',
    bottom: '-579%',
    right: '0%',
    zIndex: '0',
    '@media (max-width: 960px)': {
      display: 'none',
    },
  },
}));

export default Brand;
