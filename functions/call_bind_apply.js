function greet(name){
    console.log(`hello ${this.name}, I am ${name}`);
}
function sum(a,b){
    console.log(`hello ${this.name},the sum is ${a+b}`);
}
person={"name":"Sam"};
greet.call(person,"Saikat");
sum.apply(person,[5,7]);
sum.call(person,2,5);
const bound=greet.bind(person,"saikat");
bound();