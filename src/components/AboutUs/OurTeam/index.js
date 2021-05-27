import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import OurTeamCategory from './OurTeamCategory';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    borderRadius: 16,
  },
  headTitle: {
    color: ({ color }) => (color ? color : null),
    fontFamily: 'Poppins',
    fontSize: '3em',
    fontWeight: 800,
    marginBottom: theme.spacing(4),
    '@media (max-width: 576px)': {
      textAlign: 'center',
      fontSize: '2.5em',
    },
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: '#707070',
    marginBottom: theme.spacing(4),
    '@media (max-width: 576px)': {
      textAlign: 'center',
    },
  },
  divider: {
    backgroundColor: '#707070',
    height: 3,
    borderRadius: 50,
    width: '30%',
    marginBottom: theme.spacing(4),
  },
}));

const OurTeam = ({ teamMembers, color }) => {
  const classes = useStyle({ color });
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
    <Paper square elevation={1} className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h1" className={classes.headTitle}>
          The Octosoft Team
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          This is Us!
        </Typography>
        <Divider
          orientation="horizontal"
          className={classes.divider}
        />
      </Grid>
      <Grid container justify="center" alignItems="stretch">
        {sortTeamMembersCategory.map((teamMembersCategory, i) =>
          i <= 0 ? (
            <Grid item xs={12} sm={11}>
              <OurTeamCategory
                teamMembers={teamMembersCategory.teamMembers}
                titleCategory={teamMembersCategory.category}
                index={i}
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={6}>
              <OurTeamCategory
                teamMembers={teamMembersCategory.teamMembers}
                titleCategory={teamMembersCategory.category}
                index={i}
              />
            </Grid>
          ),
        )}
      </Grid>
    </Paper>
  );
};

export default OurTeam;
