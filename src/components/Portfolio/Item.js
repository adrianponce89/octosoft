import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ItemPortfolio = ({ portfolio, title, link }) => {
  const { url } = portfolio;
  const classes = useStyles({ link: title });
  return (
    <div className={classes.boxImg} data-descr={title}>
      <img src={url} alt={title} className={classes.img} />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  img: {
    display: 'flex',
    flex: 1,
    zIndex: 1,
  },
  boxImg: {
    position: 'relative',
    '& img': {
      transition: '0.5s ease-out',
    },
    '&:hover img': {
      filter: 'drop-shadow(2px 4px 6px black)',
      width: '103%',
      height: '100%',
    },
    '&:hover::after ,:focus::after': {
      content: 'attr(data-descr)',
      position: 'absolute',
      bottom: 0,
      width: '103%',
      height: '50%',
      textAlign: 'center',
      backgroundColor: '#00000061',
      color: theme.palette.common.white,
      fontSize: 20,
      letterSpacing: '0.15rem',
      fontWeight: 600,
      fontFamily: 'Montserrat',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
export default ItemPortfolio;
