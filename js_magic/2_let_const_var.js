const transactionId = "ConstantValue" // const does not allow change of value after declaring and assigning the value
let varType1 = "letValue" // let is used to declare the variable. We can change the value after assignment
var varType2 = "varValue" // var is used to declare the variable. We can change the value after assignment (GLOBAL SCOPE)
varType3 = "directVariable" // If we dont add let or const before the variable then this variable will become GLOBAL SCOPE Variable

let variableWithOutValue // The output value in console log will be `undefined`
let variableWithOutValueWithColan; // we can use ; or skip it. both ways are allowed.
variableWithOutValueWithColan = "Assiged the value" 
// If we first declare or use variable with let or const and then re-assign it value 
// then it does not change the scope of the variable

/*
--> Why we have different ways to declare the variable
In initial days of JavaScript, there was issue of block scope and functional scope where JS had no control. So If we declare a variable with `var` keyword
and if we use the same variable in 10 different parts of the code like inside if condition, function etc. and change value anywhere then on 
all the places the new value will overwrite old values. To Overcome this issue, JS introduced the `let` keyword to resolve the issue of block scope.
If we declare a variable using `let` keyword at 10 different places with different scopes and change values of variables at differnt places then
other variables were unaffected with the changes if they were out of scope of the variable where change was made. 
So now we only use `let` keyword.
*/

// console.log allows printing of variables/const in line.
console.log("Printing const value of transactionId: ",transactionId," and variableWithOutValue: ",variableWithOutValue); 

// consolde.table is used to print multiple variables/const values as table format. First column will be `(index)` 
// and other column will be `Values`. The `(index)` column values starts from 0 to n-1 where n is number of variables/const to print
console.table([varType1,varType2,varType3,variableWithOutValue,variableWithOutValueWithColan]) 


/*
Block Scope: If we write any code inside {}, then it is Block scope
Global Scope: If we write code outside {}, then it is global scope

if let and const are written inside {} then they have Block scope withing {} and cannot be accessed outside {}
If var or directly variable is defined then scope will be Global even if variable is defined inside {}

let a=5 // global scope 
const b=7 // global scope
var c = 9 // global scope
d = 11 // global scope

if true{
    let e = 13 //Block scope
    const f = 15 //Block scope
    var g = 17 // global scope
    h = 19 // global scope
    let a = 21 // here a will be 21 but outside of {} a will be 5
    const b = 23 // here b will be 23 but outside of {} b will be 7
    var c = 25 // c will be 25 inside of {} and outside of {}
    d = 27 // d will be 27 inside of and outside of {}
}
console.log(a) // output: 5
console.log(b) // output: 7
console.log(c) // output: 9
console.log(d) // output: 11
console.log(e) // output: Error of e not defined
console.log(f) // output: Error of f not defined
console.log(g) // output: 17
console.log(h) // output: 19
*/
