// Some common Operations
let v1 = 3
let v2 = 4

// console.table([v1,v2,v1+v2,v1*v2,v1**v2,v1/v2,v1%v2])

let s1 = "string1"
let s2 = "string2"
let i1 = 3
let bool = true

console.log("Adding strings:",s1+" "+s2)
console.log("Adding int and bool:",i1+bool) // bool+int will convert to int and bool will become 0/1 for false/true
console.log("Adding string and int:",s1+" "+i1) // No error will be thrown and int will be casted to string
console.log("Adding string and bool:",s1+" "+bool) // No error will be thrown and int will be casted to string
console.log("Adding int, int and string:",i1+i1+s1) 
// No error will be thrown and int will be added first and as soon as we encounter a string, everything will be casted to string

console.log(1+1+(1*2)+"4") // 1+1+(1*2)+"4" => 2+2+"4" => 4+"4" => "44"

console.log("4"+1+1+(1*2)) // "4"+1+1+(1*2) => "411"+(2) => "4112"
console.log(true, +true, +"") // output will be true 1 0  // true+ will throw error

let a,b,c
a = 5
console.log("post increment:",a++,"pre increment:",++a);

console.log("2">1,"2"==2,"2"<1,"a">2) // true true false false 
// here >, <, >=, <= converts the string number to number and then compares BUT == operator does not convert to number

// In JS, == works differently as compare to >,<,>=,<= comparison operators
// >, <, >=, <= converts null to 0 as number
console.log(null>0,null==0,null<0,null>=0,null<=0,null<=1,null<1,null>1)
// null>0 => false 
// null==0 => false 
// null<0 => false 
// null>=0 => true 
// null<=0 => true 
// null<=1 => true 
// null<1 => true 
// null>1 => false


// >, <, >=, <= does not convert undefined to 0 and for all operators it will be false
console.log(undefined>0,undefined==0,undefined<0,undefined>=0,undefined<=0,undefined<=1,undefined<1,undefined>1)
// undefined>0 => false 
// undefined==0 => false 
// undefined<0 => false 
// undefined>=0 => false 
// undefined<=0 => false 
// undefined<=1 => false 
// undefined<1 => false 
// undefined>1 => false


// === is used to strictly check value and its datatype
console.log("2"==2,"2"===2) 
// "2"==2 => true => strict check did not happened and string got converted to number
// "2"===2 => false as datatype will not match
