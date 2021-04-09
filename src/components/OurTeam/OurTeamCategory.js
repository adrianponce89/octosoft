import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Dialog, Typography } from '@material-ui/core';
import AvatarTeam from '../Avatar';
import OurTeamModal from './OurTeamModal';

const OurTeamCategory = ({ teamMembers, titleCategory }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const handleClose = () => {
    setSelectedMember(null);
  };
  return (
    <>
      <Grid container justify="center">
        <Typography variant="h2">{titleCategory}</Typography>
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
          />
        ) : (
          ''
        )}
      </Dialog>
    </>
  );
};

export default OurTeamCategory;
