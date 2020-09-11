import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import HeroImage from '../assets/header_cropped.png';

const useStyles = makeStyles((theme) => ({
  expander: {
    alignSelf: 'flex-end',
    margin: '20vh',
  },
  container: {
    height: '100vh',
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  workTitle: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.expander}>
          <a href="#work">
            <ExpandMoreIcon />
          </a>
        </div>
      </div>
      <section id="work">
        <Box mx={8} style={{ minHeight: '100vh' }}>
          <Box my={10} className={classes.workTitle}>
            <Typography
              variant={'h3'}
              style={{
                fontWeight: 'bold',
                fontSize: `${isSmall ? 'x-large' : 'xxx-large'}`,
              }}
            >
              WORK WITH US
            </Typography>
          </Box>
        </Box>
      </section>
    </div>
  );
};
