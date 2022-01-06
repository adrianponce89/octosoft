import React, { useState } from 'react';
import Background from '../Background';
import { Grid, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';
import Title from './Title';
import PopUp from './PopUp';
import TitleComponent from '../TitleComponent/index';
import Executive from '../../assets/Executive.png';
import Junior from '../../assets/Junior.png';
import Associates from '../../assets/Associates.png';
import Senior from '../../assets/Senior.png';
const NewOurTeam = ({ teamMembers }) => {
  const classes = useStyles();
  const [member, setMember] = useState(null);

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
  };

  const handleClose = () => {
    setMember(null);
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
        <TitleComponent title="Our Team" />
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
                  photoNoBackground={`url(${member.node.photoNoBackground.file.url})`}
                  color="#37ADD4"
                  handleClick={handleClick}
                  octogone={`url(${Executive})`}
                  hover={`url(${member.node.hover.file.url})`}
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
                  photoNoBackground={`url(${member.node.photoNoBackground.file.url})`}
                  color="#37D4AD"
                  handleClick={handleClick}
                  octogone={`url(${Senior})`}
                  hover={`url(${member.node.hover.file.url})`}
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
                  photoNoBackground={`url(${member.node.photoNoBackground.file.url})`}
                  color="#FF9F3B"
                  handleClick={handleClick}
                  octogone={`url(${Junior})`}
                  hover={`url(${member.node.hover.file.url})`}
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
                  photoNoBackground={`url(${member.node.photoNoBackground.file.url})`}
                  color="#D437AD"
                  handleClick={handleClick}
                  octogone={`url(${Associates})`}
                  hover={`url(${member.node.hover.file.url})`}
                />
              ))}
          </div>
        </div>
        <Dialog
          onClose={handleClose}
          open={member !== null}
          className={classes.popup}
          maxWidth={'xl'}
          alignItems="center"
          justify="center"
        >
          {member && (
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
              member={setMember}
            />
          )}
        </Dialog>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: '10rem',
    backgroundColor: '#F5F7F7',
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
    marginTop: '0rem',
    marginBottom: '3rem',
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
  popup: {
    zIndex: '2',
    display: 'flex',
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1800px)': {
      width: '100%',
      margin: '0',
    },
  },
}));

export default NewOurTeam;
