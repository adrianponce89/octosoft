import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconsCards from './iconsCards';
import IconsCardsRight from './iconsCardsRight';
import IconsMovie from './iconsMovie';
import ButtonAll from './buttonAll';
import TitleIcons from './titleIcons';

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
      <TitleIcons title={'LOGOS 3D'} sort={'Left'} />
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
    '@media (max-width: 768px)': {
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
