// In JS, we can create object in 2 ways:
// 1. constructor (it will be singleton object)  and 2. object literal(we can create as many objects/instances as )
// there is no impact on the performance based on the method used for creating instance

// singleton means only one instance of the object can be created. For this we use constructor method
let singletonViaConstructor = Object.create({gender:"male"}) // here we cannot directly assign values and it will only return {}
console.log("singletonViaConstructor: ",singletonViaConstructor)

// literal method is used to create multiple instances of the object
let objectViaLiteral = {name: "Amit"} // here we can directly assign values
console.log("objectViaLiteral: ",objectViaLiteral)

// adding key, values in object
singletonViaConstructor["name"] = "Amit"
objectViaLiteral["age"] = 26

console.log("singletonViaConstructor: ",singletonViaConstructor)
console.log("objectViaLiteral: ",objectViaLiteral)

// Accessing values
console.log("Accessing via . :",objectViaLiteral.name)
console.log("Accessing via [] :",objectViaLiteral["name"])
// . method cannot be used if there is space between key name like full name then we have to use only ["full name"]

// Using Symbol as key
let sym = Symbol("123")
objectViaLiteral[sym] = "k"
console.log(objectViaLiteral);

let obj1 = {
    "name":"Amit",
    age: 25,
    [sym]:"myVal", // here we have used [] and inside it we have used sym variable, we cannot pass sym without [] brackets 
    sym:"sym2" // else it will be treated as string like age is treated like normal string
}
console.log(obj1)


// creating a immutable object or freezing a object
obj1['name'] = "Amit before freeze"
console.log("object before freeze: ",obj1)
Object.freeze(obj1)
obj1['name'] = "Amit after freeze" // we will not get error but object will remain unchanged
console.log("object after freeze: ",obj1)

// using function inside object
// here we cannot use obj1 as it is already freezed and will not allow new values or modify old values
objectViaLiteral.myFun = function(){
    console.log("Hello from myFun")
}

console.log("objectViaLiteral.myFun output without ():",objectViaLiteral.myFun)
console.log("objectViaLiteral.myFun output with ():",objectViaLiteral.myFun())
console.log("We will not use console.log to remove the undefined section and directly call objectViaLiteral.myFun():")
objectViaLiteral.myFun()

// Accessing keys inside the function in object
objectViaLiteral.myFun2 = function(){
    console.log(`Hello from myFun2 to ${this.name}`) // this keyword refers to the current object
} 
objectViaLiteral.myFun2()

// ?. is used to check if key exists or not and execute part after ? if key exists. It is used with apis/objects where we might not get some keys in
// all objects. If key is missing then undefined will be returned
console.log(objectViaLiteral?.class)
console.log(objectViaLiteral?.name)
console.log(objectViaLiteral["class"]) // if we dont want to use ? then we can directly use [] brackets as well and it will return undefined


// assign method and spread operation to concat/join two or more objects into one object
let objA = {name1:"Amit","age1":26}
let objB = {name2:"Shweta","age2":27}
let objC = {name3:"Seema","age3":24}

let objD = Object.assign({}, objA, objB, objC) // if we will use different objects with same key then latest key value will overwrite old values of same key
console.log("objD using assign: ",objD);
objD = {...objA,...objB,...objC}
console.log("objD using spread: ",objD);

let objE = Object.assign(objA, objB, objC) 
// if we will not pass {} as target then first object will be treated as target and will be updated with new values so we will get same value in 
// objE and objA. So if we are using assign then always pass {} as target and then pass sources to assign/concat 
console.log("objE using assign: ",objE);
console.log("objA after assign: ",objA);

// get array of keys, values and nested array of key,value pair like [[k1,v1],[k2,v2]]
console.log("keys in objE:",Object.keys(objE))
console.log("values in objE:",Object.values(objE))
console.log("[key,value] in objE:",Object.entries(objE))

// check if object has a key or not
console.log("Is dating key present in objE:",objE.hasOwnProperty("dating"))
console.log("Is name1 key present in objE:",objE.hasOwnProperty("name1"))


// de-structure of an object: It is another way to access the values of a key. 
let {name1,age1} = objE // now name1 and age1 will work like a variable and we dont have to use objE.name1 or objE.age1
console.log("name1:",name1,", age1:",age1)
let {name1:user1,age1:user1Age} = objE // we can also give custom name to the key and this custom name of key will work as a variable
console.log("user1:",user1,", user1Age:",user1Age)
