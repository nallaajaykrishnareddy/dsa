const user = {
  name: 'Rowdy Coders',
  address: {
    primary: {
      house: '109',
      street: {
        main: 21,
        cross: ['32', '1'],
      },
    },
  },
};

const flatten = (obj, parentKey) => {
  let temp = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      temp = {
        ...temp,
        ...flatten(obj[key], `${parentKey}_${key}`),
      };
    } else {
      temp[`${parentKey}_${key}`] = obj[key];
    }
  }
  return temp;
};

console.log(flatten(user, 'user'));
