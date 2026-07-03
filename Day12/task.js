//   6/29- 7/3


//      QUESTION 1 :
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
// -> Not provided, bec this checks if the age property exists or not, or exists and = undefined

/////////////////////////////////////////////////////////////////////////////////////////////////////

//      QUESTION 2 : 
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
// -> wont change, but nested objects arent protected from change

//////////////////////////////////////////////////////////////////////////////////////////////////////

//       QUESTION 3 : 
// Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company, company: {location: {city}}} = person;
console.log(name, company, city)


//////////////////////////////////////////////////////////////////////////////////////////////////////

/*       QUESTION 4 :
-->Build a Student Management System
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade.
*/


const students=[
  {
    name: "layla",
    grade : 100
  },
  {
    name: "sali",
    grade : 70
  },{
    name: "ali",
    grade : 90
  }
];

let allGrades = 0;
for (let {grade} of students){
  allGrades+=grade
};
const avg= allGrades/3;
console.log(avg);


//////////////////////////////////////////////////////////////////////////////////////////////////////

/*          QUESTION 5:
-->Book Store Inventory System
Store books in an object.
Add functionality to check availability and restock books.*/


const inventory={
 Biology : 10,
 Chemistry : 7,
 English : 2,
 Math : 0
}

function ChecknRestock(value){
  if (inventory[value] > 0){
    console.log(`${value} is available`)
  }
  else if (!(value in inventory)){
    console.log(`${value} doesnt exist, try again`)
  }
  else{
     console.log(`${value} is not available, restocking..`)
     inventory[value] = 10
  }
}

ChecknRestock("Physics")
ChecknRestock("Biology")
ChecknRestock("Math")
console.log(inventory)






//////////////////////////////////////////////////////////////////////////////////////////////////////

//          QUESTION 6 :

//Object.keys()
//--> shows u all keys of an object in an array :
const car = {
  name : "lamborghini",
  model : "revuelto",
  color : "orange"
}
console.log(Object.keys(car))



//Object.enteries()
//--> shows the whole object in an array that have each key in an array :

console.log(Object.entries(car))






//////////////////////////////////////////////////////////////////////////////////////////////////////

//          QUESTION 7 :


//theres 3 ways :

console.log(Object.hasOwn(car,"speed")) //--> best safest way
console.log("speed" in car)
console.log(car.speed)








//////////////////////////////////////////////////////////////////////////////////////////////////////

//          QUESTION 8 :


const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name);

//output: Doe, bec person1 and newPerson now point at the same object so they both can change it



//////////////////////////////////////////////////////////////////////////////////////////////////////

//          QUESTION 9 :


//Best way is to use structuredClone, ex :

const street ={
  name : "st12",
  address : {
    city : "paris",
    country : "france"
  }
}

const streetClone = structuredClone(street)
streetClone.address.city = "casaplanka"
console.log(street)

//--> didnt change the original bec it deeply copies, unlike .assign which copies the nested obj reference not values








//////////////////////////////////////////////////////////////////////////////////////////////////////

//   QUESTION 10 :
//Loop and print values using Object destructuiring



const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for (let {name, address,age} of users){
  console.log(name,address,age)
}