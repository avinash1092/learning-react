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
