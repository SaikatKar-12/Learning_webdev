const cardArray=[
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]
let blueUser=document.querySelector('#blueUser')
let redUser=document.querySelector('#redUser')
let bluePoint=0
let redPoint=0;
let flag=true
let turn=document.querySelector('#turn')
let result=document.querySelector('#result')
cardArray.sort(()=>0.5-Math.random())

const gridDisplay=document.querySelector('#grid')
const cardChosen=[]
const cardChosenId=[]
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()
blueUser.innerHTML=bluePoint
redUser.innerHTML=redPoint
turn.innerHTML="red"
function checkMatch(){
    const cards=document.querySelectorAll('img')
    if(cardChosen[0]==cardChosen[1]){
        cards[cardChosenId[0]].removeEventListener('click',flipCard)
        cards[cardChosenId[1]].removeEventListener('click',flipCard)
        if(flag==true){
            redPoint++;
            redUser.innerHTML=redPoint;
        }else{
            bluePoint++
            blueUser.innerHTML=bluePoint
        }
    }else{
        cards[cardChosenId[0]].setAttribute('src','images/blank.png')
        cards[cardChosenId[1]].setAttribute('src','images/blank.png')
        if(flag==false){
            flag=true
            turn.innerHTML="red"
        }else{
            flag=false
            turn.innerHTML="blue"
        }
    }
    cardChosen.pop();
    cardChosen.pop();
    cardChosenId.pop();
    cardChosenId.pop();
    if(redPoint+bluePoint==cardArray.length/2){
        if(bluePoint>redPoint){
            result.innerHTML="Blue won"
        }else if(redPoint>bluePoint){
            result.innerHTML="Red Won"
        }else{
            result.innerHTML="It's a Draw!"
        }
    }
}
function flipCard(){
    const cardId=this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length==2){
        setTimeout(checkMatch,500)
    }
}
