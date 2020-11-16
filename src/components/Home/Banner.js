import React from 'react';
import { Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../Container';
import { makeStyles } from '@material-ui/core/styles';
import TypingAnimation from '../TypingAnimation';
import MainLogo from './MainLogo';

const useStyles = makeStyles((theme) => ({
  backgroundHead: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: '10vh',
    minHeight: '50vh',
    position: 'relative',
    '@media (max-width: 560px)': { height: '100%' },
  },
  mainLogo: {
    position: 'absolute',
    left: '5vw',
    top: '5vh',
  },
  typingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  arrowDown: {
    fontSize: '5em',
    color: '#000',
    margin: 0,
    padding: 0,
  },
  containerArrow: { position: 'absolute', bottom: -25 },
}));

const words = ['Diverse.', 'Secure.', 'Budget friendly.'];

export default ({ descriptionLanding }) => {
  const classes = useStyles({
    backgroundImage: descriptionLanding.backgroundImage.file.url,
  });
  return (
    <div className={classes.backgroundHead}>
      <MainLogo className={classes.mainLogo} />
      <Container
        innerBackground={'none'}
        innerPadding={'0'}
        partial
        className={classes.typingContainer}
      >
        <TypingAnimation words={words} />
      </Container>
      <Grid
        container
        justify="center"
        className={classes.containerArrow}
      >
        <a href="#work">
          <ExpandMoreIcon className={classes.arrowDown} />
        </a>
      </Grid>
    </div>
  );
};
