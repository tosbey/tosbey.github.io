/* 0. Datatypes
* Datatypes are how we categorize different types of data on javaScript. 
* They have some unique and shared properties between them. They allow 
* the javaScript interpreter to work with different types of data.
*
* 1. Primitive Datatypes
* Number: Numeric data
* String: Character data
* Boolean: true or false
* NaN: Not a Number (typeof NaN; // => 'number')
* undefined: no-value, incept, unitialized.
* null: no-value, nullified by a programmer
* Infinity and -Infinity: reresents the mathematical infinity. 
* It's greater than any number
* 
* Primitive datatypes are simple because they are Atomic(immutable) and Copy by Value
* 
* 2. Complex
* Object: an object is a value in memory which is possibly 
* referenced by an identifier. Objects use key value pairs to as their properties
* Array: a collection of values. An array is a collection of ordered values not named 
* values. Each element is denoted by a numeric position in the array.
* Function: a code snippet that can be called by other code or by itself, or a variable 
* that refers to the functions. When a function is called arguments are passed as input
*
* Complex values aggregate other values are indefinite size. They are copy by reference 
* meaning when assigning or passing, complex data-types are passed by reference
* 
* What is the difference between primitive/simple and complex data types?
* 
* Variables can hold the actual values of primitive types but they can only hold the 
* references to complex types. Variables are named buckets which we put value into. 
* Variables can store primitive datatypes because they have a fixed size in memory.
* The largest primitive is a number, which takes up eight bytes of memory. That is the
* exact size of memory a variable can use. A boolean only takes up one bit.
*
* Primitive values are passed to a function BY COPY, complex values BY REFERENCE. What 
* does this mean and how are they different?
* 
* Primitive values are copied by value
*/
var a = 1;
var b = a; //the value stored in a is copied to b

b = 2;  //changing the value of b doesn't effect the vlue of a
console.log(a) // this prints 1

/*
* Complex types are copied by reference
*/

var a = {one: 'foo'};

/*
* the value stores in b is a reference to the value stored in a. they both
* point to the same object.
*/
var b = a;

/* changing the value of b effects all references b/c the value is a 
* reference to the same object
*/

b.one = 'bar';

console.log(a.one);

// this is also true for a function call

function doSomething(z) {
    z += 1;
}

var a = 1;
doSomething(a);

/*
* This prints 1 not 2 as the value at a is copied when pass to the 
* invocation of doSomething.
*/
console.log(a);
