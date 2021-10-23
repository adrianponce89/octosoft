import React from 'react';

import Container from '../components/Container';
import NotFound from '../components/NotFound';

const NotFoundPage = () => {
  return (
    <Container
      backgroundColor={'#E5E5E5'}
      innerBackground={'#E5E5E5'}
      opacity={1}
    >
      <NotFound />
    </Container>
  );
};

export default NotFoundPage;
