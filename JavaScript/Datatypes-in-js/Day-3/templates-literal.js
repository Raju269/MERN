
// JavaScript Template Literals

let a12='GFG'
console.log(`hello ${a12}`)

// String Interpolation with Expressions

let x = 5;
let y = 10;
console.log(`The sum of ${x} and ${y} is ${x + y}`);

// Multi-line Strings with Template Literals

const sbr = `This is a multi-line
string that spans across
several lines.`;
console.log(sbr);

// Tagged Template Literals
function greet(strings, name) {
    return `${strings[0]}${name.toUpperCase()}${strings[1]}`;
}

const name = 'gfg';
console.log(greet`Hello, ${name}!`);

// Escaping Backticks and Dollar Signs
const str = `This is a backtick: \` and this is a dollar sign: \\$`;
console.log(str);

// Mutli line 
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log(poem);

// Dyanmic 
const a = 5, b = 10;
const result = `Sum of ${a} and ${b} is ${a + b}.`;
console.log(result);

// taged templates
function tag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
}
const output = tag`Hello, ${"Elis"}!`;
console.log(output);

// html 
const title = "Welcome";
const html = `<h1>${title}</h1>`;
console.log(html);

// 5. Conditionals in Templates
const isAdmin = true;
const userRole = `User role: ${isAdmin ? "Admin" : "Guest"}.`;
console.log(userRole);

// 6. Loops with Templates
const items = ["apple", "banana", "cherry"];
const list = `Items: ${items.map(item => `${item}`)}`;
console.log(list);

// 7. Embedding Functions
const toUpper = str => str.toUpperCase();
const s = `Shouting: ${toUpper("hello")}`;
console.log(s);