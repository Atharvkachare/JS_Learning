// Terma: "unary","Binary", "operand"

let x = 1
x = -x
console.log(x) // -1  unary negation was applied

let r = 1, y=33
console.log(y-x) // 34 , binary minus substract values

// Math Operators
console.log(1+2) // 3, Addition
console.log(1-2) // -1, Subtraction
console.log(1*2) // 2, Multiplication
console.log(1/2) // 0.5, Division
console.log(5%2) // 1, Remainder

// String concatination with binary 
console.log('1' + 2) // "12", number is converted into string and then concatenated
console.log(1 + '2') // "12", number is converted into string and then concatenated
console.log(1 + 2 + '3') // "33", first 1 and 2 are added and then converted into string and concatenated with "3"

// Numeric conversion with unary plus +
// No effect on numbers
console.log(+1) // 1
console.log(+"") // 0, empty string is converted into 0
console.log(+" ") // 0, space is also converted into 0
console.log(+"2") // 2, string "2" is converted into number 2

let c = 1
console.log(+c)


// Binary plis would add them as a strings
let apple = "2"
let orange = "3"
console.log(apple+orange) // "23", both are strings and concatenated together


// If you want to add then as a numbers, we need to convert and then sum 
let apple2 = "2"
let orange2 = "3"
console.log(+apple2 + +orange2) // 5, both are converted into numbers and then added together


// Assignment Operators

let a = 2*2 + 1
console.log(a) // 5



// Increment and Decreament Operators
let counter = 2
counter++
console.log(counter) // 3, counter is incremented by 1
counter--
console.log(counter)

// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.


// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

/* AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

// Task The Postfix and prefix forms
let ak = 1, pj = 1
let sd = ++ak
console.log(sd)
let ss = pj++
console.log(ss)