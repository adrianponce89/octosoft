import React, { useState } from 'react';

import { useNavigate } from '@reach/router';
import { Grid } from '@material-ui/core';

import { ListOfWords, selectedCategory } from '../../utils';

import HeadOurServices from './HeadOurServices';
import ItemService from './ItemService';
import ViewerService from './ViewerService';

const Services = ({
  services,
  category,
  selected,
  title,
  subtitle,
  image,
  colorTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryShow, setCategoryShow] = useState(false);

  const selectService = (s) => {
    setCategoryShow(false);
    const newIndex = services.findIndex(
      (v) => v.node.title.toLowerCase() === s.toLowerCase(),
    );
    setSelectedCategories(
      selectedCategory(services[newIndex], category),
    );
    if (newIndex >= 0) {
      setSelectedIndex(newIndex);
    }
  };

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
              }}
            >
              <ItemService
                node={node}
                selectedIndex={selectedIndex}
              />
            </Grid>
          ))}
      </Grid>
      <ViewerService
        words={ListOfWords(services)}
        categories={selectedCategories}
        categoryShow={categoryShow}
        setCategoryShow={setCategoryShow}
      />
    </Grid>
  );
};

export default Services;
