import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconsCards from './iconsCards';
import IconsCardsRight from './iconsCardsRight';
import IconsMovie from './iconsMovie';
import ButtonAll from './buttonAll';
import TitleIcons from './titleIcons';
import trama from '../../../assets/VectorMid.png';

const IndexIcons = ({ logos }) => {

  const classes = useStyles();
  return (
    <Grid className={classes.root} xs={11} container justify="center">
      <img src={trama} alt='' className={classes.backgroundImage} />
      <TitleIcons title={'LOGOS'} sort={'Left'} />
      <IconsCards logos={logos} />
      <TitleIcons title={' NEGATIVE LOGOS'} sort={'Right'} />
      <IconsCardsRight logos={logos} />
      <TitleIcons title={'3D LOGOS'} sort={'Left'} />
      <IconsMovie logos={logos} />
      <Box className={classes.buttonAll}>
        <ButtonAll />
      </Box>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  backgroundImage:{
    position:'absolute',
    left:'8.5%',
    top:'25%',
    zIndex:'0'
  },
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
