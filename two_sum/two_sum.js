/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//* O(n^2) time complexity*//
var twoSum = function(nums, target) {
      for(let i = 0; i < nums.length -1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
      }
};


//* Time efficient hashmap way *//
 var twoSum = function(nums, target) {
    let storage = {};
      for(let i = 0; i < nums.length; i++){
          if(storage[nums[i]] !== undefined)return [storage[nums[i]], i];
          storage[target-nums[i]] = i;
      }
};

