function returnChoice(num){

    let value;
    switch (num){
        case 1 : value = "rock"; break;
        case 2 : value = "paper"; break;
        case 3 : value = "scissors";break;
        default : value = "invalid";break;
    }
    
    return value;
}

function RPS(){

    console.log("GAME : ROCK PAPER SCISSORS")

console.log("1 : rock\n2 : paper\n3 : scissors")
let userInput = Number(prompt("Enter ur choice : "))

while (userInput !== 1 && userInput !== 2 && userInput !==3){
    userInput = Number(prompt("Wrong number, Enter a num from 1 to 3 : "))
}
const userChoiceConverted =returnChoice(userInput);
console.log("User choose : ", userChoiceConverted)


let compChoice = Math.floor((Math.random()*3) +1);

const compChoiceConverted =returnChoice(compChoice)

console.log("Computer choose : ", compChoiceConverted )

if ((compChoice === 1 && userInput ===3) ||
(compChoice === 2 && userInput ===1) || 
(compChoice === 3 && userInput ===2) ){
 console.log("COMPUTER WINSSSSSS")
}
else if(compChoice===userInput){
    console.log("ITS A TIEEEEEEE")
}
else {
    console.log("YOU WONNNNNNN!!!!!!!!!")
}

let userAns=prompt("Do you want to play again? (y/n)")
if (userAns !== "y" && userAns !== "n"){
    userAns=prompt("Wrong input, please enter y or n : ")
}

if (userAns=== "y"){
    RPS();
}else{
    console.log("Thanks for playing, c u next time!!")
}
}



RPS();

