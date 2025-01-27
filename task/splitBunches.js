const splitBunches = (arr) => {
  const temp = [];
  arr.forEach((a) => {
    for (let index = 0; index < a.quantity; index++) {
      temp.push({ name: a.name, quantity: 1 });
    }
  });
  return temp;
};

console.log(splitBunches([{ name: "grapes", quantity: 2 }]));
