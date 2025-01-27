const multiply = (a) => {
  const fn = (b) => {
    if (b !== undefined) {
      return multiply(a * b);
    }
    return a;
  };

  return fn;
};

console.log(multiply(1)(2)(3)(4)(5)(6)()); // Outputs: 720
