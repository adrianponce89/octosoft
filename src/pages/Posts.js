import React from 'react';
import Container from '../components/Container';
import BackgroundImage from '../assets/Background.png';
import PostView from '../components/PostView';
import { article as DummyArticle } from '../assets/DummyData';

const ArticleViews = () => {
  return (
    <Container background={`url(${BackgroundImage})`}>
      {DummyArticle.map((dataArticle) => (
        <PostView
          background={`url(${dataArticle.picUrl})`}
          title={dataArticle.title}
          descriotion={dataArticle.description}
        />
      ))}
    </Container>
  );
};

export default ArticleViews;
