//         6/27
//            QUESTION 1 :
//-> (1,2) bec u initialized the function then used the inner one to increment


//            QUESTION 2 :
//-> 20 bec the first time u just initialized then the second brackets used the inner

//            QUESTION 3 :

function button(){
    let count =0;
    return function click(){
        return console.log("You clicked ",++count, " times");
    }
}

let countclick = button()
countclick()
countclick()
countclick()

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//            QUESTION 4 :
// ->Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(num){
    return function multiplier(num1){
        return num * num1
    }
}

let kaka = createMultiplier(2)
console.log(kaka(4))
console.log(kaka(5))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//            QUESTION 5 :
// -> ii

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//            QUESTION 6 :
// -> Write a function factory of counter to increment, decrement, and reset a counter.
//   Use closure to refer the count value across the functuions.

function counter(){
    let counter = 0

    return{ 

    increment : () =>{
        return ++counter
    },
    decrement : () =>{
        return --counter
    },
    reset : ()=>{
        return counter = 0
    }
}
}

let county= counter()
console.log(county.increment())
console.log(county.increment())
console.log(county.decrement())
console.log(county.reset())












