//Array Usecases For Entire Exercise
let toons = ['Family Guy', 'South Park', 'Rick & Morty', 'Invincible'];
let numbers = [1, 3, 10, 33, 100, 333];
let smallNumbers = [0, 2, 4, 6, 8, 8];
let jocks = [
    { name: "Bron", sport: "Basketball", bestYear: 2007 },
    { name: "OBJ", sport: "Football", bestYear: 2015 },
    { name: "Tyson", sport: "Boxing", bestYear: 1986 },
]
let jocksFullNames = [
    { first: 'LeBron', last: 'James' },
    { first: 'Odell', last: 'Beckham Jr' },
    { first: 'Mike', last: 'Tyson' }
];
let peeps = [
    { name: 'Deidre', age: 26, city: 'Brooklyn' },
    { name: 'Tasharah', gender: 'Female' },
    { name: 'Malik', gender: 'Male' },
    { name: 'Zoe', age: 25, city: 'Trenton' }
];

//Some- hasOddNumber
function hasOddNumber(array) {
    // Uses the some method to check if at least one element is an odd number
    return array.some(function (numb) {
        return numb % 2 !== 0;
    });
}
console.log(hasOddNumber(numbers)); // Console: true
console.log(hasOddNumber(smallNumbers)); // Console: false

//Some- hasAZero
function hasAZero(number) {
    // Converts the number to a string and use the includes method to check for a zero
    return number.toString().includes('0');
}
console.log(hasAZero(123456789)); // Console: false
console.log(hasAZero(12345678910)); // Console: true

//Some- hasOnlyOddNumbers
function hasOnlyOddNumbers(array) {
    // Uses the every method to check if every element in the array is odd
    return array.every(function (number) {
        return number % 2 !== 0;
    });
}
console.log(hasOnlyOddNumbers(numbers)); // Console: false
console.log(hasOnlyOddNumbers(smallNumbers)); // Console: false

//Every- hasNoDuplicates
function hasNoDuplicates(array) {
    // Uses the every method to check if every element is unique in the array
    return array.every(function (value, index, arr) {
        return arr.indexOf(value) === index;
    });
}
console.log(hasNoDuplicates(numbers)); // Console: true
console.log(hasNoDuplicates(smallNumbers)); // Console: false

//Every- hasCertainKey
function hasCertainKey(arrayOfObjects, key) {
    // Use the every method to check if every object in the array contains the specified key
    return arrayOfObjects.every(function (obj) {
        return obj.hasOwnProperty(key) && obj[key] !== undefined;
    });
}
console.log(hasCertainKey(peeps, 'name')); // Console: true
console.log(hasCertainKey(peeps, 'age')); // Output: false

//Every- hasCertainValue
function hasCertainValue(arrayOfObjects, key, value) {
    // Use the every method to check if every object in the array has the specified value for the key
    return arrayOfObjects.every(function (obj) {
        return obj[key] === value;
    });
}
console.log(hasCertainValue(peeps, 'age', 25)); // Output: false
console.log(hasCertainValue(peeps, 'city', 'Trenton')); // Output: false
console.log(hasCertainValue(peeps, 'city', 'Brooklyn')); // Output: false


