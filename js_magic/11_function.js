// creating function in JS

// Parameter are defined during function definition
// Arguments are passed during function calling

// function with no parameters
function helloWorld(){
    console.log("Hello World")
}

helloWorld() // passing 0 arguments to function

// function with paramters and return statement
function sum(num1,num2){
    if (!(num1===undefined | num2===undefined)){
        console.log("Please pass values of both num1 and num2")
        return // we can also use return in similar way we use in python
    }
    return num1+num2
}

// We can define function name in 2 ways:
// 1. let functionName = function(parameters){body} // this is also known as EXPRESSION
// 2. function functionName(parameters){body}

let multiply = function(num1,num2){
    // If we will not add const or let infront of variable then it will become global variable
    console.log(`Value of num1: ${num1} and num2: ${num2}`)
    const result = num1*num2 // scope of the result variable is within this function only
    return result
}

let result = sum(3,4) // passing arguments to the function during calling
let multiply_result = multiply(3,4)
console.log("Output of sum() function for num1 = 3 and num2 = 4:",result)
console.log("Output of multiply() function for num1 = 3 and num2 = 4:",multiply_result)

// if we dont pass the arguments for a function, then JS does not raise any error and Instead assign the undefined value to the parameters
console.log("Calling sum() function without arguments: ",sum()) // output will be NaN (Not a Number)
console.log("Calling multiply() function without arguments: ",multiply()) // output will be NaN (Not a Number)
console.log("Calling sum() function with arguments 3 and 'a': ",sum(3,"a")) // output will be NaN (Not a Number)


// passing default value to parameter
function funcWithDefaultParams(name="Amit"){
    return `${name} has called the funcWithDefaultParams()`
}

console.log("Passing arguments:",funcWithDefaultParams("Shweta"))
console.log("Using Default Parameter values as arguments:",funcWithDefaultParams())

// Passing infinite parameters in a function (similar to *args of python)
// for passing infinite parameters, we use ... (rest operator) [If use in function definition then rest operator else spread operator]

function infiniteParams(...args){
    return args // return will be array
}

console.log("Using infinite Parameters values as arguments:",infiniteParams(1,2,3,4,5,6))

function fixPlusInfiniteParams(arg1,arg2,...args){
    return args // first 2 arguments will go into arg1 and arg2 and after that all remaining will go in args
}

console.log("Using infinite Parameters values as arguments:",fixPlusInfiniteParams(1,2,3,4,5,6)) // output: [3,4,5,6]


// Using object and array as function parameters
function arrayAndObjectAsParams(array,object){
    console.log("Accessing 0th index value of array:",array[0])
    console.log("Accessing user key's value of object:",object.user)
}

arrayAndObjectAsParams([20,40],{user:"Amit"}) 
// Here we must have to pass array and object parameters values
// if we will not pass value of array then error will be raised as we are accessing 0th item
// But if we will not pass user key in object then we will get undefined for object.user
arrayAndObjectAsParams([20,40],{age:26}) 


// Here we are calling function before definition and it will work as we have not holded the function in variable or not used expression
functionBeforeDefinition()

function functionBeforeDefinition(){
    console.log("Function called before definition")
}

// Here we are calling the expression function before definition and we will get error as variable is holding the function definition and 
// variable is not defined during function calling and it will produce 
// `ReferenceError: Cannot access 'expressionFunctionBeforeDefinition' before initialization` Error
expressionFunctionBeforeDefinition()

const expressionFunctionBeforeDefinition = function (){
    console.log("Expression Function called before definition")
}