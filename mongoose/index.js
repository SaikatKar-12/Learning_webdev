const mongoose=require('mongoose')
const user_model = require('./models/user.model')
mongoose.connect("mongodb://localhost/saikat");
const db=mongoose.connection;
db.once("open",()=>{
    console.log("connected to mongodb!")
    //init()
    //dbupdate()
    dbdelete()
    dbqueries()
})
db.on("error",()=>{
    console.log("error while connecting")
})

async function init(){
    const user_obj={
        name: "ken",
        age: 49
    }
    try{
        const user= await user_model.create(user_obj)
        console.log("User created",user)
    }catch(err){
        console.log("error while inserting",err)
    }
}

async function dbqueries(){
    try{
        const users= await user_model.find()
        console.log(users)
    }catch(err){
        console.log("Error while reading",err)
    }
}
async function dbupdate(){
    try{
        const user= await user_model.findOne({name:"sam"})
        user.age=99
        const user_updated=await user.save()
        console.log(user_updated)
    }catch(err){
        console.log("Error while updating",err)
    }
}
// async function dbupdate(){
//     const userRec= await user_model.deleteOne({name: "ken"})
     
// }
async function dbdelete(){
    const userRec= await user_model.deleteMany({name:"ken"})
    console.log(userRec)
}

//const users= await user_model.find()
