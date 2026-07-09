
//Q1 : the value of 'this' :

//1-At the Global : 
console.log(this) //--------->window



//2-Inside an Object Method : 
const car = {
    name : 'lam',
    greet : function (){
        console.log(this.name)
    }
}
car.greet() //---->"lam", implicit binding : we referred to car by the dot ".", so at this 
            //      moment the method is bound to the car object and reaches out for it
;




//3-Inside the Satandalone non-Arrow Function :
function sayName(name){
    console.log(this.name)
}
var name = 'yu'
sayName('eric') //--------->"yu"(window), bec currrently its bound to window by default (no dot)




//4-Inside an Arrow Function(standalone) :
const street = () => {
    console.log(this.name)
}
street() //----------> "yu", bec arrow function always reaches for the parent scope(here its window)
       //             bec it doesnt have its own 'this'
;





//5-Inside an Arrow Function(as object method) :
const food ={
    type: 'korean',
    name: 'tteokboki',
    message : ()=>{
        console.log(this.name, 'is amazing')
    }
}
food.message() //------------>'yu', same reason as above





//6-Inside an object created with the Constructor Function :
function Student(name){
    this.name =name
}
const s1 = new Student('eric') //'new' created an object(s1) and bound 'this' to s1
console.log(s1.name)//'eric

///////////////////////////////////////////////////////////////////////////////////////

//Q2 :

/*the problem is that the arrow function always reaches for the parent scope of the
 object which is window, so we need to put it a level deeper so the parent becomes the obj
 and we need to declare the object first to use the function later
 */

 const user = {
  name: "tapaScript",
  greet: function greet(){ 
    return () => { 
    console.log(`Hello, ${this.name}!`);
  }},
};

const user1 = user.greet()
user1()



////////////////////////////////////////////////////////////////////////////////////
//Q3 :

/* the problem is that u didnt put the dot that bounds it to the object, now 'this' is
bound to the window.
solution : just call the obj.greet()*/

const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet();









////////////////////////////////////////////////////////////////////////////////////
//Q4 :

//the problem is that theres no dot with the inner so when u call user.greet(), it calls the greet
//function normally then call the inner function but theres no dot with the inner function so
//its reaching to window by default







////////////////////////////////////////////////////////////////////////////////////
/*Q5 : Create a Sports constructor function that takes name and number of players
 as arguments and assigns them using this keyword. Then, create two sports
 instances and log their details*/

function Sports(name, number){
    this.name = name;
    this.number = number;
}

const team1 = new Sports("Crows",11);
const team2 = new Sports("Eagles",12);

console.log(team1, team2)







////////////////////////////////////////////////////////////////////////////////////
//Q6 :



const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};



/*Object.assign(car2, {describe : car1.describe})
console.log(car2)
car2.describe()*/


/*car2.describe = car1.describe;
console.log(car2)
car2.describe()*/






////////////////////////////////////////////////////////////////////////////////////
//Q7 :



const personi = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

personi.sayHello();
personi.sayHelloArrow();

//ANS IS C: "Charlie" and "" (empty string)

























