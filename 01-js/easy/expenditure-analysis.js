/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 80,
    category: 'Vehicle',
    itemName: 'Ather',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 70,
    category: 'Clothes',
    itemName: 'Jacket',
  },
  {
    id: 4,
    timestamp: 1656076800000,
    price: 40,
    category: 'Food',
    itemName: 'Dosa',
  },
]

// METHOD - 1:

function calculateTotalSpentByCategory(transactions) {
  const Output = [];

  transactions.forEach((transaction)=>{
      //Find if the category already exist in Resultant array
    const existingCategory = Output.find(item=>item.category === transaction.category)
  
    if(existingCategory){
      existingCategory.totalSpent += transaction.price 
    }else{
      Output.push({category:transaction.category,totalSpent:transaction.price})
    }
  })

  return Output;
}







//calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;


