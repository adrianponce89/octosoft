import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import zIndex from '@material-ui/core/styles/zIndex';

const ItemPortfolio = ({ data }) => {
  const classes = useStyles();
  const { url } = data.porfolioBackground.file
  const { url: urlWide } = data.porfolioBackgorundWide.file
  const screen = window.innerWidth

  return (
    <div to={data.portfolioLink} className={classes.itemContainer} >
      <div className={classes.boxImg} data-descr={data.portfolioLink}>
        <img src={screen >= 769 ? url : urlWide} alt={data.newName} className={classes.img} />
      </div>
      <div className={classes.titleContainer}>
        <p className={classes.title} style={{ 'inlineSize': data.newName.length > 14 && screen >= 769 ? 'min-content' : 'max-content' }}>{data.newName}</p>
      </div>
      <div className={classes.tag} style={{ 'backgroundColor': data.newColor }}></div>
    </div >
  );
};
const useStyles = makeStyles((theme) => ({
  itemContainer: {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    transition: '0.5s ease-out',
    [theme.breakpoints.down('md')]: {

    },
  },
  titleContainer: {
    position: 'absolute',
    color: '#F5F5F5',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    contain: 'size',
    pointerEvents: 'none',
    margin: '-10px -30px',
    inlineSize: 'min-content',
    textAlign: 'left',
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
      writingMode: 'initial',
      transform: 'rotate(0)',
      margin: '-40px 50px',
      inlineSize: 'max-content !important',
      position: 'initial'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '-29px 10px',
    },
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: '1.2',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      margin: '-40px 50px',
      inlineSize: 'max-content'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      margin: '-29px 10px',
    },
  },
  img: {
    width: 'unset',
    position: 'absolute',
    top: '0',
    left: '-40% ',
    backgroundColor: 'black',
    mixBlendMode: 'multiply',
    transition: '0.5s ease-out',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-20px',
      position: 'initial',
      width: '100%'
    },
  },
  boxImg: {
    position: 'relative',
    height: '95%',
    overflow: 'hidden',
    backgroundColor: 'rgba(33,33,33,0.4)',
    '& img': {
      transition: '0.5s ease-out',
    },
    '&:hover img': {
      mixBlendMode: 'overlay',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      width: '98%',
      marginLeft: '2%'
    },
  },
  tag: {
    height: '5%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '2%',
      height: '250%',
      marginTop: '-60px'
    },
  },
}));
export default ItemPortfolio;
