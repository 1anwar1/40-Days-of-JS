//2026/5/11

console.log("1.Generate a pyramid")
for (let i =0;i<=5;i++){
    let row ="";
    for(let j=0;j<i;j++){
        row = row + "* ";
    }
    console.log(row);
}
////////////////////////////////////
console.log("2.Mul Table")

let x=3;
for (let w=1; w<=10;w++){
    console.log(x + " x " + w + " = " + x*w);
}
/////////////////////////////////////
console.log("3.Sum of all odd nums")

let sum =0, o=1;
while(o<=500){
     sum += o;
     o +=2;
}
console.log(sum);
//////////////////////////////////////
console.log("4.skip mul of 3")

for (let v=1;v<=20;v++){

    if (v%3 === 0 || v===1) continue;
    console.log(v);
}
/////////////////////////////////////
console.log("5.Reverse digits of num w/while")

//learnt way
let num = "3456", g=num.length-1;
while (g>=0){
    console.log(num.charAt(g));
    g--;
}
//A better way (learnt by ai)

let reversed =0, num1 = 3456;
while (num1>0){
    reversed = reversed *10 + (num1%10); //takes last digit, then start adding in reverse
    num1 =  Math.floor(num1/10); //gives u the first digits - each iteration
}
/* 1st iteration : 0x10 + 6 = 6
2nd : 6x10 + 5 = 65
3rd : 65x10 + 4 = 654
4rth : 654x10 + 3 = 6543 , now floor of 3/10 = 0 so condition not met*/
console.log (reversed);
//////////////////////////////////
console.log ("6. diff bet. for/while/do loop")

console.log ("For : for known number of iteration")
console.log("While : for unknown num of iterations")
console.log("Do-while : for executing at least once");