/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let a=0;
}
transactions=[{
  itemName:"Pen",category:"Sat",price:20,timestamp:10,
  itemName:"Chirag",category:"mouse",price:1,timestamp:1,
}]

module.exports = calculateTotalSpentByCategory;
