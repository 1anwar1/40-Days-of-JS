//  (2026/6/24)

/*
QUESTION 1 :
Answer : Bob, although "user" is declared twice, but the second one is function scope so its fine,
         therefore, the inner will take the closest one which is the outer.

/////////////////////////////////////////////////////////////////////////////////////////////////////

QUESTION 2 : 
Answer : global bad practice, bec u can modify it anytime and may cause bugs


///////////////////////////////////////////////////////////////////////////////////////////////////
Question 3 :*/
 
/*function getName(){
    let name = prompt("Enter ur name pls : ")
    let fullname = "Ms/Mr. " + name;
    function printName(){
        console.log("Hello, ",fullname)
    }
    printName()
}
getName()*/
////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 4 : 

/*function getAge(){
    let age =prompt("Enter ur age pls : ")

    for (let i =0; i<100; i++){

        if (age <=100 && age >=0){ break;}

        else {
    age = prompt("Please enter a valid age")
    let apology = prompt("Now write an apology 4 ur mistake and dont do it again")}

    }
    console.log(age)
    console.log(apology)
}
getAge()*/
//CANT ACCESS APOLOGY BEC I DECLARED THE VARIABLE USING LET, AND LET IS A BLOCK SCOPE
////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 5 : Write a function that tries to access a variable declared inside another function.

//U can do that using closure and return, for example using closure :



/*function books(){
    let book1 = "blabla1" 
    let book2 = "blabla2"
    
    function getBook(){
    let ans = prompt("what book do u want?\n1-book1 (press 1)\n2-book2 (press 2)")
    if (ans == 1){
        console.log('there u go : ', book1)
    }
    else {
        console.log('there u go : ', book2)
    }
}
return getBook
}
let getvar = books()
getvar()*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 6 :
//REFERENCE ERROR BEC TRIED TO ACCESS BEFORE INIZIALIZATION, BUT IF IT WAS VAR IT WOULVE WORKED BUT GIVE UNDEFINED ALL BEC OF EXECUTION CONTEXT

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 7 :
//b. ONLY INSIDE THE FUNCTION
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//QUESTION 8:
// ITS GONNS BE "HI", BEC ITS CLOSER TO THE FUNCTION THAT PRINTED THE MESSAGE

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//QUESTION 9 : 
//SAME AS ABOVE

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION 10:

//it will reduce each time, bec u returned the inner function, so the inner function that keeps getting called