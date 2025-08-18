// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reversedString = ( value ) =>{
    return value.split("").reverse().join("");
}

// console.log(`Reversed String: ${reversedString("hello")}`);


//........................................................................................
// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const countVowels = (value) => {
    const vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (vowels.includes(value[i].toLowerCase())) {
            count++;
       
        }
    }
    return count ;
}

// console.log(`Count of vowels is: ${countVowels("programming")}`);



//..........................................................................................
// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const isPalindrome = ( value ) => {
    const reversedWord = value.split("").reverse().join("");
    if (value === reversedWord) {
        return true;
    } else {
        return false;
    }
}

// console.log(`Is Palindrome: ${isPalindrome("madam")}`);
// console.log(`Is Palindrome: ${isPalindrome("hello")}`);


//...........................................................................................
// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.


const largeNumber = (value) =>{
    let maxValue = 0;
    for( let i = 0; i < value.length; i++){
        if (value[i] > maxValue ){
            maxValue = value[i];
        }
    }
    return maxValue;
}

// console.log(`Largest Number: ${largeNumber([5, 1, 9, 3])}`);




//...........................................................................................
// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.


const removeDuplicates = (value) => {
    let uniqueValues = [];
    for ( let i = 0; i < value.length; i++ ){
        
        if(!uniqueValues.includes(value[i])){
            uniqueValues.push(value[i]);
        }
    }
    return uniqueValues;
}

// console.log(`Array without duplicates: ${removeDuplicates([1, 2, 2, 3, 4, 4])}`);




//...........................................................................................
// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.


const sumOfArray = (value) => {
    let sum = 0;
    for (let i =0; i < value.length; i++){
        sum = sum + value[i];
    }
    return sum;
}

// console.log(`Sum of Array: ${sumOfArray([1, 2, 3, 4])}`);




//...........................................................................................
// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

const evenNumber = (value) => {
    let even = [];
    for (let i =0; i < value.length; i++){
        if(value[i] % 2 === 0){
            even.push(value[i]);
        }
    }
    return even;
}

// console.log(`Even Numbers: ${evenNumber([1, 2, 3, 4, 5, 6])}`);



//...........................................................................................
// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.


const capitalFirstLetter = ( value ) => {
    let words = value.split(" ");
    for ( let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
// console.log(`Capitalized First Letter: ${capitalFirstLetter("hello world")}`);




//...........................................................................................
// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

const factorialNumber = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

// console.log(`Factorial : ${factorialNumber(5)}`);





//...........................................................................................
// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself


const pingPongChallenge = () => {
    let result = [];
    for(let i = 1; i <= 20; i++) {
        if( i % 3 === 0 && i % 5 === 0) {
            result.push("PingPong");
        } else if (i % 3 === 0) {
            result.push("Ping");
        } else if (i % 5 === 0) {
            result.push("Pong");
        } else {
            result.push(i);
        }
    }
    return result;
}

// console.log(`PingPong Challenge: ${pingPongChallenge()}`);


