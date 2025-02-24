let name = "Amit"
let age = 26
let learningJavaScript = true

concat_string = name+" "+age+" "+learningJavaScript
console.log(concat_string);

// it is similar to f-string in Python
string_interpolation = `My name is ${name.toUpperCase()} and I am ${age} years old. Am I learning Javascript: ${learningJavaScript}`
console.log(string_interpolation)

// another way to declare string 
let user = new String("Amit Sangwan") // its type will be object whereas normally declared string will have type string

// Important methods in string
console.log(name.charAt(2))
console.log(name[2])
console.log(name.indexOf('m'))
console.log(name.toLocaleLowerCase("en")) // considers local set language rules before converting to lower case
console.log(name.toLowerCase()) // does not consider local set language and converts to lower using unicode encoding
console.log(`User: ${user} and length of user name: ${user.length}`)
console.log(`User: ${user} and length of user name: ${user.length}`.substring(2,5))
// -ve value not allowed in substring and will be ignored and start with 0th index
console.log(`User: ${user} and length of user name: ${user.length}`.substring(-3,5)) 
console.log(`User: ${user} and length of user name: ${user.length}`.slice(2,5))
console.log(`User: ${user} and length of user name: ${user.length}`.slice(-13,-3)) // -ve values are allowed
console.log(`User: ${user} and length of user name: ${user.length}`.slice(-3,-13)) // -ve values are allowed. output = '' string
console.log(`   User: ${user} and length of user name: ${user.length}  `)
console.log(`   User: ${user} and length of user name: ${user.length}  `.trim()) // removes only \n and whitespaces from string
console.log(`User: ${user} and length of user name: ${user.length}`.replace('t','1').replaceAll('e',"EE"))
console.log(`User: ${user} and length of user name: ${user.length}`.includes("length"))
console.log(`User: ${user} and length of user name: ${user.length}`.split("an"))
console.log(`User: ${user} and length of user name: ${user.length}`.split("an",2)) // returns only first 2 elements of the splitted array
console.log(`User: ${user} and length of user name: ${user.length}`.endsWith("an"))



