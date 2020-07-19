/**
 * if two string are anagram
 */

 
 function isAnagram(first , second) {
     if((first === undefined || first === null) && (second === undefined || second === null)) {
       throw new Error ('Something SomeThing error');
     }

     [first , second] = doCleanUp(first , second) ;
     
     if(first.length !== second.length) {
         return false;
     }

     first = sort(first);
     second = sort(second);

     return first === second; 
 }

 /**
  * Function for cleaning up
  *  remove all spaces 
  *  covert to lowecase
  */
 function doCleanUp (first ,second) {
     return [first.replace(/\s/g,'').toLowerCase() , second.replace(/\s/g,'').toLowerCase()]
 }



 /**
  * Sorting string
  */

  function sort(str){
    return str.split('').sort().join('');

  }


  console.log(isAnagram('isi' , 'sii'));
  console.log(isAnagram('Dormitory' , 'Dirty room'));
  console.log(isAnagram('vaibav' , 'vaibavs'));