let expenses=[
    {amount:200 ,categories:"utilities"},
    {amount:100 ,categories:"groceries"},
    {amount:50 ,categories:"entertainment"},
    {amount:200 ,categories:"groceries"},
    {amount:70 ,categories:"groceries"},
]
let newArray=expenses.filter((obj)=>{
    if(obj.categories=="groceries") return obj.amount
})
let totalExpensesByCategory = expenses.reduce((accumulator, currentExpense) => {
    const { amount, categories } = currentExpense;
  
    // Check if the category already exists in the accumulator
    if (!accumulator[categories]) {
      accumulator[categories] = 0; // Initialize if not exists
    }
  
    accumulator[categories] += amount; // Add the amount to the category
  
    return accumulator;
  }, {});
  
  console.log(totalExpensesByCategory);