const orderList=[
    {name: "laptop", price:22000},
    {name: "mouse", price:400},
    {name: "keyboard", price:2000},
    {name: "mobile", price:12000},
]
function calculateTotal(list){
    sum=0;
    list.forEach((obj)=>{
        sum+=obj.price;
    })
    return sum;
}
let total = calculateTotal(orderList);
console.log(total)