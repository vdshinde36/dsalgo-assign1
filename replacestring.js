/**
 * Replace Splaces With String %20 
 * 
 * Time Complexity : O(n)
 * Space Complexity :O(n + countofspaces * 2) //beacuse  %20 is 3 char string 
*/



function replace (str) {
    if( ! str instanceof String) {
        throw new Error('Must Be string')
    }

    if(str === undefined || str === null) {
        throw  new Error(`String is ${str}`)
    }
    if (str.length === 0) {
        throw new Error('String is empty');
    }

    let newstr = '';  // initialied empty string otherwise type coersion producess wierd result
    for (let i =0; i<str.length; i++){
        if(str.charAt(i) === ' ') {
            newstr+='%20';
        }else{
            newstr+=str.charAt(i);
        }
    }

    return newstr;
}



//console.log(replace(' Shani dev'));
//console.log(replace('Hanuman'));

console.log(replace(''));