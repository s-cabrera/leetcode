/* 
 * --------------------------------------------------------------
 * PROBLEM #27
 * --------------------------------------------------------------
 *  
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
*/
/*
-------------------------------------------------------------- 
  Time Complexity: O(n^2) or O(n) depending on the splice function's runtime
  Runtime: 72 ms
  Memory Usage: 42.1 MB
-------------------------------------------------------------- 
*/

var removeElement = function(nums, val) {
    let k = nums.length;
    let i = 0;
    while(i < k){
        if(nums[i] == val){
            nums.splice(i, 1);
            k--;
        }
        else{i++;}
    }
    
    return k
};