let arr = [1,2,3] // type of arr will be object
let arr1 = new Array(4,5,6) // type of new Array() will be object

console.log(typeof arr, typeof arr1) // object object // because array is non-primitve type
console.log("Length of array: ",arr.length) // 3
// methods of array

// Methods to add and remove element at last position in array
console.log("Array before insertion: ",arr) // [1,2,3]
console.log("Output of push operation: ",arr.push(8) )
console.log("Array after push: ",arr) // [1,2,3,8]
console.log("Output of pop operation: ",arr.pop())
console.log("Array after pop operation",arr) // [1,2,3]

// Methods to add and remove element on/from 0th index
console.log("Array before unshift operation: ",arr) // [1,2,3]
console.log("Output of unshift operation: ",arr.unshift(8))
console.log("Array after unshift operation: ",arr) // [8,1,2,3]
console.log("Output of shift operation:",arr.shift())
console.log("Array after shift operation",arr) // [1,2,3]

// push and unshift operations returns length of array 
// pop and shift returns the number removed from operation

//Check existance of an element and its index in the array
console.log(`Does array contains 9: ${arr.includes(9)}`) //false
console.log(`Index of element 9 in arr: ${arr.indexOf(9)}`) // -1
console.log(`Does array contains 9: ${arr.includes(2)}`) //true
console.log(`Index of element 9 in arr: ${arr.indexOf(2)}`) // 1

// join is used to concat elements of the array as string. Similar to join operation in python
let strFromArr = arr.join('##')
console.log("Output of join operation: ",strFromArr," and type of strFromArr: ",typeof strFromArr); // 1##2##3 string

let plusArray = arr+" "+arr1 // treat them as 2 strings and add them
console.log("Output of + operation: ",plusArray," and type of plusArray: ",typeof plusArray); // 1,2,3 4,5,6 string

// slice vs splice
arr = [1,2,3,4,5,6,7,8,9]
console.log("Original arr:",arr)

let sliceArr = arr.slice(1,3)
console.log("Original arr after slice:",arr) // [1,2,3,4,5,6,7,8,9]
console.log("sliceArr output:",sliceArr) // [2,3]

let spliceArr = arr.splice(4,3) // remove 3 elements starting from index 4
console.log("Original arr after splice:",arr) // [1,5,6,7,8,9]
console.log("spliceArr output:",spliceArr) // [2,3,4]

// slice does not modify the original array and excludes end index element from result
// splice modifies the original array and removes n elements starting from startIndex and returns them as output of splice operation

// concat operation vs spread operation
// both operations combines arrays to return a new array containing elements from both arrays
// but concat accepts only 1 array whereas in spread we can combine as many arrays as we want

let concatArray = arr.concat(spliceArr)
let spreadArray = [...arr,...spliceArr,...arr1]

console.log("Output of concat operation:",concatArray); // [1, 2, 3, 4, 8,9, 5, 6, 7]
console.log("Output of spread operation:",spreadArray); // [1, 2, 3, 4, 8,9, 5, 6, 7, 4, 5, 6]


// flat is used on nested arrays to create a single plain array
let nestedArr = [1,2,[3,4],[5,6,[7,8,[9,10]]]]
let flatArr = nestedArr.flat(Infinity) // here instead of infinity we can also provide depth till which array will be flat
console.log("nested array:",nestedArr) // [ 1, 2, [ 3, 4 ], [ 5, 6, [ 7, 8, [Array] ] ] ]
console.log("flat array till 2nd depth:",nestedArr.flat(2)) // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]
console.log("flat array till infinite depth:",flatArr) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// Checking is a variable is array or not
console.log("is 23 an array:",Array.isArray(23)) // false
console.log("is [23] an array:",Array.isArray([23])) // true

// Converting variables to array
let arrFromVars = Array.of(arr,23,arr1)
console.log("Array using Array.of method:",arrFromVars) // [ [ 1, 2, 3, 4, 8, 9 ], 23, [ 4, 5, 6 ] ]

// converting string into array
console.log("String to Array using Array.from method:",Array.from("Amit Sangwan")) // [ 'A', 'm', 'i', 't', ' ', 'S', 'a', 'n', 'g', 'w', 'a', 'n' ]

// converting object into array
let obj = {name:"Amit",26:"Age"}
console.log("Object to Array using Array.from method:",Array.from(Object.entries(obj),([key,value])=>[key,value]))
console.log("Object to Array using spread operation:",[...Object.entries(obj)])