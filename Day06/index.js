//2026/5/13
console.log("1. convert celsius to fahrenheit")

function CtoF(celsius){
      let fahren = (celsius * (9/5)) + 32
      console.log(fahren)
}
CtoF(23);

////////////////////////////////////////////
console.log("2.Function that finds max of 2 nums")


function getMax(num1,num2){
    if (num1>num2) return num1
     else return num2
    }
    console.log(getMax(-5,5))

////////////////////////////////////////////////
console.log('3.Function that checks if a string is a palindrome')

function isPalin(string){

      function reverse(string){let reversed = string.charAt(string.length-1);
      for (let i = (string.length-2); i >= 0; i--){
        reversed += string.charAt(i);
       }
       console.log(reversed)
       return reversed  } 

    if (string ===reverse(string)) console.log("Its Palindrome")
    else console.log("Its not")

    }
isPalin("poop")

///////////////////////////////////////////////
console.log("4.function that finds factorial of a number")

function getFactorial(num){
      let factorial =1;
      for(let i = 1;i<num;i++) factorial *= i;
      return factorial;
}

console.log(getFactorial(7))

//////////////////////////////////////////////////
console.log("5.function that counts vowels in a string")
//my way
function countVowels(string){
      let vowels =0;
      for (let i = 0; i < string.length; i++){

            if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || 
            string.charAt(i) == "o" || string.charAt(i) == "u" )vowels ++
            
      }
      return vowels
}

console.log(countVowels("remae"))

//shorter way by ai

function countVowelsai(string){
      let vowels =0;
      for (let i = 0; i < string.length; i++)

            if ("aeiou".includes.charAt(i))vowels ++  
      
      return vowels
}
console.log(countVowels("remae"))

//////////////////////////////////////////////////
console.log("6.function that capitalizes 1st letter of each word in a sentence")

function capitalize(sentence){

newSent= sentence.charAt(0).toUpperCase();

      for(let i =1;i<sentence.length;i++){
            if (sentence.charAt(i)== " "){
            newSent += sentence.charAt(i);
            newSent += sentence.charAt(i+1).toUpperCase();
            i++
            }
       else newSent += sentence.charAt(i)
      }
console.log(newSent);

}

capitalize("im ur friend");

////////////////////////////////////////////
console.log("7.IIFE to print 'Hello, JS!'")

function print(){
      console.log("Hello, Javascript!")
} (print())

//////////////////////////////////////////
console.log("8.A simple callback function")

function greet(name, callback){
      console.log(name)
      callback()
}

greet("malek", function(){
      console.log(", Welcome back!")
})