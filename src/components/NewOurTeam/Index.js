import React, { useState } from 'react';
import Background from '../Background';
import { Typography, Grid, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';
import Title from './Title';
import PopUp from './PopUp';

const NewOurTeam = ({ teamMembers }) => {
  const classes = useStyles();
  const [member, setMember] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const executives = teamMembers.filter(
    (item) => item.node.category === 'Executive Partners',
  );
  const seniors = teamMembers.filter(
    (item) => item.node.category === 'Senior Partners',
  );
  const juniors = teamMembers.filter(
    (item) => item.node.category === 'Junior Partners',
  );
  const associates = teamMembers.filter(
    (item) => item.node.category === 'Associates',
  );
  const handleClick = (member) => {
    let selected = teamMembers.find(
      (item) => item.node.name === member,
    );
    setMember(selected);
    setShowPopUp(true);
  };

  const handleClose = () => {
    setShowPopUp(false);
  };

  return (
    <Grid
      item
      xs={12}
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Background />
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          item
          xs={12}
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.titleContainer}
        >
          <Typography variant="h5" className={classes.mainTitle}>
            Our Team
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            OCTOSOFT PROFESSIONAL
          </Typography>
        </Grid>
        <div className={classes.divFather}>
          <Title title={'Executive Partners'} color="#37ADD4" />
          <div className={classes.divContainer}>
            {executives &&
              executives.map((member, index) => (
                <Cards
                  key={index}
                  name={member.node.name}
                  section={member.node.section}
                  length={executives.length}
                  background={`url(${member.node.photo.file.url})`}
                  color="#37ADD4"
                  handleClick={handleClick}
                />
              ))}
          </div>
          <Title title={'Senior Partners'} color="#37D4AD" />
          <div className={classes.divContainer}>
            {seniors &&
              seniors.map((member, index) => (
                <Cards
                  key={index}
                  length={seniors.length}
                  name={member.node.name}
                  section={member.node.section}
                  background={`url(${member.node.photo.file.url})`}
                  color="#37D4AD"
                  handleClick={handleClick}
                />
              ))}
          </div>
          <Title title={'Junior Partners'} color="#FF9F3B" />
          <div className={classes.divContainer}>
            {juniors &&
              juniors.map((member, index) => (
                <Cards
                  key={index}
                  name={member.node.name}
                  section={member.node.section}
                  length={juniors.length}
                  background={`url(${member.node.photo.file.url})`}
                  color="#FF9F3B"
                  handleClick={handleClick}
                />
              ))}
          </div>
          <Title title={'Associates'} color="#D437AD" />
          <div className={classes.divContainer}>
            {associates &&
              associates.map((member, index) => (
                <Cards
                  key={index}
                  name={member.node.name}
                  length={associates.length}
                  section={member.node.section}
                  background={`url(${member.node.photo.file.url})`}
                  color="#D437AD"
                  handleClick={handleClick}
                />
              ))}
          </div>
        </div>
        {showPopUp ? (
          <Dialog
            open={member !== null}
            className={classes.popup}
            maxWidth="false"
            >
            <PopUp
              name={member.node.name}
              biography={
                member.node.biography.json.content[0].content
              }
              expertise={
                member.node.expertise.json.content[0].content
              }
              section={member.node.title}
              background={`url(${member.node.fullPhoto.file.url})`}
              onClose={handleClose}
              socialMedia={member.node.socialMedia}
              popup={setShowPopUp}
              member={setMember}
            />
          </Dialog>
        ) : null}
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '10rem',
    '@media (max-width: 760px)': {
      marginTop: '7rem',
    },
  },
  divFather: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  divContainer: {
    display: 'flex',
    width: '80%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      width: '90%',
    },
  },
  titleContainer: {
    marginBottom: theme.spacing(9),
  },
  cardContainer: {
    width: '100%',
    columnGap: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
  mainTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: 119,
    color: '#8249DC',
    zIndex: '1',
    '@media (max-width: 760px)': {
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      justifyContent: 'center',
      fontSize: 50,
    },
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 30,
    color: '#000000',
    '@media (max-width: 760px)': {
      fontSize: 24,
    },
  },
  popup: {
    zIndex: '2',
    width: '100%',
    height: '100%',
  },
}));

export default NewOurTeam;
