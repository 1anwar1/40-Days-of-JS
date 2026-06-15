//15/6/2026

//FIRST QUESTION :
//TDZ is the area u cant access a variable until its initialized
{

    //       tdz starts (name, age, num)
    //       so you will get ReferenceError if u try to access any of them in here
    //
    //
    //
    let name = "bassem" //tdz of name ends here
    //
    //
    let age;  //tdz of age ends here
    //
    //
    //
    age = 899 //(just assigning) 
    //
    const num ="09009208"    //tdz of num ends here
    //
    //
    //

}


//////////////////////////////////////////////////////////////////////////////////////////////////
//SECOND QUESTION:

/*
Variable Hoisting : The variable situation during the execution context,
                    if u use them before u initiallize them with a value:
                      var : 1-CP : created and initialized with undefined
                            2-EP : it will not give an error but be empty
                      let,const : 1-CP: created but not initialized (cant access it at all)
                                  2-EP: gives u ReferenceError*/

//EXAMPLE on var & const:

console.log("Hello, ", name1)
var name1="sama"
// RESULT : Hello, (undefined)
console.log("Hello, " , name)
const name= "waleed"
//RESULT : ReferenceError


/*Function Hoisting : in the EC, CP starts first, so functions are created and saved in memory first
                 that means u can invoke ur functions anytime in ur code bec its always in the memory*/

//EXAMPLE :

greet("dehya")

let name3
function greet(name3){
    console.log("Hello, ", name3);
}
//RESULT : Hello, dehya (1-CP of the function, 2-EP of the function)