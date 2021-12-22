import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Cards = ({
  index,
  color,
  background,
  name,
  title,
  section,
  length,
  handleClick,
  photoNoBackground,
  octogone,
  hover,
}) => {
  const classes = useStyles({
    color,
    background,
    photoNoBackground,
    octogone,
    hover,
  });
  const [type, setType] = useState(false);
  useEffect(() => {
    length && length % 5 === 0 ? setType(true) : setType(false);
  }, [length]);
  const handleClickCard = (member) => {
    handleClick(member);
  };
  return (
    <div className={type ? classes.paperFive : classes.paper}>
      <div
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.itemAvatar}
      >
        <div className={classes.octogane}>
          <div
            className={classes.iconAvatar}
            onClick={() => handleClickCard(name)}
          />
        </div>
        <Grid
          container
          justify="center"
          alignContent="center"
          className={classes.descriptionAvatars}
        >
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.section}>
            {section}
          </Typography>
          <Grid
            item
            justify="center"
            alignItems="center"
            xs={6}
            className={classes.containerButton}
          >
            <Button
              variant="contained"
              fullWidth
              className={classes.button}
              onClick={() => handleClickCard(name)}
            >
              <Typography
                variant="caption"
                className={classes.textButton}
              >
                Profile
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  paperFive: {
    display: 'flex',
    width: '23%',
    margin: '3%',
    marginTop: '0rem',
    height: '100%',
    '@media (max-width: 1400px)': {
      width: '40%',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
    '@media (max-width: 1024px)': {
      width: '100%',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
  },
  paper: {
    display: 'flex',
    margin: theme.spacing(3),
    width: '23%',
    height: '100%',
    '@media (max-width: 1400px)': {
      width: '40%',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
    '@media (max-width: 1024px)': {
      width: '100%',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
  },
  itemAvatar: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  octogane: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: ({ octogone }) => octogone || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '310px 325px',
  },
  iconAvatar: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: ({ photoNoBackground }) =>
      photoNoBackground || '#ECECEC',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '305px 320px',
    paddingBottom: '100%',
    zIndex: 1,
    '&:hover': {
      backgroundImage: ({ hover }) => hover || '#ECECEC',
      cursor: 'pointer',
    },
  },
  name: {
    width: '100%',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '2.3vh',
    color: '#000000',
    marginTop: '1rem',
    textTransform: 'capitalize',
    '@media (max-width: 768px)': {
      fontSize: '2em',
    },
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#0024B5',
    width: '100%',
    fontSize: 20,
    '@media (max-width: 768px)': {
      fontSize: '5vw',
    },
  },
  section: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    width: '100%',
    fontSize: '2.3vh',
    textTransform: 'uppercase',
    color: ({ color }) => color || '#ECECEC',
    '@media (max-width: 768px)': {
      fontSize: '4vw',
    },
  },
  descriptionAvatars: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    border: `0.2rem solid`,
    backgroundColor: '#FFFFFF',
    marginTop: '0.5rem',
    borderColor: ({ color }) => color || '#ECECEC',
  },
  textButton: {
    fontFamily: 'Montserrat',
    fontWeight: 550,
    color: '#000000',
    fontSize: '2.3vh',
    textTransform: 'uppercase',
  },
  containerButton: { margin: theme.spacing(4, 0, 2) },
}));

export default Cards;
