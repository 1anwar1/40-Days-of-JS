//2026/3/6
console.log("~~~~Day03 Task~~~~");

console.log("1.Odd or Even?");
let num=5;
console.log(num%2 === 0 ? "Even":"Odd");


console.log("2.Do you have a driving license?");
let age = 90;
console.log(age>=18? "Eligible": "Not eligible");


console.log("3.Calc CTC with a bonus");
console.log((12300*12)*1.2 + " rupees per year");


console.log("4.Traffic light simulator");
let color = "Red";
console.log(color== "Green"? "GO": "STOP");


console.log("5.Elec. bill calc.");
let units = 20;
let monthPayment = units*150;
let annualPayment = (monthPayment*0.8)*12;
console.log("Month Payment : " + monthPayment);
console.log("Annual Payment with discount : " + annualPayment);


console.log("6.Leap year checker");
let year = 2025;
console.log((year%4 == 0) || (year%400==0 && year%100!=0) ?"Leap": "not leap");


console.log("7.Max of 3 nums");
let p=1000,q=9008,r=9990;
let max = 0;
max<p? max=p:max;
max<q? max=q:max;
console.log(max<r? "Max is " + r: "Max is " + max);


console.log("8.Bitwise Doubling");
let count = 5;
console.log(count << 1);


console.log("DONEEEEEEE!:)))))");