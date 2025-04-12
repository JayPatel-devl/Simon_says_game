let game = []
let user = []
let started = false;
let level = 0;
let h3= document.querySelector("h3");
let btns = ["red","green","blue","yellow"];
let h4 = document.querySelector("h4");
let mySound = new Audio('game_over.mp3');
let user_sound = new Audio('user.mp3');
let game_sound = new Audio('game.mp3');

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started=true;
    }
    levelUp();
});

function ranFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
    game_sound.play();
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
    user_sound.play();
}


function levelUp(){
    user=[];
    level++;
    h3.innerText=`level:${level}`;
   let randIdx = Math.floor(Math.random() *4);
   let randColour = btns[randIdx];
   game.push(randColour);
   console.log(game);
   let randBtn = document.querySelector(`#${randColour}`);
    ranFlash(randBtn);
}

function check(index){
    if(user[index] === game[index]){
        if(user.length == game.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        h3.innerText = "GAME OVER!!!";
        start = "false";
        h4.innerText = `SCORE: ${level}`;
        mySound.play();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColour = btn.getAttribute("id");
    user.push(userColour);
    check(user.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
