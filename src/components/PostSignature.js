import React from 'react';
import { Link } from 'gatsby';

import { Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReplyIcon from '@material-ui/icons/Reply';

const styles = makeStyles({
  root: {},
  firm: {
    color: '#6e6e6e',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '1em',
  },
  link: {
    textDecoration: 'none',
  },
  avatar: { marginRight: 8 },
});

const PostSignature = ({ linkFirm, firm, imgAvatarUrl }) => {
  const classes = styles();
  return (
    <Link to={linkFirm} className={classes.link}>
      <Grid container alignItems="center">
        <Avatar src={imgAvatarUrl} className={classes.avatar} />
        <Typography variant="subtitle2" className={classes.firm}>
          {'More From '}
          {firm}
          <ReplyIcon fontSize="small" />
        </Typography>
      </Grid>
    </Link>
  );
};

export default PostSignature;
