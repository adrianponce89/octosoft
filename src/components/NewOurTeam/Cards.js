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
}) => {
  const classes = useStyles({ color, background });
  const [type, setType] = useState(false);
  useEffect(() => {
    length && length % 5 === 0 ? setType(true) : setType(false);
  }, [length]);
  const handleClickCard = (member) => {
    handleClick(member);
  };
  return (
    <div className={type ? classes.paperFive : classes.paper}>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.itemAvatar}
      >
        <Grid item xs={12} className={classes.iconAvatar} />
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
            xs={7}
            sm={8}
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
      </Grid>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  paperFive: {
    borderRadius: 16,
    width: '20%',
    margin: '3%',
    '@media (max-width: 768px)': {
      width: '100%',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
  },
  paper: {
    borderRadius: 16,
    margin: theme.spacing(4),
    width: '20%',
    '@media (max-width: 768px)': {
      width: '100%',
      margin: '0%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
  },
  itemAvatar: {
    padding: theme.spacing(4),
  },
  name: {
    width: '100%',
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '3vh',
    color: '#000000',
    textTransform: 'capitalize',
    '@media (max-width: 660px)': {
      fontSize: '2em',
    },
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#0024B5',
    width: '100%',
    fontSize: 20,
    '@media (max-width: 360px)': {
      fontSize: '5vw',
    },
  },
  section: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    width: '100%',
    fontSize: 18,
    textTransform: 'uppercase',
    color: ({ color }) => color || '#ECECEC',
    '@media (max-width: 360px)': {
      fontSize: '4vw',
    },
  },
  iconAvatar: {
    width: '100%',
    height: '100%',
    backgroundImage: ({ background }) => background || '#ECECEC',
    backgroundSize: ({ backgroundSize }) => backgroundSize || 'cover',
    backgroundPosition: ({ backgroundPosition }) =>
      backgroundPosition || 'center',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '100%',
  },
  descriptionAvatars: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    border: `0.2rem solid`,
    backgroundColor: 'transparent',
    borderColor: ({ color }) => color || '#ECECEC',
  },
  textButton: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#000000',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  containerButton: { margin: theme.spacing(4, 0, 2) },
}));

export default Cards;
