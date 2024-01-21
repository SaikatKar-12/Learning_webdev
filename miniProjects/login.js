var admin={
    email: "saikat@google.com",
    password: "saikat123"
}
function login(email,password){
    if(email==admin.email && password==admin.password){
        return "Login successfull";
    }else if(email== admin.email && password!=admin.password){
        return "Password mismatch";
    }else{
        return "Invalid Credentials"
    }
}

console.log(login("saikat@google.com","saikat123"));
console.log(login("sam@google.com","saikat123"));
console.log(login("saikat@google.com","hello12"));