/* 
 * --------------------------------------------------------------
 * PROBLEM #9
 * --------------------------------------------------------------
 * 
 * @param {number} x
 * @return {boolean}  
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 224 ms
  Memory Usage: 51.3 MB
-------------------------------------------------------------- 
 */
 var isPalindrome = function(x) {
    if(x < 0){return false} //negative integers fail automatically
    let nums = [];
    let i = 0;
    while(x > 0){
        nums[i] = x % 10;
        i++;
        x = Math.floor(x/10);
    }
    for(i = 0; i < Math.ceil(nums.length/2); i++){
        if(nums[i] != nums[nums.length -1 -i]){return false}
    }
    return true
};