import React, { useState } from 'react';
import { Grid, Dialog, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AvatarTeam from '../Avatar';
import OurTeamModal from './OurTeamModal';

const useStyle = makeStyles({
  titleCategory: {
    fontFamily: 'Montserrat',
    color: '#858',
    fontSize: '2em',
    fontWeight: 600,
    margin: 12,
  },
});

const OurTeamCategory = ({ teamMembers, titleCategory }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const handleClose = () => {
    setSelectedMember(null);
  };
  const classes = useStyle();
  return (
    <>
      <Grid container justify="center">
        <Typography variant="h2" className={classes.titleCategory}>
          {titleCategory}
        </Typography>
      </Grid>
      <Grid container direction="row" justify="center">
        {teamMembers.map((member, i) => (
          <AvatarTeam
            key={i}
            name={member.node.name}
            title={member.node.title}
            section={member.node.section}
            background={`url(${member.node.photo.file.url})`}
            onClick={() => {
              setSelectedMember(member);
            }}
          />
        ))}
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={selectedMember !== null}
        maxWidth="lg"
      >
        {!!selectedMember ? (
          <OurTeamModal
            name={selectedMember.node.name}
            biography={selectedMember.node.biography}
            background={`url(${selectedMember.node.fullPhoto.file.url})`}
            onClose={handleClose}
            socialMedia={selectedMember.node.socialMedia}
          />
        ) : (
          ''
        )}
      </Dialog>
    </>
  );
};

export default OurTeamCategory;
