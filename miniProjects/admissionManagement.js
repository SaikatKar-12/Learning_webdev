const students=[]
function add(name){
    students.push(name)
    console.log(`${name} added successfully`)
}
function remove(name){
    let idx=students.indexOf(name);
    students.splice(idx,1);
    console.log(`${name} removed`);
}
function display(){
    students.forEach((ele)=>{
        console.log(ele);
    })
}
function update(name1,name2){
    let idx=students.indexOf(name1);
    students.splice(idx,1,name2);
    console.log("Name updated");
}
add("Saikat");
add("rahul");
add("roman");
display();
update("rahul","rohan");
remove("roman");
display()