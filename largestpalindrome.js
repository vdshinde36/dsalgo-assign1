/**
 * Largest Palindrome Number is Array
 * 
 * Time Complexity : O (n)
 * 
 * Space Complexity : 
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



function getLargestPalindrome (arr) {
    let largestPalindrome = -1; // assuming all integer are positive

    if(arr === undefined || arr === null){
        throw new Error(`Array Is ${arr}`);
    }

    for (let element of arr) {
        if(isPalindrome(element)){
            if(element > largestPalindrome) {
                largestPalindrome = element;
            }
        }
    }
    return largestPalindrome;
}



console.log(getLargestPalindrome([1,12,121,451,4]));