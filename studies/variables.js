/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* 0. There are three ways of holding memory in javascript ES6 now. Assigning variables, constants, or lets  
* is the process of hanging onto values. Assigning them to one of these three pines them to the scope in
* which they are created.
*
*/

// a variable assignment
var myNum = 10;

// a const assignment
const greeting = 'Hello';

// a let assignment
let canDrive = true;

// Below is a list of properties that define the behavior of var, const and let
/*
* var
* reassignable: yes
* hoisted: yes
* scoped to functions: yes
* scoped to if blocks: no
* scoped to loop blocks no
* 
* let
* reassignable: yes
* hoisted: no
* scoped to functions: yes
* scoped to if blocks: yes
* scoped to loop blocks yes
* 
* const
* reassignable: no
* hoisted: no
* scoped to functions: yes
* scoped to if blocks: yes
* scoped to loop blocks yes
*
* 1. LET 
* beginning in javascript 1.7(ES6) let allows us to declare a blockscope local
* variable. let limits the variables scope to that block.
* 
*/

console.log(availableOutsideIfBlock); // prints undefined and var is hoisted to here
console.log(onlyAvailableInsideIfBlock); // this will throw an error this is only 
// scoped to if block
const CITY = 'New Orleans';
if(CITY === 'New Orleans') {
    console.log(onlyAvailableInsideIfBlock);
    
    var availableOutsideIfBlock = 'foo'; 
    let onlyAvailableInsideIfBlock = 'bar';
} 

// main issues with let can be avoided by declaring them at the top of the scope

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

// let works very much like var in the way that variables declared by let have 
// their scope in the block they are declared.

/* 2. CONSTANTS
* Contairs with values that will never change. Constants are block scoped and not hoisted
* 
*/
const BIRTH_PLACE = "Timbuktu";
console.log(BIRTH_PLACE); // prints Timbuktu

// you cannot leave a constant unassigned

// NOT ALLOWED.
const BIRTH_PLACE;

// constants are block scoped meaning that they are pinned to the code block in which they are declared
// constants are NOT hoisted to the top and their values will not be defined until declaration/assignment

/* 
* 0. Hoisting
*   Before statements are executed all var and function declarations are brought to the top of the program
*   var will not throw ReferenceError if you try referencing them before they are declared. They will return undefined
*   only the declarion is brought to the top not the initialization
*/

console.log(x); // This will print undefined 

var x = 10;

console.log(x); // this will print 10

// let and const are NOT hoisted. they will have a reference error thrown if you try to reference them before 
// they are declared

console.log(y); // Reference Error
console.log(name); // Reference Error

let y = 10;
const name = "ben";
