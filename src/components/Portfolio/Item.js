import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const ItemPortfolio = ({ portfolio, title, link }) => {
  const { url } = portfolio;

  const classes = useStyles();
  return (
    <Link to={link} className={classes.link}>
      <div className={classes.boxImg} data-descr={link}>
        <img src={url} alt={title} className={classes.img} />
      </div>
    </Link>
  );
};
const useStyles = makeStyles((theme) => ({
  link: { textDecoration: 'none' },
  img: { width: '100%' },
  boxImg: {
    position: 'relative',
    '& img': {
      transition: '0.5s ease-out',
    },
    '&:hover img': {
      filter: 'drop-shadow(2px 4px 6px black)',
      width: '102%',
      height: '100%',
      [theme.breakpoints.down('xs')]: {
        width: '108%',
      },
    },
    '&:hover::after ,:focus::after': {
      content: 'attr(data-descr)',
      position: 'absolute',
      bottom: 4,
      width: '94%',
      height: '30%',
      textAlign: 'center',
      overflowWrap: 'anywhere',
      padding: '0 4%',
      borderRadius: '0 0 4px 4px',
      backgroundColor: '#00000061',
      color: theme.palette.common.white,
      fontSize: 16,
      lineHeight: '1.5',
      letterSpacing: '0.05rem',
      fontWeight: 600,
      fontFamily: 'Montserrat',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  },
}));
export default ItemPortfolio;
