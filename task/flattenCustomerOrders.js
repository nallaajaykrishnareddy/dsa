function flattenCustomerOrders(customers) {
  const results = [];

  for (const customer of customers) {
    const { username, orders } = customer;
    for (const order of orders) {
      results.push({
        username,
        ...order,
      });
    }
  }
  return results;
}

const orders = {
  username: "username123",
  orders: [
    { item: "lap", amount: 1200 },
    { item: "headPhones", amount: 200 },
  ],
};

console.log(flattenCustomerOrders(orders));
