export const submitForm = (formName, params) => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(data[key]),
      )
      .join('&');
  };

  return fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encode({
      'form-name': formName,
      ...params,
    }),
  });
};
