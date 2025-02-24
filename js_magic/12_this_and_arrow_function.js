// this is used to refer the current object/context/variable in JS. It is similar to self in python
// this is used to access the variables/attributes of current context

const user = {
    name: "Amit",
    age: 26,
    welcomeMessage: function(){
        console.log(`Hi ${this.name}, welcome to our website.`)
        // console.log(`this is holding: ${this}`) // we will not get proper way using string interpolation
        console.log("this is holding: ",this)
    }
}

user.welcomeMessage()
user.name = "Shweta"
user.welcomeMessage()

console.log("this is holding on global scope: ",this) // {}
// In browser's console, this will hold window object which helps in capturing different events in browser like click, tab
// switch etc.:
// Window {0:global,1:Window,window:Window}

function thisValueInFunction(){
    let user = "Amit"
    let obj = {
        name:"Amit",
        age:26
    }
    console.log(this)
    console.log(this.user) // we will get undefined and this can access only object's attributes. It cannot access variables or objects inside the function
    console.log("trying to access keys of object: ",this.obj) // undefined
}
thisValueInFunction()
/*
Output of this via console.log:
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/



// creating arrow functions and using this in arrow function
// For arrow function we remove function keyword and after () we use => rest of the things are same.
// syntax: () => {}
const arrowFunction = () => {
    let user = "Amit"
    // we can use this inside the arrow function and its value will be {}
    console.log(this) // output: {}
}

arrowFunction()

const sumArrowFunction = (num1,num2) => {
    return num1+num2
}

console.log("Using sumArrowFunction() function for num1= 3 and num2= 4: ",sumArrowFunction(3,4))

// Another way of writing same arrow function is known as implicit return which we mostly use for single line function like lambda in python
// here we dont use {} and return keyword but directly write the value to return after => in same line
const sumArrowFunctionImplicit = (num1,num2)=> num1+num2
// const sumArrowFunctionImplicit = (num1,num2)=> (num1+num2) // we can also wrap num1 +num2 in () as well and work in same way 
// and mostly used to return object

console.log("Using sumArrowFunctionImplicit() function for num1= 3 and num2= 4: ",sumArrowFunctionImplicit(3,4))

// using implicit arrow function to return object. If we will not use () then we will get undefined as output as {} will be used for function body
const returnObjectViaArrowFunction = ()=> ({name:"Amit","age":26})

console.log("returnObjectViaArrowFunction(): ",returnObjectViaArrowFunction())
