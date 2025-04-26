const user = {
  name: "Ajay",
  email: "ajaykrishna.n@enlume.com",
  address: {
    hno: "5-5/25/15/119",
    colony: "mahalaxmi nagar",
    pincode: 50092,
  },
  hobbies: [],
};

function flattenObj(obj, parentKey = "user") {
  let result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newkey = `${parentKey}_${key}`;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        //   Object.assign(result, flatten(obj[key], newkey));
        const nestedObj = flattenObj(obj[key], newkey);
        for (const nestedKey in nestedObj) {
          result[nestedKey] = nestedObj[nestedKey];
        }
      } else {
        result[newkey] = obj[key];
      }
    }
  }
  return result;
}

console.log(flattenObj(user));
