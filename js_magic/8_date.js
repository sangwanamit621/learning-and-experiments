// In JS, we have Date type for working with date. In future, temporal library will be released to work with dates which will work like Math library

let currentDateTime = new Date()
output = `
Current Date: ${currentDateTime}
Current Date (ISO): ${currentDateTime.toISOString()}
Current Date (toString): ${currentDateTime.toString()}
Current Date (toDateString): ${currentDateTime.toDateString()}
Current Date (toTimeString): ${currentDateTime.toTimeString()}
Current Date (toLocaleString): ${currentDateTime.toLocaleString()}
Current Date (toLocaleDateString): ${currentDateTime.toLocaleDateString()}
Current Date (toLocaleTimeString): ${currentDateTime.toLocaleTimeString()}
Current Date (toJSON): ${currentDateTime.toJSON()}
Current Date (toUTCString): ${currentDateTime.toUTCString()}
Current Date (to epoch time): ${currentDateTime.getTime()}
Current Date (Day): ${currentDateTime.getDay()}
Current Date (Month): ${currentDateTime.getMonth()+1} // here month start from 0-Jan and 11-dec so for feb it will be 1 so we will add +1
Current Date (In Custom Format): ${currentDateTime.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    month:"long",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    hour12:false
})}
`
console.log(output);

let customDate = new Date(2024,0,13,5,8,22) // in this format month starts from 0-Jan to 11- Dec
output = `Output for various custom date formats:
new Date(2024,0,13,5,8,22): ${new Date(2024,0,13,5,8,22)}
new Date(2024,0,23): ${new Date(2024,0,23)}
new Date(2024): ${new Date(2024)}
new Date("2024-12-22"): ${new Date("2024-12-22")}
new Date("2024-12-22T22:18"): ${new Date("2024-12-22T22:18")}
`
console.log(output);


// timestamps/epoch time
let epochTime = Date.now() // returns epoch time
console.log(epochTime)

console.log(`${epochTime}-${customDate.getTime()} = ${epochTime-customDate.getTime()} milliseconds`)