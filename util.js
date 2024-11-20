const arr = [
    {firstName:"Avinash",lastName:"Bathina",age:30},
    {firstName:"Vedansh",lastName:"Bathina",age:3},
    {firstName:"Harish",lastName:"Bathina",age:27},
    ]

const output = arr.reduce((acc,curr) => {
    if(curr.age<30)
    acc.push(curr.firstName);
    return acc;
},[])


const arr = [5,3,1,2,6];

function sorting(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(sorting(arr));


///////////////////////////////////////////////////////////

const str = "avinash";
const arr = [5,3,1,2,6];

console.log(str.split('').reverse().join(''));
// console.log(arr.reverse());

function reversedStr(str){
    let reversed = '';
    for(let i = str.length -1; i>=0;i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reversedStr(str));

///////////////////////////////////////////////////////////

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { // Check divisibility up to the square root of the number
        if (num % i === 0) {
            return false; // If divisible by any number other than 1 and itself, it's not prime
        }
    }
    return true; // It's prime if no divisors found
}

// Function to check primes in a range [min, max]
function checkPrimesInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            console.log(i + " is prime");
        }
    }
}

// Call the function for the range [10, 20]
checkPrimesInRange(10, 20);


///////////////////////////////////////////////////////////
//Counter with closures

function createCounter() {
    let count = 0; // This is the private variable enclosed in the closure

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Usage
const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());  // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1

///////////////////////////////////////////////////////////
// How to Check if Two Strings Are Anagrams in JavaScript:

function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    const formatStr = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

    return formatStr(str1) === formatStr(str2);
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // Output: true
console.log(areAnagrams('hello', 'world'));   // Output: false
console.log(areAnagrams('rail safety', 'fairy tales')); // Output: true
console.log(areAnagrams('Hi there', 'Bye there')); // Output: false
