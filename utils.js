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

console.log(getReverse(1214));
console.log(getReverse(121234));
console.log(getReverse(1));