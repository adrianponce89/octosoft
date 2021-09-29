import React from 'react';
import { Grid } from '@material-ui/core';

import ItemService from './ItemService';

const index = ({ services, selectedIndex, selectService }) => {
  return (
    <Grid item container justify="center">
      {services
        .filter(({ node }) => node.order >= 0)
        .map(({ node }, i) => (
          <Grid
            item
            xs={6}
            md={3}
            container
            justify="center"
            alignItems="center"
            key={i}
            onClick={() => {
              selectService(node.title.toLowerCase());
            }}
          >
            <ItemService node={node} selectedIndex={selectedIndex} />
          </Grid>
        ))}
    </Grid>
  );
};

export default index;
