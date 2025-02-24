// Number type can be declared in below ways
let num1 = 22 // type of num1 will be number
let num2 = Number(22) // type of num2 will be number
let num3 = Number("22") // type casting and type of num3 will be number
let num4 = new Number("32") // here type of variable will be object because new keyword creates a object 

console.log(typeof num1, typeof num2, typeof num3, typeof num4); // number number number object

let decimal_num = 2222.9876

console.log(decimal_num.toFixed(3),decimal_num.toFixed(4),decimal_num.toFixed(5),decimal_num.toFixed(10), typeof decimal_num.toFixed(10))
// output: 2222.988 2222.9876 2222.98760 2222.9876000000 string
console.log(decimal_num.toPrecision(3),decimal_num.toPrecision(4),decimal_num.toPrecision(5),decimal_num.toPrecision(10), typeof decimal_num.toPrecision(10))
// output: 2.22e+3 2223 2223.0 2222.987600 string

/*
Difference between toFixed and toPrecision is that:
>toFixed works after the decimal point only and does not perform any roundoff but selects digits after decimal or adds 0 for padding
> toPrecision works from the point where 1st digit of number comes. If there are digits before decimal but after precision value then 
it will show value in exponantial but if there are digits after decimal point then it will roundoff or add 0 as padding depending on the 
digits present after deciaml and value passed in precision function.

>> both toFixed and toPrecision returns string as output value
*/

let large_number = 100000000
console.log(large_number.toString(),large_number.toLocaleString(),large_number.toLocaleString('en-IN')) // toLocaleString adds , to help in number
// output:   100000000                  100,000,000                      10,00,00,000

output = `
Max value of Number in JS: ${Number.MAX_VALUE}
Min value of Number in JS: ${Number.MIN_VALUE}
MAX_SAFE_INTEGER value of Number in JS: ${Number.MAX_SAFE_INTEGER}
MIN_SAFE_INTEGER value of Number in JS: ${Number.MIN_SAFE_INTEGER}
POSITIVE_INFINITY value of Number in JS: ${Number.POSITIVE_INFINITY}
NEGATIVE_INFINITY value of Number in JS: ${Number.NEGATIVE_INFINITY}
`
// In JS, Number can vary from -9007199254740991 to 9007199254740991. After this range either use BigInt else we will get garbage value
console.log(output)
console.log(9007199254740991, 90071992547409992, 900719925474098888891, 900719925474098888891n) 
// 9007199254740991 90071992547409980 900719925474099000000 900719925474098888891n // here after using n number becomes bigint and give correct value


// ++++++++++++++++++++++++++++++++++++++++

console.log("++++++++++++++++++++++++++++++++++++++++")
// In JS, we get Math library bydefault to perform math related operations
console.log(Math.LN2);
console.log(Math.PI);
console.log(Math.abs(-4),Math.abs(4)); // to get absolute value (+ve number) of any number

let number = 44.567
output = `
Floor of ${number}: ${Math.floor(number)}
Ceil of ${number}: ${Math.ceil(number)}
Round of ${number}: ${Math.round(number)}
Round of ${44.3}: ${Math.round(44.3)}
Max element in ${1,2,56,2,4,5}: ${Math.max(1,2,56,2,4,5)}
Min element in ${1,2,56,2,4,5}: ${Math.min(1,2,56,2,4,5)}
`
// Math.max and Math.min does not accept array as input and only accepts numbers in above shown format
console.log(output)

// generate random number between a given range
const MIN = 10
const MAX = 20
output = Math.floor( ( Math.random() * ( MAX-MIN +1 ) ) ) + MIN // standard formula to generate number between a range
console.log(`Random value between ${MIN} and ${MAX} is: ${output}`) // 10 and 20 included



