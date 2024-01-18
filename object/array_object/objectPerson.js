const person1={
    "name":"Saikat",
    "age": 20,
}
const person2={
    "name":"Sam",
    "age": 19,
}
function introduce(a){
    console.log("Hello, I'm "+a.name+" and I'm "+a.age+" years old");
}
introduce(person1)
introduce(person2)