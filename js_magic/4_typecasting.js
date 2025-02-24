let variable = 3

console.log(variable,typeof variable); //typeof variableName  OR typeof(variableName) is used to check datatype

variable = "Hello" // In JS, we can assign any value of any datatype to a variable because we dont declare datatype of variable
console.log(variable,typeof variable);

// Number -> integer, float
// Number(variable), BigInt(variable)
let numVar = 3
let numVarZero = 0
let numInString = "4"
let numInStringWithChars = "4abd"
let numAsBoolean = true
let numAsFloat = 3.6
let numAsFloatInString = "3.6"
let undefinedNumber
let blankString = ""
let nullValue = null

console.log("Number(numVar):",Number(numVar),"type:",typeof Number(numVar)) // 3 => 3 number
console.log("Number(numInString):",Number(numInString),"type:",typeof Number(numInString)) // "4" => 4 number
console.log("Number(numInStringWithChars):",Number(numInStringWithChars),"type:",typeof Number(numInStringWithChars)) // "4abd" =>  NaN number
console.log("Number(numAsBoolean):",Number(numAsBoolean),"type:",typeof Number(numAsBoolean)) // true => 1 number
console.log("Number(numAsFloat):",Number(numAsFloat),"type:",typeof Number(numAsFloat)) // 3.6 => 3.6 number
console.log("Number(numAsFloatInString):",Number(numAsFloatInString),"type:",typeof Number(numAsFloatInString)) // "3.6" => 3.6 number
console.log("Number(undefinedNumber):",Number(undefinedNumber),"type:",typeof Number(undefinedNumber)) // undefined => NaN number
console.log("Number(nullValue):",Number(nullValue),"type:",typeof Number(nullValue)) // null => 0 number
console.log("Number(blankString):",Number(blankString),"type:",typeof Number(blankString)) // "" => 0 number -> Here blank string is treated as 0 value
// NOTE: Number(variable) will convert the variable to `number` type but we must check what value is assigned to variable after type casting as
// in JS is not tightly typeed script

// String
console.log("String(numVar):",String(numVar),"type:",typeof String(numVar)) // 3 => "3" string
console.log("String(numVarZero):",String(numVarZero),"type:",typeof String(numVarZero)) // 0 => "0" string
console.log("String(numInString):",String(numInString),"type:",typeof String(numInString)) // "4" => "4" string
console.log("String(numInStringWithChars):",String(numInStringWithChars),"type:",typeof String(numInStringWithChars)) // "4abd" => "4abd" string
console.log("String(numAsBoolean):",String(numAsBoolean),"type:",typeof String(numAsBoolean)) // true => "true" string
console.log("String(numAsFloat):",String(numAsFloat),"type:",typeof String(numAsFloat)) // "3.6" => "3.6" string
console.log("String(undefinedNumber):",String(undefinedNumber),"type:",typeof String(undefinedNumber)) // undefined => undefined string
console.log("String(nullValue):",String(nullValue),"type:",typeof String(nullValue)) // null => "null" number
console.log("String(blankString):",String(blankString),"type:",typeof String(blankString)) // "" => "" string

console.log()

// Boolean
console.log("Boolean(numVar):",Boolean(numVar),"type:",typeof Boolean(numVar)) // 3 => true boolean
console.log("Boolean(numVarZero):",Boolean(numVarZero),"type:",typeof Boolean(numVarZero)) // 0 => false boolean
console.log("Boolean(numInStringWithChars):",Boolean(numInStringWithChars),"type:",typeof Boolean(numInStringWithChars)) // "4abd" => true boolean
console.log("Boolean(numAsBoolean):",Boolean(numAsBoolean),"type:",typeof Boolean(numAsBoolean)) // true => true boolean
console.log("Boolean(undefinedNumber):",Boolean(undefinedNumber),"type:",typeof Boolean(undefinedNumber)) // undefined => false boolean
console.log("Boolean(nullValue):",Boolean(nullValue),"type:",typeof Boolean(nullValue)) // undefined => false boolean
console.log("Boolean(blankString):",Boolean(blankString),"type:",typeof Boolean(blankString)) // "" => false boolean