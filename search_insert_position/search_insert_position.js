/* 
 * --------------------------------------------------------------
 * PROBLEM #35
 * --------------------------------------------------------------
 *  
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
*/
/*
-------------------------------------------------------------- 
  Time Complexity: O(log n)
  Runtime: 118 ms
  Memory Usage: 42.6 MB
-------------------------------------------------------------- 
*/

var searchInsert = function(nums, target) {
    // Variables
    let temp;
    let i = 0;
    let j = nums.length -1 ;

    //Check if the target is not within the range of the first and last values in the nums array
    
    if(target < nums[0]){// Check if target is less than first value in nums array
        return 0;
    }
    else if(target > nums[j]){// Check if target is more than last value in nums array
        return nums.length;
    }
    
    while(i < j){
        if(target == nums[i]){
            return i;
        }
        else if(target == nums[j]){
            return j;
        }
        else if(target < nums[i]){
            j = i;
            i = Math.ceil(i/2);
        }
        else if(target > nums[j]){
            temp = i;
            i = j;
            j = Math.ceil(j/2) + temp;
        }
        else if(target > nums[i] && target < nums[j]){
            i = Math.ceil((j-i)/2) + i;
        }
    }
    return j; 
};