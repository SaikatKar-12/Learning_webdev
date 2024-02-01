function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log("count :",count);
    }
}
let clickButton=createCounter();
clickButton();
clickButton();
clickButton();
clickButton();