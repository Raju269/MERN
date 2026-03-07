// 1. Using Template Literals (Template Strings)
let fName = "kaju";
let lName = "Kumar";

let fullName = `${fName} ${lName}`;
console.log(fullName);


// 2. Using the + Operator

let firstName = "Raju";
let lastName = "Kumar";

let fullName2 = fName + " " + lName;
console.log(fullName2);

// 3. Using the concat() Method

let greeting = "Hello";
let time = "Morning";

let mes = greeting.concat(" ", time);
console.log(mes);

// 4. Using join() for Arrays

let A = ["Hello", "world", "from", "JavaScript"];
let s = A.join(" ");// they convert all value in string format 
console.log(s);

// 5. Using String.fromCharCode() and reduce()
let a = [72, 101, 108, 108, 111];
let greet = a.reduce((acc, code) => acc + String.fromCharCode(code), "");
console.log(greet);