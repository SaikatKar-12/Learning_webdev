function checkDOB(dob){
    let userDOB = new Date(dob);
    let currentDate = new Date();
    let userAge = currentDate.getFullYear() - userDOB.getFullYear();
    if (
    currentDate.getMonth() < userDOB.getMonth() ||
    (currentDate.getMonth() === userDOB.getMonth() &&
        currentDate.getDate() < userDOB.getDate())
    ) {
    userAge--;
    }
    if (!isNaN(userAge) && userAge >= 18) {
    console.log("You are over 18 years old. Access granted!");
    } else {
    console.log("Sorry, you are not over 18. Access denied.");
}
}
checkDOB("2018-01-12")