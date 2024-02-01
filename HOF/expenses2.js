let expenses=[
    {amount:200 ,categories:"utilities"},
    {amount:100 ,categories:"groceries"},
    {amount:50 ,categories:"entertainment"},
]
let newArray=expenses.map((obj)=>{
    if(obj.amount>100) return {...obj, expense:"high"}
    else return {...obj, expense:"low"}
})
console.log(newArray)