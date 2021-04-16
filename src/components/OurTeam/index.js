import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import OurTeamCategory from './OurTeamCategory';

const styles = makeStyles({
  headTitle: {
    fontSize: '4em',
    textAlign: 'center',
    color: '#888',
    fontWeight: 900,
    lineHeight: '1em',
  },
});

const OurTeam = ({ teamMembers }) => {
  const classes = styles();
  const sortTeamMembersCategory = [];
  const titleTypeCategorySet = new Set();

  teamMembers.forEach((member) => {
    titleTypeCategorySet.add(member.node.category);
  });

  titleTypeCategorySet.forEach((value) => {
    sortTeamMembersCategory.push({
      category: value,
      teamMembers: teamMembers.filter(
        (member) => member.node.category === value,
      ),
    });
  });

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <h1 className={classes.headTitle}>Our Team</h1>
      </Grid>
      <Grid container justify="center" alignItems="center">
        {sortTeamMembersCategory.map((teamMembersCategory) => (
          <OurTeamCategory
            teamMembers={teamMembersCategory.teamMembers}
            titleCategory={teamMembersCategory.category}
          />
        ))}
      </Grid>
    </>
  );
};

export default OurTeam;
