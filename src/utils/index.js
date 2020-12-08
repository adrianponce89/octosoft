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
  console.log('darken color:', `#${R}${G}${B}`);
  return `#${R}${G}${B}`;
};

const plansColors = ['#204dc0', '#32cc64', '#ff992a', '#e72365'];

export const sortPlans = (plans) => {
  let sortPlans = [];
  const titleTypeSet = new Set();

  plans.forEach((plan) => {
    titleTypeSet.add(plan.node.type);
  });
  let counter = 0;
  titleTypeSet.forEach((value) => {
    sortPlans.push({
      type: value,
      color: plansColors[counter++],
      plans: plans.filter((p) => p.node.type === value),
    });
  });

  return sortPlans;
};
