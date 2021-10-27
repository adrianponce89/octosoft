import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TypographySection from './TypographySection/index';
import BrandHeader from './BrandHeader';
import BrandSectionText from './BrandSectionText';
import Icons from './IconsBrand/indexIcons';
import Colors from './ColorsBrand/indexColors';
import EndSection from './BrandSectionText/sectionEnd';
import OctoOne from '../../assets/OctoBrandFirst.png';
import OctoTwo from '../../assets/OctoBrandSecond.png';
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
      <img src={OctoTwo} alt="" className={classes.octoTwo} />
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
    '@media (max-width: 768px)': {
      padding: 0,
    },
  },
  octoOne: {
    position: 'absolute',
    width: '500px',
    top: '4%',
    left: '8.5%',
    zIndex: '0',
  },
  octoTwo: {
    position: 'absolute',
    width: '500px',
    top: '80%',
    right: '8.5%',
    zIndex: '0',
  },
}));

export default Brand;
