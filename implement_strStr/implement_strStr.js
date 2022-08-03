/* 
 * --------------------------------------------------------------
 * PROBLEM #28
 * --------------------------------------------------------------
 *  
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
*/
/*
-------------------------------------------------------------- 
  Time Complexity: O(n) depending on the indexOf function's runtime
  Runtime: 122 ms
  Memory Usage: 41.8 MB
-------------------------------------------------------------- 
*/

var strStr = function(haystack, needle) {
    if(needle == ""){return 0;}
    
   return haystack.indexOf(needle)
};