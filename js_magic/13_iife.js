// IIFE (Immediately Invoked Function Expressions): These are the functions which are declared and invoked immediately
// to stop avoiding pollution of variables inside the function from global variables
// Syntax: (function definition)() // first () wraps the function definition and second () executes the function defined inside first ()

(function iifeFunction(){
    console.log("Executing iife function")
})();

// If we are declaring two iife one after another then we must separate them with ; as iife function does not know where its context ends
// iife functions with name are also called named iife functions
(function iife1(){
    console.log("Executing iife1")
})();
(function iife2(){
    console.log("Executing iife2")
})();

// Declaring arrow function in iife. 
// arrow iife functions are also called simple iife or unnamed iife
(()=>{
    console.log("Executing arrow function inside iife")
})();

// Declaring iife function with arguments
(function iifeWithArgs(name,age){
    console.log(`Name: ${name} | Age: ${age}`)
})("Amit",26);

// Declaring arrow iife function with arguments
((name,age)=>{
    console.log(`Name: ${name} | Age: ${age}`)
})("Amit",26);