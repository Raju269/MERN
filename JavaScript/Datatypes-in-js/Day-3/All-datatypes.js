//  Primitive Data types 
// Number
let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

// String 
let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);

// Boolean 
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

// Null value 
let age = null;
console.log(age)


// Undefined 
let a;
console.log(a);

// Symbols 
let sym1 = Symbol("Geeks");
let sym2 = Symbol("Geeks");
console.log(sym1 == sym2);

// Bigint 
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);


// Non-Primitive Data Types

// Objects 
let gfg = {
    type: "Company",
    location: "Noida"
}
console.log(gfg.type);
console.log(gfg)

// Arrays


let a1 = [1, 2, 3, 4, 5];
console.log(a1);

let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);

// Function 


// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));

// Date Objects


// Creating a new Date object for the
// current date and time
let currentDate = new Date();

// Displaying the current date and time
console.log(currentDate);


// Regular Expression 

// Creating a regular expression to match the word "hello"
let pattern = /hello/;

// Testing the pattern against a string
// Returns false because "hello" is not present
let result = pattern.test("Hello, world!"); 

console.log(result);


// Interesting Facts about Data Types

let x = 42;   
console.log(x)

x = "hello";  
console.log(x)

x = [1, 2, 3]
console.log(x)


let s = "hello";
console.log(s.length);  

// Example with a number
let x1 = 42;
console.log(x.toString()); 

// Example with a boolean
let y = true;
console.log(y.toString());

/* Internal Working of primitives
   to be treeated as objects
   
Temporary wrapper object
let temp = new String("hello"); 

console.log(temp.length); // 5

The wrapper is discarded after use
temp = null; */


console.log(typeof NaN);
console.log(NaN === NaN);


let symbol1 = Symbol("abc");
let symbol2 = Symbol("abc");
console.log(symbol1 === symbol2);


let x123 = 42;     // Integer
let y123 = 42.5;   // Floating-point

console.log(typeof x123); 
console.log(typeof y123);


let s1234 = "gfg";   // String
let s234 = 'g';    // Character

console.log(typeof s1234); 
console.log(typeof s234);