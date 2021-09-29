import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import {
  ListOfWords,
  selectedCategory,
  FindIndex,
} from '../../utils';

import HeadOurServices from './HeadOurServices';
import ButtonPanelServices from './ButtonPanel';
import ViewerService from './ViewerService';

const Services = ({
  services,
  category,
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
    setSelectedCategories(
      selectedCategory(services[FindIndex(services, s)], category),
    );
    if (FindIndex(services, s) >= 0) {
      setSelectedIndex(FindIndex(services, s));
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
      <ButtonPanelServices
        services={services}
        selectedIndex={selectedIndex}
        selectService={selectService}
      />
      <ViewerService
        words={ListOfWords(services)}
        categories={selectedCategories}
        categoryShow={false} //categoryShow
        setCategoryShow={setCategoryShow}
      />
    </Grid>
  );
};

export default Services;
