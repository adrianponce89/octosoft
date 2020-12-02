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

export const darkenColor = (color, ratio) => {
  const R = Math.floor(
    parseInt(color.slice(1, 3), 16) * ratio,
  ).toString(16);
  const G = Math.floor(
    parseInt(color.slice(3, 5), 16) * ratio,
  ).toString(16);
  const B = Math.floor(
    parseInt(color.slice(5, 7), 16) * ratio,
  ).toString(16);

  return `#${R}${G}${B}`;
};
