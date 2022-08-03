/* 
 * --------------------------------------------------------------
 * PROBLEM #217
 * --------------------------------------------------------------
 *  
 * @param {number[]} nums
 * @return {boolean}
 * 
*/
/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 123 ms | 139 ms | 121 ms | 136 ms
  Memory Usage: 53.8 MB | 53.4 MB | 53.8 MB | 54.2 MB
-------------------------------------------------------------- 
*/

var containsDuplicate = function(nums) {
    let storage = {};
    
    for(const [index, element] of nums.entries()){
        if(storage[element] != undefined){
            return true
        }
        else{
            storage[element] = index;
        }
    }
    return false
};