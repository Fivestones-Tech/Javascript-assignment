// Example of data types
// Primitive data types 
// String
// Number
// Boolen
// null
// undefined
// Symbol

// unprimitive data types 
// Object 
// Array 

// primitize data type
// compares the values
// let num1 = 6
// let num2 = 6
// console.log(num1==num2)


// non-Primitize data type
// let number = [1, 2, 3]
// let number2 = number

// console.log(number==number2)

let names = ['Zara', 'Harmony', 'Ziva', 'Nathan']
let referenceName = names
console.log(names == referenceName)

let userDatails = {
    name: 'Matthew',
    isMarried: false,
    location: 'Nigeria',
    role: 'Instructor'
}

let referenceUserDetails = userDatails

console.log(referenceUserDetails==userDatails)


