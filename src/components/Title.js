import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const Title = ({ name, categories, color, size='5.5rem', marginTop='40px', subcategory=null }) => {
  const classes = useStyles({ color, size, marginTop });
  console.log(categories, subcategory)

  return (
    <Box className={classes.root}>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems='center'
        direction='column'
        className={classes.box}
      >
        <Typography variant="h5" className={classes.titleCard}>
          {name ?? 'Service Title'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="center"
        className={classes.box}
      >
        {
          //Este condicional es un parche hasta que se acomode el contenido de services en contentful
          categories === null ?
            'Service Category'
            :
            //Esto es lo que debería renderizar las categorías (en este momento están mal escritas o son diferentes en contentful)
            categories.map((category, index) =>{
              let categoryArr = category.split(' ')
              let categoryString = categoryArr.join('')
              console.log(categoryString.toLowerCase())
                return (
                  <Typography variant="h5" className={categoryString.toLowerCase() === subcategory ? [classes.color, classes.subtitle] : [classes.subtitle]}>
                    {
                      index === categories.length - 1 ? index === 0 ? ` ${category} - ` : `${category}` : ` ${category} -`

                    }
                  </Typography>
                )
              })
        }
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    marginTop: ({marginTop}) => marginTop ? marginTop : theme.spacing(8),
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(7),
      marginTop: theme.spacing(7),
    },
    [theme.breakpoints.down('sm')]: {
      //padding: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  },
  box: { zIndex: 3 },
  media: {
    height: '100%',
    width: '100%',
  },
  color:{
	color: ({ color }) => color ?? '#999999',
  },
  titleCard: {
    color: ({ color }) => color ?? '#8249DC',
    fontSize: '4.68rem' ,
    fontWeight: 900,
    fontFamily: 'Montserrat',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: '1.5rem',
      marginBottom: theme.spacing(1),
    },
  },
  subtitle: {
    color: '#999999',
	marginRight: theme.spacing(1),
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  }
}));

export default Title;
