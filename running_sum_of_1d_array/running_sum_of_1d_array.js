/* 
 * --------------------------------------------------------------
 * PROBLEM #1480
 * --------------------------------------------------------------
 *  
 * @param {number[]} nums
 * @return {number[]}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 91 ms | 86 ms 
  Memory Usage: 42.6 MB | 42.6 MB
-------------------------------------------------------------- 
*/

var runningSum = function(nums) {
    let result = new Array(nums.length);
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        result[i] = sum;
    }
    return result
};

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime:  102 ms
  Memory Usage: 47.5 MB
-------------------------------------------------------------- 
*/

var add = function(nums, sum, result, i){
    if(nums.length > 0){
        sum += nums[0]
        result[i] = sum;
        add(nums.slice(1), sum, result, i+1)
    }
    return
};
var runningSum = function(nums) {
    let result = new Array(nums.length);
    let sum = 0;
    // for(let i = 0; i < nums.length; i++){
    //     sum += nums[i];
    //     result[i] = sum;
    // }
    add(nums, sum, result, 0);
    return result
};

