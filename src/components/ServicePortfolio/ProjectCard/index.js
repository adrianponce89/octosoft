import React from 'react'
import {Link} from 'gatsby'
import BackgroundImage from '../../../assets/Version_Horizontal.png';
import { makeStyles } from '@material-ui/core/styles';

const ProjectCard = ({size = 1, title = "Project Title", subtitle = "Project subtitle", bannerUrl, category, id }) => {
    const classes = useStyle({ bannerUrl});
    return (
      <Link to={`/portfolio/${category}/${id}`}>
        <div
          className={
            size === 1
              ? classes.gridItem
              : size === 2
              ? classes.gridItem_width2
              : size === 3
              ? classes.gridItem_height2
              : size === 4
              ? classes.gridItem_width_height2
              : null
          }
        >
          <div className={classes.itemImage}>
            <h1 className={classes.itemTitle}>{title}</h1>
            <h2 className={classes.itemSubtitle}>{subtitle}</h2>
          </div>
        </div>
      </Link>
    );
}

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: '80px',
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
      width: '110%',
      marginTop: '40px',
      marginBottom: '40px',
      marginLeft: '-5%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0),
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  grid: {
    [theme.breakpoints.down('sm')]: {},
  },
  gridItem: {
    width: '32%',
    aspectRatio: '4/4',
    float: 'left',
    backgroundImage: ({ bannerUrl }) =>
      bannerUrl ? `url(${bannerUrl})` : `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'rgb(220, 114, 153)',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '200ms ease-in-out',
    '&:hover': {
      mixBlendMode: 'soft-light',
    },
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  gridItem_width2: {
    width: '64%',
    aspectRatio: '4/2',
    float: 'left',
    backgroundImage: ({ bannerUrl }) =>
      bannerUrl ? `url(${bannerUrl})` : `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '500ms all ease-in-out',
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    '&:hover': {
      mixBlendMode: 'soft-light',
    },

    [theme.breakpoints.down('sm')]: {},
  },
  gridItem_height2: {
    width: '32%',
    height: '50vw',
    aspectRatio: '4/2',
    float: 'left',
    backgroundImage: ({ bannerUrl }) =>
      bannerUrl ? `url(${bannerUrl})` : `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'rgb(220, 114, 153)',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '200ms ease-in-out',
    '&:hover': {
      mixBlendMode: 'soft-light',
    },
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  gridItem_width_height2: {
    width: '64%',
    height: '50vw',
    aspectRatio: '4/4',
    float: 'left',
    backgroundImage: ({ bannerUrl }) =>
      bannerUrl ? `url(${bannerUrl})` : `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    background: 'rgb(220, 114, 153)',
    borderColor: 'hsla(0, 0%, 0%, 0.5)',
    borderRadius: '8px',
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    mixBlendMode: 'normal',
    transition: '200ms ease-in-out',
    '&:hover': {
      mixBlendMode: 'soft-light',
    },
    '& div': {
      color: 'transparent',
    },
    '&:hover div': {
      color: '#303030',
    },
    [theme.breakpoints.down('sm')]: {},
  },
  itemImage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  itemTitle: {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '5px 0',
    transition: '200ms all ease-in-out',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5rem',
      color: '#303030',
      textAlign: 'center',
      lineHeight: 'normal',
      margin: ' 0 2.5px',
    },
  },
  itemSubtitle: {
    fontSize: '1rem',
    margin: '5px 0',
    fontWeight: 400,
    transition: '200ms all ease-in-out',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.3rem',
      color: '#303030',
      textAlign: 'center',
    },
  },
}));

export default ProjectCard
