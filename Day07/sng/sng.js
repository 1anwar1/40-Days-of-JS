function sng(){
    console.log("WELCOME TO SECRET NUMBER GUESSING GAME!!!!!")

    let userAns = Number(prompt("Guess the number from 1 to 10"))
    while (userAns < 1 || userAns > 10 || isNaN(userAns)){
        userAns = Number(prompt("r u dump, i said a number from 1 to 10"))
    }
    
    let num = Math.floor((Math.random()*10) +1);
    let counter= 0;

    while(userAns!= num){
        if(userAns > num){
        userAns = Number(prompt("Too high, try again"))
        counter++
    }else{
        userAns = Number(prompt("Too low, try again"))
        counter++
    }
}
    console.log("NUM WAS : ", num," U GOT IT IN ", counter," TRIES, CONGRATS!!!!")
    

    let again=prompt("Do you want to play again? (y/n)")
if (again !== "y" && again !== "n"){
    again=prompt("Wrong input, please enter y or n : ")
}

if (again=== "y"){
    SNG();
}else{
    console.log("Thanks for playing, c u next time!!")
}
}

sng();