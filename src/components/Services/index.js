import React, { useState, useEffect } from 'react';

import { useNavigate } from '@reach/router';
import { Grid } from '@material-ui/core';
import HeadOurServices from './HeadOurServices';
import ItemService from './ItemService';
import ViewerService from './ViewerService';

const Services = ({
  services,
  selected,
  title,
  subtitle,
  image,
  colorTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();

  const selectService = (s) => {
    const newIndex = services.findIndex(
      (v) => v.node.title.toLowerCase() === s.toLowerCase(),
    );
    if (newIndex >= 0) {
      setSelectedIndex(newIndex);
    }
  };

  useEffect(() => {
    if (selected) {
      selectService(selected);
    }
  });

  return (
    <Grid item xs={12} container justify="center">
      <HeadOurServices
        title={title}
        subtitle={subtitle}
        backgroundImage={image}
        color={colorTitle}
        right
      />
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
                navigate(`/ourservices#${node.title.toLowerCase()}`);
              }}
            >
              <ItemService
                node={node}
                selectedIndex={selectedIndex}
              />
            </Grid>
          ))}
      </Grid>
      {services.length > 0 ? (
        <ViewerService service={services[selectedIndex]} />
      ) : null}
    </Grid>
  );
};

export default Services;
