const fs=require("fs")

//sync read
// console.log("before read")
// const content=fs.readFileSync('input.txt')
// console.log(""+content)
// console.log("after read")

//async read
console.log("before read")
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }
    console.log(""+content)
})
console.log("after read")