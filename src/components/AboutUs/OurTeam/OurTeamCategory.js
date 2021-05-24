import React, { useState } from 'react';
import { Grid, Dialog, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AvatarTeam from '../../Avatar';
import OurTeamModal from './OurTeamModal';

const useStyle = makeStyles({
  titleCategory: {
    fontFamily: 'Poppins',
    color: '#663777',
    fontSize: '2em',
    fontWeight: 500,
    margin: 12,
  },
  dialog: { borderRadius: 16 },
});

const OurTeamCategory = ({ teamMembers, titleCategory, index }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const handleClose = () => {
    setSelectedMember(null);
  };
  const classes = useStyle();
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h2" className={classes.titleCategory}>
          {titleCategory}
        </Typography>
      </Grid>
      {index <= 0 ? (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          {teamMembers.map((member, i) => (
            <Grid item xs={12} sm={6} md={4}>
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
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          {teamMembers.map((member, i) => (
            <Grid item xs={12} sm={6}>
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
            </Grid>
          ))}
        </Grid>
      )}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={selectedMember !== null}
        maxWidth="lg"
        className={classes.dialog}
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
