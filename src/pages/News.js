import React, { useState } from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import imgWoman from '../assets/woman.jpg';

const styles = makeStyles({
  root: {
    margin: 18,
  },
  backgroundGlobal: {
    padding: 17,
    background: '#fff',
  },
  headTitle: {
    margin: 0,
    fontSize: 35,
    lineHeight: '39.9px',
  },
  subTitle: {
    margin: 0,
  },
  inputSearch: {
    fontFamily: 'Lato',
    background: '#ECECEC',
  },
  containerCarousel: {
    paddingTop: 0,
  },
  titleCarousel: {
    marginBottom: 10,
    padding: 0,
  },
  cardCarousel: {
    padding: 10,
    background: '#ECECEC',
    height: 80,
  },
  button: {
    position: 'relative',
    margin: 5,
  },
  arrowLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  arrowRigt: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  containerPost: {
    display: 'flex',
  },
  picPost: {
    flex: 1,
    background: `url(${imgWoman})`,
    backgroundSize: 'cover',
    height: '50vh',
  },
});

const Blogs = (props) => {
  const classes = styles(props);
  const [search, setSearch] = useState();
  return (
    <Container
      background={`url(${BackgroundImage})`}
      transparent={'none'}
    >
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} className={classes.backgroundGlobal}>
              <h1 className={`${classes.headTitle}`}>News</h1>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.backgroundGlobal}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                xs={12}
              >
                <Grid item xs={12} md={10}>
                  <TextField
                    className={classes.inputSearch}
                    id="outlined-search"
                    label="Search..."
                    type="search"
                    value={search}
                    variant="outlined"
                    size="small"
                    onChange={({ target }) => setSearch(target.value)}
                  />
                </Grid>
                <SearchIcon fontSize="large" />
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
              elevation={3}
              className={`${classes.backgroundGlobal} ${classes.containerCarousel}`}
            >
              <p className={classes.titleCarousel}>Upcoming Event</p>
              <div>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-around"
                >
                  <div className={classes.button}>
                    <RadioButtonUncheckedIcon />
                    <ChevronLeftIcon className={classes.arrowLeft} />
                  </div>
                  <Grid
                    container
                    spacing={4}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    md={11}
                  >
                    <Grid item xs={12} md={4}>
                      <Paper
                        elevation={0}
                        className={classes.cardCarousel}
                      >
                        DEC 9
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Paper
                        elevation={0}
                        className={classes.cardCarousel}
                      >
                        JAN 5
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Paper
                        elevation={0}
                        className={classes.cardCarousel}
                      >
                        FEB 13
                      </Paper>
                    </Grid>
                  </Grid>
                  <div className={classes.button}>
                    <RadioButtonUncheckedIcon />
                    <ChevronRightIcon className={classes.arrowRigt} />
                  </div>
                </Grid>
              </div>
            </Paper>
          </Grid>

          <Grid item md={8}>
            <Paper elevation={3} className={classes.backgroundGlobal}>
              <Grid item md={12}>
                <div className={classes.containerPost}>
                  <Paper className={classes.picPost}></Paper>
                </div>
                <h4 className={`${classes.subTitle}`}>
                  5 Tips to create better customer engagement
                </h4>
                <p>
                  Culpa qui culpa aliqua consectetur nostrud
                  adipisicing veniam quis commodo exercitation
                  consectetur dolor mollit. Minim nostrud cillum irure
                  amet adipisicing qui proident officia sint cillum
                  incididunt. Ut est labore ex anim laboris
                  reprehenderit eu reprehenderit pariatur. Eu cillum
                  sunt deserunt exercitation enim deserunt nulla
                  eiusmod anim exercitation deserunt proident id
                  minim. Velit tempor pariatur amet nisi anim dolore
                  voluptate dolore culpa amet mollit.
                </p>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Paper
                  elevation={3}
                  className={classes.backgroundGlobal}
                >
                  <h2 className={`${classes.subTitle}`}>
                    Latest Posts
                  </h2>
                </Paper>
              </Grid>
              <Grid item md={12}>
                <Paper
                  elevation={3}
                  className={classes.backgroundGlobal}
                >
                  <h2 className={`${classes.subTitle}`}>
                    Recommended Posts
                  </h2>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Blogs;
