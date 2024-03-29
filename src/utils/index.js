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

export const onDownloadPNG = async (imgUrl, title) => {
  let blob = await fetch(imgUrl);
  blob.blob().then((blob) => {
    const url = window.URL.createObjectURL(
      new Blob([blob], { type: 'image/png' }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', title);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  });
};

export const onDownloadFBX = async (imgUrl, title, type) => {
  let blob = await fetch(imgUrl);
  blob.blob().then((blob) => {
    const url = window.URL.createObjectURL(
      new Blob([blob], { type: type }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', title);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  });
};

export const onDownloadSVG = async (imgUrl, title) => {
  let blob = await fetch(imgUrl);
  blob.blob().then((blob) => {
    const url = window.URL.createObjectURL(
      // new Blob([blob], { type: 'image/png' }),
      new Blob([blob], { type: 'image/svg' }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', title);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
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

const plansColors = ['#37add4', '#1d2178', '#542559', '#9b9b9b'];

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

export const ListOfWords = (arr) => {
  const result = arr.map(({ node }) => node.title + '.');
  result.shift();
  return result;
};

export const selectedCategory = (services, category) => {
  if (Array.isArray(services.node.categories)) {
    const resp = services.node.categories.map((id) =>
      category.filter(
        ({ node }) =>
          node.idcategory.toLowerCase() === id.toLowerCase(),
      ),
    );
    return resp.flat(2);
  }
  return [];
};

export const FindIndex = (services, search) => {
  const newIndex = services.findIndex(
    (v) => v.node.title.toLowerCase() === search.toLowerCase(),
  );
  return newIndex;
};

export const sortGroupTeamMembersCategories = (teamMembers) => {
  const sortTeamMembersCategory = [];
  const titleTypeCategorySet = new Set();

  teamMembers.forEach((member) => {
    titleTypeCategorySet.add(member.node.category);
  });

  titleTypeCategorySet.forEach((value) => {
    sortTeamMembersCategory.push({
      category: value,
      teamMembers: teamMembers.filter(
        (member) => member.node.category === value,
      ),
    });
  });

  return sortTeamMembersCategory;
};

const letterFirst = (str) => {
  const res = [];
  if (str.length != 0) {
    const arrAux = str.split(' ');
    arrAux.forEach((item) => {
      res.push({ first: item.slice(0, 1), second: item.slice(1) });
    });
  }
  return res;
};
