import React from 'react';

const contentful = require('contentful');

let client;
const getClient = () => {
  if (!client)
    client = contentful.createClient({
      space: process.env.REACT_APP_SPACE,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });
  return client;
};

export async function fetchFromContentful(id, setData) {
  const { fields } = await getClient().getEntry(id);
  setData(fields);
}

export async function fetchFromContentfulByContentType(
  contentType,
  setData,
) {
  const { items } = await getClient().getEntries({
    content_type: contentType,
  });
  setData(items);
}

export function getLines(text) {
  return text.split('\n').map((line) => (
    <>
      {line}
      <br />
    </>
  ));
}

export function getParagraphs(text) {
  return text.split('\n').map((line) => <p>{line}</p>);
}
