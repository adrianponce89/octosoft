import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'gatsby';



const ServiceCard = ({ data }) => {
  //console.log(data);
  const classes = useStyles();
  const [isExpanded, setExpand] = useState(false)
  return (
    <Accordion className={classes.itemContainer} style={{ 'backgroundColor': data.newColor }} square onChange={() => setExpand(!isExpanded)}>
      <AccordionSummary
        className={classes.itemHeader}
        expandIcon={<ExpandMoreIcon style={{ color: '#FFF' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p className={classes.title}>{data.newName}</p>
        <Link to={`/portfolio/${data.category}`} className={classes.headerButton} style={{ visibility: isExpanded ? 'visible' : 'hidden' }}>BROWSE PORTFOLIO</Link>
      </AccordionSummary>
      <AccordionDetails className={classes.itemContent} style={{ backgroundImage: `url(${data.newLogo.file.url})` }}>
        <div className={classes.content} >
          <div>
            {
              data.categories === null ?
                'No categories loaded'
                :
                data.categories.map((category, index) => {
                  return (
                    <Typography key={category} variant="h5" className={classes.category}>
                      {
                        index === 0 ? `${category}` : `\u00A0- ${category}`
                      }
                    </Typography>
                  )
                })
            }
          </div>
          <p className={classes.text} style={{ marginBottom: '2.5rem' }}>
            {data.description}
          </p>
          <Link to={`/ourservices/subcategories?${data.title}`} className={classes.contentButton} style={{ backgroundColor: data.newColor }}>VIEW IN DETAIL</Link>
          <br />
          <Link to={`/portfolio/${data.category}`} className={classes.showInMobile} style={{ color: data.newColor, border: `1px solid ${data.newColor}` }}>BROWSE PORTFOLIO</Link>
          <div className={classes.tools}>
            {
              data.newTools === null ?
                'No tools loaded'
                :
                data.newTools.map((tool, index) => {
                  return (
                    <img key={tool.file.url} src={tool.file.url} alt={tool.file.url} className={`${classes.toolImage}`} />
                  )
                })
            }
          </div>
        </div>
      </AccordionDetails>
    </Accordion >
  );
};

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    boxShadow: '0px 8px 8px -4px #c4c4c4',
    transition: '0.5s ease-out',
    margin: '0px 0px !important',
    width: '100%',
    [theme.breakpoints.down('md')]: {
    },
  },
  itemHeader: {
    color: '#FFF',
    flexDirection: 'row-reverse',
    margin: '0px 30px !important',
    height: '50px',
    minHeight: 'unset !important',
    ['& .MuiAccordionSummary-content']: {
      justifyContent: 'space-between',
      margin: '0px 30px !important',
      minHeight: 'unset !important',
      transition: 'none',
      [theme.breakpoints.down('sm')]: {
        margin: '0px 15px !important',
      },
    },
    ['& .Mui-expanded']: {
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0px 5px !important',
    },
  },
  title: {
    fontSize: '30px',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    lineHeight: 'normal',
    alignSelf: 'center',
    margin: '0px 60px',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      margin: '0px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      margin: '0px 30px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      margin: '0px 0px',
    },
  },
  headerButton: {
    color: '#FFF',
    border: '1px solid rgb(255 255 255)',
    borderRadius: '4px',
    padding: '7px 20px',
    alignSelf: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      display: 'none',
      ['& .showInMobile']: {
        display: 'initial'
      }
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
  itemContent: {
    minHeight: '230px',
    backgroundColor: '#FFF',
    padding: '30px 52px 0px 52px',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundSize: '290px 265px',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      backgroundSize: '160px 150px'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '25px 25px 0 25px',
    },
    [theme.breakpoints.down('xs')]: {
    },
  },
  content: {
    flexDirection: 'column',
    width: '65%',
    [theme.breakpoints.down('md')]: {
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
    },
  },
  contentButton: {
    color: '#FFF',
    border: '1px solid rgb(255 255 255)',
    borderRadius: '4px',
    padding: '7px 45px',
    alignSelf: 'center',
    textDecoration: 'none',
    marginBottom: '30px',
    marginTop: '15px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
  serviceLogo: {
  },
  category: {
    color: '#999999',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
  text: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
  tools: {
    margin: '60px 0px 30px 0px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap'
    },
  },
  toolImage: {
    marginRight: '7px',
    [theme.breakpoints.down('xs')]: {
    },
  },
  showInMobile: {
    borderRadius: '4px',
    padding: '7px 30px',
    alignSelf: 'center',
    textDecoration: 'none',
    marginBottom: '30px',
    marginTop: '15px',
    display: 'none',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      display: 'inline-block',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
}));

export default ServiceCard;