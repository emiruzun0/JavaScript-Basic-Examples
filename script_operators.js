//Operators

let val;
const a = 10;
const b = 5 ;
const c = 5;
let d = 3;

// 1 - Arithmetic Operators

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;

// 2 - Assignment Operators

val = a;
val += a; //val = val + a;
val -= a;
val *= a;
val /= a;
val %= a;


// 3 - Comparison Operators

val = a==b;
val = b==c;
val = b === c;  //Value and type control
val = a!=b;
val = a!==b;
val = a > b ;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b; 

// 4 - Logical Operators

    // && (And)

    val = (a > b) && ( a > c)

    // || (Or)

    val = (a>b) || (a<c);

    // ! (Not)

    val = !(a>b);


console.log(val);
console.log(typeof val);