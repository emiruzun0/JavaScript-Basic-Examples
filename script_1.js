var age;
console.log(age);   //undefined
age = 20;
console.log(age);   //20

var fullname = "Emirhan UZUN";
console.log(fullname);


let city = "Istanbul";
console.log(city);

const email= "abc@mgail.com";
console.log(email);


// ----------------PART 2 VARIABLE TYPES ---------------

// Primitive Types

    //String
    let firstName = "UZUN";

    //Number
    let age2 = 20;
    let money = 100.5;

    //Boolean
    let isActive = false;

    //Null
    let job = null;

    //Undefined
    let car;


    console.log(typeof job);

//Reference Types - Objects

//Array

let names= ['Ali','Ahmet','Can'];

//Object
let address = {
    city:'Kocaeli',
    country:'Türkiye'
}

//Function

var calculateAge = function(){
    return 0;
};

console.log(typeof calculateAge);


// -------------------- PART 3 TYPE CONVERSION --------------

//String to Number
let num1 = Number('5');
let num2 = Number('10');

let total = num1 + num2;

console.log(typeof num1);
console.log(typeof num2);
console.log(total);
console.log(num1+num2);



let val;

//Number to String
val = String(10);

//Bool To String

val = String(true);

//Date To String
val = String(new Date());

//Array To String
val = String([1,2,3,4]);


console.log(val);
console.log(typeof val);
console.log(val.length);