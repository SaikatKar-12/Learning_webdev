let username="admin"
let password=12345
function login(user,pass){
    if(user=="admin"){
        if(pass==12345){
            console.log("Login succesfull")
        }
        else{
            console.log("Invalid Credentials")
        }
    }else{
        console.log("Invalid Credentials")
    }
}
login(username,password)