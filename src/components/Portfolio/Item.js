import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import zIndex from '@material-ui/core/styles/zIndex';

const ItemPortfolio = ({ data }) => {
  const { url } = data.porfolioBackground.file
  const { url: urlWide } = data.porfolioBackgorundWide.file
  const titleLength = data.newName.length
  const classes = useStyles({ url, urlWide, titleLength });

  return (
    <div to={data.portfolioLink} className={classes.itemContainer} >
      <div className={classes.boxImg} data-descr={data.portfolioLink}>
        <div className={classes.img} />
      </div>
      <div className={classes.titleContainer}>
        <p className={classes.title} >{data.newName}</p>
      </div>
      <div className={classes.tag} style={{ 'backgroundColor': data.newColor }}></div>
    </div >
  );
};
const useStyles = makeStyles((theme, url, urlWide, titleLength) => ({
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
    margin: '-10px -25px',
    inlineSize: 'min-content',
    textAlign: 'left',
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
      writingMode: 'initial',
      transform: 'rotate(0)',
      margin: '-40px 50px',
      inlineSize: ({ titleLength }) => titleLength < 14 ? 'max-content !important' : 'min-content',
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
    inlineSize: ({ titleLength }) => titleLength < 14 ? 'max-content' : 'min-content',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
      margin: '-45px -25px',
      inlineSize: 'max-content !important'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      margin: '-29px 10px',
    },
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0% ',
    backgroundImage: ({ url }) => `url(${url})` ?? '#474747',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'color-burn',
    transition: '0.5s ease-out',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: ({ urlWide }) => `url(${urlWide})` ?? '#474747',
      backgroundSize: 'cover',
      marginTop: '0px',
      position: 'initial',
      width: '100%',
    },
  },
  boxImg: {
    position: 'relative',
    height: '95%',
    overflow: 'hidden',
    backgroundColor: 'rgba(33,33,33,0.55)',
    transition: '50ms ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(33,33,33,0.2)',
    },
    '& img': {
      transition: '0.5s ease-out',
    },
    '&:hover img': {
      mixBlendMode: 'multiply',
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
      marginTop: '-75px'
    },
  },
}));
export default ItemPortfolio;
