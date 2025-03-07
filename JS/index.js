// 1. Keyword (Schlüsselwort): let
// 2. variable (variable): result
// 3. expression (Ausdruck,Term): 1 + 2
// 4. zuweisung: =
// 5. terminator: ;
// ==> statement: let result = 1 + 2;
let result = 1 + 2; // 3

// 6. function: console.log
// 7. argument: result
// 8. terminator: ;
// ==> statement: console.log(result);
console.log(result);

// code blocks (Codeblöcke): statements belonging together
{
    // 1. keyword: let
    // 2. variable: a 
    // 3. assignment: =
    // 4. constand: 10
    // 4. terminator: ;
    let a = 10;
    let b = 20;

    let c = a + b;

    console.log(c);
    console.log(result);
}

// console.log(a); // ReferenceError: a is not defined

// calculations

let a1
let b1


a1 = 7;
b1 = 3;

// addition
let sum = a1 + b1; // 10


// subtraction
let diffrence = a1 - b1; // 4

// multiplication
let product = a1 * b1; // 21

// division
let quotient = a1 / b1; //2,333333333333....

// modulo (REst eine ganzahligen Division)
let remainder = a1 % b1; // 1

// exponentiation (Potenzierung)
let power = a1 ** b1 // 343

// expression
let expression = (a1 + b1) * b1; // 30


// value asignment (Werte zuweisen)
a1 = 23
b1 = 42

// output (Ausgabe auf der Konsole)
console.log("a1: " + a1);
console.log("b1: " + b1)

// if statement
if (a1 < b1) {
    console.log("a1 is smaller than b1");
}

// if - else  if - else statement
if (a1 == b1) {
    console.log("a1 equals b1");
} else if (a1 < b1) {
    console.log("a1 is not smaller than b1");
} else {
    console.log("a1 is greater than b1");
}

// comparision oppertors

// equal to (ist gleich)
console.log(1 == 1); // true (wahr) 

// not equal (nicht gleich)
console.log(1 != 1); // false (falsch)

// greater than (grösser als)
console.log(1 > 1); // false (falsch)

// greater than or equal to (grösser al oder gleich)
console.log(1 >= 1); // true (wahr)

// less than (kleiner als)
console.log(1 < 1); // false (falsch)

// less than or equal to (kleiner oder gleich)
console.log(1 <= 1); // true (wahr)


// Values and Types

// primitive data types (primitive Datentypen)
integer = 213; // Ganzzahl
floatingPoint = 3.1415926; // Gleitkommazahl
boolean = true; // Wahrheitswert (true oder false)

// strings (Zeichenketten)
string1 = "Hello World!"; // Zeichenkette
string2 = "it is great"; // Zeichenkette
string3 = "it's great"; // Zeichenkette

// concatenation (Verkettung) of strings
string4 = string1 + " .... " + string2;
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

// concatenation of strings and numbers
// side note:
//           a1 und b1 as well as result are declared and initialized above
//           so we do not need to do it again
a1 = 10
a2 = 20
result = a1 + a2
console.log("The result is: " + result);

// loops (Schleifen)
// for loop

console.log("Hannes");
console.log("Hannes");
console.log("Hannes");

let sumOFEvenNumbers = 0;
for (let i = 0; i < 10; i = i + 1) {
    console.log("Durchlauf: " + i);
    console.log("Hannes");
}

let i = 1;
console.log(i);

for (let i = 0; i < 10; i++) {
    console.log("Durchlauf: " + i);
    console.log("Stauss");
}

{
    let i = 1;
    console.log(i); // 1
    {
        let i = 2;
        console.log(i); // 2
        {
            let i = 3;
            console.log(i); // 3
        }
    }
}

let summOfEvenNumbers = 0;
for (let i = 0; i < 10; i = i + 1) {
    if (1 % 2 == 0) {

    }
}


// functions
function summm(n1, n2) {
    return n1 + n2
}


let n1 = 5;
let n2 = 10;

let resultSum = n1 + n2;

result = summm(5, 10);

// function kx + d, k = 10, d = 5
function linearStraight(x) {
    return 10 * x + 5
}

summm(10, 15);

// 1. keyword function
// 2. name of the function we want to declare (definieren)
// 3. ()
// 4. with the bracket we can hand in parameters to the function
// 5. opening curly brace {
// 6. statements
// 7. optionally a return
// 8. closing curly brace }
function log(text, repeat) {

    // for loop:
    // 1. declare variable i and initialize it to 1: let i = 1
    // 2. check the conditial expression
    // (i < result), i = 1 and repeat = 10 => 1 < 10 = true
    // 3. if the condistion is still true, then execute statements within the curly braces { }
    //    in our case this is to execute the statements "console.log(i + ": " + text);"
    // 4. i = i + 1 => i = 1 => i = 1 + 1 = > i = 2
    // repeat till 10
    let i = 100;

    for (let i = 1; i <= 10; i = i + 1) {
        console.log(i + ": " + text);
    }
    console.log("value i is: " + i); // inner scope(umfang) of the for loop
}

log("hallo welt", 10)
log("hallo world", 5)

const sumFuncVar = function (a, b) {
    return a + b
}
