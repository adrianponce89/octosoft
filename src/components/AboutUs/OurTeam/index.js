import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

import { sortGroupTeamMembersCategories } from '../../../utils';
import OurTeamCategory from './OurTeamCategory';

const OurTeam = ({ teamMembers, color }) => {
  const classes = useStyle({ color });
  const sortTeamMembersCategory =
    sortGroupTeamMembersCategories(teamMembers) ?? [];

  return (
    <Paper square elevation={1} className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h3" className={classes.headTitle}>
          Get to know us!
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="stretch">
        {sortTeamMembersCategory.map((teamMembersCategory) => (
          <OurTeamCategory
            teamMembers={teamMembersCategory.teamMembers}
            titleCategory={teamMembersCategory.category}
            index={0}
          />
        ))}
      </Grid>
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    borderRadius: 16,
  },
  headTitle: {
    color: ({ color }) => color ?? null,
    fontFamily: 'Poppins',
    fontSize: '3rem',
    textShadow: '3px 3px 0px #cac6c7',
    fontWeight: 500,
    marginBottom: theme.spacing(4),
    '@media (max-width: 576px)': {
      textAlign: 'center',
      fontSize: '2.5rem',
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

export default OurTeam;
