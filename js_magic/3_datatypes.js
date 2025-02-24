/*
-> With time JS has evolved and included new concepts like classes, module, arrow functions. To avoid the issue/conflict
between old JS and new JS, ECMA committee of JavaScript, which sets standards for JS, decided some notations like
before writing program in JS file, type "use strict" and node or other JS engine will treat program according to new
version of JS and now "use strict" is default mode so we can also skip this but it is a good practice to write the line.

-> The documentation of JS is present on tc39.es. But mdn (unofficial documenation of JS by Mozilla) is much better for understanding

-> If we use alert(val) via node then we will get error but if we write the same code in console of browser then we will get a pop-up message
and will show output of the operation performed in (). like If I run alert("hello") then in Pop-up we will get "hello" message

-> We use ; to separate two statements written in same line else we have to write the next statement in new line
console.log("first");console.log("second")

console.log("first");
console.log("second");

console.log("first")
console.log("second")

All 3 versions are correct but prefer 2 and 3 version
*/

"use strict"; // to tell JS Engine to compile the code according to newer versions of JS
// alert(3+3)

/*
Datatypes in JS
number: -(2^53 – 1) to (2^53 – 1) 
bigint: If number value is above -(2^53 – 1) to (2^53 – 1) the value then use bigint instead of number. Use BigInt() or digit and then n
string: Use "Values" 
*/

const number = 3
const bigint = BigInt("239990")
const bigint1 = 2333n
let string = "string"
const string1 = 'string1'
let boolTrue = true
const boolFalse = false
let nullVar = null // standalong value and used to show that we didnot received any output from db, server or other service

// symbol datatype (usually used in react) is used to check uniqueness of an component

// In JS, null is a standalone value to represent empty value and if we declare a variable and dont assign the value and print in the console 
// then we will get undefined but null and undefined are different

/*
-> Primitive datatypes(call/access by value): In Primitive datatype, a new copy of the actual data is stored for other variable. 
So any modification made in the new variable will not impact the original variable.
    number (int, float)
    bigint
    boolean
    string
    symbol
    null
    undefined

-> Non-Premitive/reference datatypes(Access/Call by Reference): In Non-Primitive datatype, a reference/memory-address of the actual value is passed to 
new variable. So any modifications made in the new variable will also make the change in orignial variable as new variable is accessing the 
memory-address of original variable and making change in data stored there.
    object
    array
    function
    derived datatypes

-> Primitive vs Non-Primitive is mainly different from each other based on the way they are stored in the memory and access them

-> There are 2 types of memories in JS: Stack Memory and Heap Memory
    1. Stack Memory is used to store the Primitve datatypes like number, string, bool, null, symbol, bigint, undefined. 
    2. Heap Memory is used to store the Non-Primitive datatypes like object, array, function, derived objects.

-> Statically typed language is language where we define the datatype of variable during declaration of variable like Java, C/C++, typescript whereas 
in Dynamically typed language, we dont declare datatype of variable during definition but decided on run time when value is assigned to variable like
Python, JavaScript.
*/

console.log(number," type: ",typeof(number),"\n",bigint," type: ",typeof(bigint),"\n",bigint1," type: ",typeof bigint1,"\n");
console.table([number,bigint,bigint1,string,string1,boolTrue,boolFalse])
console.log("type of undefined:",typeof undefined,"\ntype of null:", typeof null) // type of undefined is undefined but for null, its type is object


// Symbol is used to generate unique symbol value and even for same input, output will be different each time
const id = Symbol('123') // will return another Symbol value as output
const id1 = Symbol('123')

console.log(id, id1, id==id1) // Symbol(123) Symbol(123) false 


// Array
let arr = ["namr1",2,true,[1,2]]
const ar = [1,2,3,4]

console.log("Arrays: \n",arr,"\n",ar)

// objects
let obj = {
    name: "Amit",
    22: "Age",
    true:"bool"
}
console.log(obj, obj[22],obj.name,obj.true)

// function
const myfunc = function(name,age){
    console.log("Running the function")
    console.log("Name: ",name,"\nAge:",age)
}

myfunc("Amit",22)
/*
Running the function
Name:  Amit 
Age: 22
*/
console.log(myfunc("Amit",22)) 
/*
Running the function
Name:  Amit 
Age: 22
undefined // we are getting undefined because function is not returning anything. similar behaviour which we see in python
for function which just prints and does not returns anything
*/

// type of non-primitive datatypes is object

console.log("Type of array: ",typeof arr) // object
console.log("Type of object: ",typeof obj) // object
console.log("Type of null: ",typeof null) // object
console.log("Type of undefined: ",typeof undefined) // undefined
console.log("Type of function: ",typeof myfunc) // object // it is also called object function