/* 
* 0. String Manipulation
* Strings are character data. Strings must be enclosed with single
* or double quotes. Strings are a string of characters or an array 
* of characters
* 
* 1. With Operators
* Comparison operators can be used on strings. Strings can also 
* work with concatenation. Concatenation uses two strings and 
* return another string.
*/
var a = "Hello";
var b = "World!";

console.log(a + ' ' + b); //this will print "Hello World!"

// += can be used as well

var message = "Hello";
message += " World!";
console.log(message);

/*
* 2. With String methods
* Strings can be treated like an array o characters. You can access
* individual characters using array-syntax.
*/

var name = 'Fraboni';
console.log(name[0]); //prints F

// String methods:
'hello'.toUpperCase(); // "HELLO";
'LOL'.toLowerCase(); // "lol"
'    omg  '.trim(); // "omg"
