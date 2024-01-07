const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let comChoice
let result
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    userChoice=e.target.id 
    userChoiceDisplay.innerHTML=userChoice
    generateComchoice()
    computerChoiceDisplay.innerHTML=comChoice
    getresult()
    resultDisplay.innerHTML=result
}))
function generateComchoice(){
    const randomNumber=Math.floor(Math.random()*3)+1
    if(randomNumber==1){
        comChoice='rock'
    }
    if(randomNumber==2){
        comChoice='scissors'
    }
    if(randomNumber>2){
        comChoice='paper'
    }
}
function getresult(){
    if(comChoice==userChoice){
        result="its a draw!"
    }else if(comChoice=='rock' && userChoice=='scissors'){
        result="You Lose"
    }else if(comChoice=='paper' && userChoice=='rock'){
        result="You Lose"
    }else if(comChoice=='scissors' && userChoice=='paper'){
        result="You Lose"
    }else if(comChoice=='scissors' && userChoice=='rock'){
        result="You Win"
    }else if(comChoice=='paper' && userChoice=='scissors'){
        result="You Win"
    }else if(comChoice=='rock' && userChoice=='paper'){
        result="You Win"
    }
}