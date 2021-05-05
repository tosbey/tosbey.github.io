/*
* 0. Loops
*   Loops are features of JavaScript that allows us to execute lines of code
* as many times as we need to. They are definitely handy for interating over 
* collections of data.
* 
* 1. The for Loop
* This is used to loop over arrays.
*/

var arr = [];
for(let i = 0; i < arr.length; i++){
    console.log(i);    
}

//looping backward over array
for(let i = arr.length - 1; i > -1; i--){
    console.log(i);    
}
/* 
* 2. The for-in Loop
* for-in loops pull out keys of an object one by one
*/
var person = {nameFirst: "Taylor", nameLast: "Osbey",};

for (var key in person) {
    console.log(person[key]);
}

// you must use array-syntax when dynamically accessing elements.

/*
* 3. The while Loop
* 
*/