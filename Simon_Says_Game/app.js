let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["red","blue","yellow","purple"];
let highScr = 0;


document.addEventListener("keypress", function (){
    if(started == false){
        console.log("game started");
        started = true;
    }

    
    levelUp();

    
});


function levelUp(){
    userSeq = [];
    level++;

    // console.log("level ",level);
    
    h2.innerText = `Level ${level}`;
    let rndIdx = Math.floor(Math.random() * 4);
    let rndColor = btns[rndIdx];
    let rndBtn = document.querySelector(`.${rndColor}`);
    gameFlash(rndBtn);

    // console.log(rndIdx);
    // console.log(rndColor);
    // console.log(rndBtn);
    gameSeq.push(rndColor);
    console.log(gameSeq);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250);
}




function btnPress(){
    let btn = this;
    userFlash(btn);
    console.log(btn);

    let userBtn = btn.getAttribute("id");
    userSeq.push(userBtn);
    

    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkAns(idx){
    
    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        
        if(highScr < level){
            highScr = level;
            console.log(highScr);
        }else {
            console.log(highScr);
        }
        reset();
    }
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}