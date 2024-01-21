function otpGenerator(){
    let otp=Math.floor(Math.random()*10000)
    return otp
}
console.log(otpGenerator())
console.log(otpGenerator())
console.log(otpGenerator())