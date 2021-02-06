import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Dialog } from '@material-ui/core';
import AvatarTeam from '../Avatar';
import OurTeamModal from './OurTeamModal';

const styles = makeStyles({
  headTitle: {
    fontSize: 64,
    textAlign: 'center',
    color: '#888',
    fontWeight: 900,
  },
});

const OurTeam = ({ teamMembers }) => {
  const classes = styles();
  console.log('teamMembers :>> ', teamMembers);

  const [selectedMember, setSelectedMember] = useState(null);

  const handleClose = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Team</h1>
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
            background={`url(${selectedMember.node.photo.file.url})`}
            onClose={handleClose}
          />
        ) : (
          ''
        )}
      </Dialog>
    </>
  );
};

export default OurTeam;
