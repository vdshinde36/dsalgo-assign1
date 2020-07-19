/**
 * Sum of all palindrome numbers present in an Array
 */

/**
 * sum of all palindrom number
 * 
 * Time Complexity : O(n)
 * Space Complxity : Sumation of StackFrame size + aux space
 */


 /**
 * get reverse Number
 * @param {Number} number 
 */
function getReverse (number) {
    let reverse = 0;
    if(typeof number === 'number'){
        while( number !== 0) {
           let remainder = number % 10;
           reverse = reverse * 10 + remainder;
           number = Math.trunc(number / 10);
        }
        return reverse;
    }else {
        throw new Error(`${number} Should Be Number`);
    }
}

/**
 * 
 * @param {Number} number 
 */
function isPalindrome (number) {
    return number === getReverse(number);
}

/**
 * get Summation of All palindrome number
 * @param {Array} arr 
 */
function getPalindromeSum (arr) {
    let sum = 0

    if (arr === undefined || arr === null) {
        throw new Error(`Invalid Input ${arr}`);
    }

    for (let element of arr) {
        if(isPalindrome(element)){
            sum+=element;
        }
    }
    return sum;
}



console.log(getPalindromeSum([1]));