// may use functions, loops, conditionals, array methods, or string methods where necessary.



// Rules and Regulations
// Solve all 10 problems.
// Pick any 5 problems and explain your solutions in a 5-minute video with screen recording and voice-over.
// Use only plain JavaScript.
// Do your own logic to solve the problems - copying or AI-generated answers will lead to disqualification.
// We care more about your logic and explanation than perfect code. 
// Create a public GitHub repository and upload your code there.




// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const reversedString = ( value ) =>{
    return value.split("").reverse().join("");
}

console.log(`Reversed String: ${reversedString("hello")}`);


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

console.log(`Count of vowels is: ${countVowels("programming")}`);


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

console.log(`Is Palindrome: ${isPalindrome("madam")}`);
console.log(`Is Palindrome: ${isPalindrome("hello")}`);

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

console.log(`Largest Number: ${largeNumber([5, 1, 9, 3])}`);



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

console.log(`Array without duplicates: ${removeDuplicates([1, 2, 2, 3, 4, 4])}`);

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

const sumOfArray = (value) => {
    let sum = 0;
    for (let i =0; i < value.length; i++){
        sum = sum + value[i];
    }
    return sum;
}

console.log(`Sum of Array: ${sumOfArray([1, 2, 3, 4])}`);

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120


// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..


// What to SUBMIT

// A public GitHub repository link containing your code for all 10 problems.
// Share a single Google Drive link (anyone can view) to a video (max 5 minutes) where you explain your solutions for any 5 problems, including screen recording and voice-over
