// Demo : Operators

// 1 - Take the weight and height informations
// 2 - CAlculate the BMI according to info
// 3 - Compare the results
// 4 - Print the group 

// 0 - 18,4: Underweight
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Overweight
// 30,0 - 34,9: Obese

let indexFirst;
let indexSecond;

const kgFirst = 60;
const kgSecond = 40;

const heightFirst = 1.70;
const heightSecond = 1.50

indexFirst = (kgFirst) / (heightFirst * heightFirst);
indexSecond = (kgSecond) / (heightSecond * heightSecond);

console.log(indexSecond,indexFirst);

let firstHigherIndex = indexSecond > indexFirst;
let secondHigherIndex = indexFirst > indexSecond;



console.log("First Person's BMI is higher than second : " + firstHigherIndex);
console.log("First Person's BMI is higher than second : " + secondHigherIndex);

let secondUnderweight = (indexSecond > 0) && (indexSecond <= 18.4)
let secondNormal =  (indexSecond >= 18.5) && (indexSecond <= 24.9);
let secondOverweight = (indexSecond >= 25.0) && (indexSecond <= 29.9);
let secondFat = (indexSecond >= 30) && (indexSecond <= 34.9);

console.log("Second person is underweight : " + secondUnderweight);
console.log("Second person is normal : " + secondNormal);
console.log("Second person is overweight : " + secondOverweight);
console.log("Second person is obese : " + secondFat );

