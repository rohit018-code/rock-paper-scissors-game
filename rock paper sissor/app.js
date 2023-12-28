let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp-score");



const gencompchoice = () => {
    const options =["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() *3);
    return options[randidx]; 

};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "GAME WAS DRAW.PLAY AGAIN!";
    msg.style.background = "#081b31";

};
const showwinner = (userwin, userchoice, compchice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `YOU WIN! YOUR ${userchoice}  beats ${compchice}`;
        msg.style.background = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("comp win");
        msg.innerText = `COMP WIN!   ${compchice}  beats YOUR ${userchoice}`;
        msg.style.background = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user chhoice =", userchoice);
    //generate computer choices
    const compchice = gencompchoice();
    console.log("comp chhoice =", compchice);

    if(userchoice === compchice){
        //draw game;
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //computer has left with only two choices that is paper and sissors because if it had chosen rock the game would have been drawn
            userwin = compchice === "paper" ? false: true;

        }
        else if(userchoice === "paper"){
            //same applies here as the above condition;
            userwin = compchice === "scissors" ? false: true;

        }
        else{
            // rock ,paper
            userwin = compchice ==="rock" ? false:  true;

        }

        showwinner(userwin,userchoice,compchice);
    }

};

choices.forEach((choice) =>
{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
})