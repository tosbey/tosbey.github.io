/* 0. Operators
* Operators act out our data. Operators are classd by what they do and 
* how many operands they require.
* Types of Operators
* ===================================
* 1. Assignment operators
* 2. Arithmetic operators
* 3. Comparison operators
* 4. Logical operators
* 5. Unary operators
* 6. Conditional(ternary) operator
* 
*
* 1. Assignment Operators
* The equal sign is an assignment operator. 
*
*/
//( = ) Assignment operator
var myPartner = "Selena";

/*
* 2. Arithmetic Operators
* They are used for simple math. Order of Operations applies!
*
*/

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 2);
console.log(1 / 2);

// Modulo - returns the remainder of a division operation // 
console.log(4 % 4); // prints 0
console.log(4 % 3); // prints 1
/*
* 3. Comparison Operators
* Comparison operators will compare two values(or two operands) and 
* evaluate to a Boolean (true or false);
*/
console.log(1 < 2);
console.log(1 + 1 / 3 > 2);
console.log(1 <= 2);
console.log(1 >= 2);

/* 
* 4. Logical Operators
* && is the AND operators. Both conditions must be true
* || is the OR operator. One or the other must be true
* ! is the bang operator. Flips around the truthiness of a value;
*/

console.log(1 < 2 && 1 > 0);
console.log(1 < 2 || 1 > 0);

console.log(!true); // prints false
console.log(!false); // prints true

/* 
* 5. Unary Operators
* A unary operation is an operation with only one operand.
*/

var i = 1;
console.log(-i);
console.log(1-1);

console.log(typeof 1);
console.log(typeof "Matteo");
console.log(typeof (1 < 2));

// negation, the bang operator: flips the truthiness of a
// value //
console.log(!true);
console.log(!false);
console.log(!null);

/*
* 6. Ternary Operators
* This is the only JS operator that takes three operands
*/

function getFee(isMember) {
    return(isMember ? '2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"
