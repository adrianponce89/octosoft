import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import '../App.css';
import { services } from '../SERVICES';
import HeroImage from '../assets/header_cropped.png';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles((theme) => ({
  expander: {
    alignSelf: 'flex-end',
    margin: '20vh',
  },
  container: {
    height: '100vh',
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  workTitle: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
}));

export const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.expander}>
          <a href="#work">
            <ExpandMoreIcon />
          </a>
        </div>
      </div>
      <section id="work">
        <Box mx={8} style={{ minHeight: '100vh' }}>
          <Box my={10} className={classes.workTitle}>
            <Typography
              variant={'h3'}
              style={{
                fontWeight: 'bold',
                fontSize: `${isSmall ? 'x-large' : 'xxx-large'}`,
              }}
            >
              WORK WITH US
            </Typography>
          </Box>
          <Grid
            container
            spacing={isSmall ? 0 : 10}
            justify="center"
            alignItems="center"
          >
            {services.map((service) => (
              <Grid item xs={12} sm={12} md={8} lg={5}>
                <Box my={2}>
                  <Card>
                    <CardActionArea href={`/${service.url}`}>
                      <CardMedia
                        component="img"
                        alt="//TODO"
                        image={service.image}
                        title={`Octosoft ${service.title}`}
                      />
                    </CardActionArea>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
    </div>
  );
};
