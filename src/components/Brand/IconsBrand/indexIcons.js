import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconsCards from './iconsCards';
import IconsCardsRight from './iconsCardsRight';
import IconsMovie from './iconsMovie';
import ButtonAll from './buttonAll';
import TitleIcons from './titleIcons';
import trama from '../../../assets/Brand.png';

const IndexIcons = ({ logos }) => {
  const [logoFiles, setLogoFiles] = useState([]);

  useEffect(() => {
    let array = [];
    logos.forEach((logo) => {
      array.push(logo.image.file.url);
    });
    setLogoFiles(array);
  }, [logos]);

  const classes = useStyles();
  return (
    <Grid className={classes.root} xs={11} container justify="center">
      <TitleIcons title={'LOGOS'} sort={'Left'} />
      <IconsCards logos={logos} />
      <TitleIcons title={' NEGATIVE LOGOS'} sort={'Right'} />
      <IconsCardsRight logos={logos} />
      <TitleIcons title={' ANIMATED LOGO BEHAVIOUR'} sort={'Left'} />
      <IconsMovie logos={logos} />
      <Box className={classes.buttonAll}>
        <ButtonAll files={logoFiles} />
      </Box>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'fit-content',
    marginTop: '4rem',
    marginBottom: '1rem',
    backgroundImage: `url(${trama})`,
    backgroundPosition: 'left -65% top 60%',
    backgroundSize: '600px 600px',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 768px)': {
      backgroundImage: 'none',
      marginTop: '5rem',
    },
  },
  buttonAll: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    width: '100%',
  },
}));

export default IndexIcons;
