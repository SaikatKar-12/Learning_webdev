const ages =[19,22,19,24,20,25,26,24,25,24]
ages.sort((a,b)=>a-b)
console.log(ages);
let max=0;
let min=100;
let mid=0;
let mididx=Math.floor(ages.length/2);
let sum=0;
for(let i=0;i<ages.length;i++){
    if(max<ages[i]) max=ages[i];
    if(min>ages[i]) min=ages[i];
    if(i===mididx) mid=ages[i];
    sum+=ages[i];
}
let avg=Math.floor(sum/ages.length)
console.log("max age: ",max);
console.log("min age: ",min);
console.log("median age: ", mid);
console.log("average age: ",avg)
console.log("range of age: ",max-min);
console.log("min and avg age difference: ",Math.abs(min-avg));
console.log("max and avg age difference: ",Math.abs(max-avg));