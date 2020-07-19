/**
 * Count Distinct Elements in the array.
 * 
 * 
 *Time Complexity : O(n^2)
  Space Complexity : No auxillary Space required.
*/


function countDistictElement (arr) {
    if(arr === undefined || arr === null) {
        throw new Error(`Array Is ${arr}`);
    }

    let count = 0;
    for(let i=0; i<arr.length; i++){
        let isFound = false ;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j] && i !== j){
                isFound = true;
                break;
            }
        }

        if(!isFound){ //  if element found then dont increment counter
            count++;
        }
        
    }

    return count;
}

/**
 * Count Distict Element in Array
 * 
 * Time Complexity : O(n);
 * Space Complexity :O(n) - worst case auxillary space required
 */



 function getDistinctCount (arr) {

    if(arr === undefined || arr === null) {
        throw new Error(`Array Is ${arr}`);
    }

    let distinc = new Set();
    for(let i=0; i<arr.length; i++) {
        if(!distinc.has(arr[i])){
            distinc.add(arr[i]);
        }
    }

    return distinc.size;
}

/*
console.log(countDistictElement([1,2,3,4,5,6]));
console.log(countDistictElement([1,2,3,2,3]));
console.log(countDistictElement([1,1,1,1,1]));
*/

console.log(getDistinctCount([1,2,3,4,5,6]));
console.log(getDistinctCount([1,2,3,2,3]));
console.log(getDistinctCount([1,1,1,1,1]));