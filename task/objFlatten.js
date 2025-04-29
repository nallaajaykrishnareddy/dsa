const user = {
  name: "Vishal",
  age: null,
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: null,
      },
    },
    secondary: null,
  },
  phones: [
    { type: "home", number: "1234567890" },
    { type: "work", number: null },
  ],
  preferences: null,
};

const objFlatten = (user, parentKey = "user") => {
  const result = {};
  for (const key in user) {
    const newKey = `${parentKey}_${key}`;
    if (user.hasOwnProperty(key)) {
      if (user[key] !== null && typeof user[key] === "object") {
        Object.assign(result, objFlatten(user[key], newKey));
      } else {
        result[newKey] = user[key];
      }
    }
  }
  return result;
};

console.log(objFlatten(user));
