//2026/3/8
console.log("2.ATM cash withdrawal system");
let num = 450;
if (num%100==0)
    console.log("Withdrawal successful");
else
    console.log("Invalid amount");

////////////////////////////////////////////
console.log("3.Calculator");
let op='*',n1=2,n2=5;
switch(op){
    case '+' : console.log(n1+n2); break;
    case '-' : console.log(n1-n2); break;
    case '*' : console.log(n1*n2); break;
    case '/' : console.log(n1/n2); break;
    case '%' : console.log(n1%n2); break;
    default  : console.log("Invalid opertaor");
};
/////////////////////////////////////
console.log("4.Movie ticket");
let age = 90;
if(age<18)
    console.log("Pay $3");
else if(age<60)
    console.log("Pay $10");
else
    console.log("Pay $8");
///////////////////////////////////////
console.log("5.Horoscope Sign Checker");
let Bmonth = 'January';
switch(Bmonth){
    case 'January':
    case 'February': console.log('ur zodiac sign is Gemini'); break;
    case 'March':
    case 'April': console.log('ur zodiac sign is Aries');break;
    case 'May':
    case 'June': console.log('ur zodiac sign is Taurus');break;
    default : console.log('Wrong Input');
};
/////////////////////////////////////////
console.log('6.Which Triangle?');
let side1 = 6,side2=60,side3=68;
if(side1==side2 && side2==side3)
    console.log("It's an Equilateral");
else if(side1==side2 || side2==side3 || side1==side3)
    console.log("It's an Isosceles");
else
    console.log("It's a Scalene");
