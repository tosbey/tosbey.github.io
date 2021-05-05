/*
* 0. Control Flow is the order in which a computer executes statements
* in a script. Code is run from the first line in a file to the last 
* line. The file uses a conditional structure so that different code 
* executes depended on whether the conditional was completed ot not.
* 
* 1. if, else-if, and else statements
*   a. To start a conditional block of code, you first use an if statement
*   b. If you want to chain any number of statements you use an else-if statements
*   c. You can append an else at the end of your chain.
*   d. The anatomy of conditional statements:
*       A. test-condition in parentheses
*       B. BODY that is executed if the condition is found to be true.
* 
*/

var condition = true;
if (condition) {
    // block of code
} else {
    // block of code
}

/*
* 1. Switch statements
* If-else statements can usually do the work for you but it makes for cleaner code
* sometimes. Switch statements evaluate an input expression, match the 
* expression's value to a case clause, and executes statements associated with 
* that case.
* A break statement should end the case! 
* 
*/

var color= 'red';

switch(color) {
    case 'orange':
        console.log("The color provided was orange.");
        break;
    case 'red':
        console.log("The color provided was red.");
        break;
    default:
        console.log("Sorry, that is not a color we recognize.");
}