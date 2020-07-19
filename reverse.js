/**
 * Reverse Given Array of Size n
 * Time Complexity : O(n/2)
 * Space Complexity : Input Size + auxillary Space : O(n) + O(1)
 * 
 * 
 * @param {Array} param0 
 */


 function reverse ([...arr]) {
     if(arr === undefined || arr === null) {
         throw new Error(`Array Is ${arr}`);
     }

     if(arr.length === 0) {
         return arr;
     }

     for (let i=0,j=arr.length-1;i<j;i++,j--) {
         let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
     }

     return arr;
 }

