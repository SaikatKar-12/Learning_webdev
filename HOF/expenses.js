let expenses=[
    {amount:200 ,categories:"utilities"},
    {amount:100 ,categories:"groceries"},
    {amount:50 ,categories:"entertainment"},
]
let newArray=expenses.map((obj)=>{
    let a=obj.amount * 0.1
    return {...obj, tax: a}
})
console.log(newArray)