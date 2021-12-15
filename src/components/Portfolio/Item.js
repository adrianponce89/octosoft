import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import zIndex from '@material-ui/core/styles/zIndex';

const ItemPortfolio = ({ data }) => {
  const classes = useStyles();
  const { url } = data.node.porfolioBackground.file
  const { url: urlWide } = data.node.porfolioBackgorundWide.file
  const screen = window.innerWidth
  console.log(screen >= 769 ? urlWide : url);
  return (
    <div to={data.portfolioLink} className={classes.itemContainer} style={{ 'backgroundColor': data.node.color }} >
      <div className={classes.boxImg} data-descr={data.portfolioLink}>
        <img src={screen >= 769 ? url : urlWide} alt={data.node.title} className={classes.img} />
      </div>
      <p className={classes.title}>{data.node.title}</p>
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
  title: {
    position: 'absolute',
    color: '#F5F5F5',
    writingMode: 'vertical-rl',
    fontSize: '2rem',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    transform: 'rotate(180deg)',
    pointerEvents: 'none',
    margin: '-340px 0',
    height: '380px',
    lineHeight: '1.2',
    inlineSize: 'min-content',
    textAlign: 'right',
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      writingMode: 'initial',
      transform: 'rotate(0)',
      height: 'initial',
      margin: '-40px 50px',
      textAlign: 'left',
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
    //transform: 'scale(0.9)',
    top: '0',
    left: '-85% ',
    [theme.breakpoints.down('sm')]: {
      left: '0',
      top: '-470%',
      transform: 'scale(1)'
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
}));
export default ItemPortfolio;
