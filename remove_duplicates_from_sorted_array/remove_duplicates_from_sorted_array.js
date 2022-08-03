/* 
 * --------------------------------------------------------------
 * PROBLEM #26
 * --------------------------------------------------------------
 *  
 * @param {number[]} nums
 * @return {number}
 * 
*/
/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 636 ms
  Memory Usage: 50.1 MB
-------------------------------------------------------------- 
*/

var removeDuplicates = function(nums) {
    
    let k = nums.length;
    let storage = {};
    let i = 0;
    let index = 0;
    while( index < k-i){
        // console.log('Before: storage->', storage, '\n Nums ->', nums, '\n i and index -> ', i, index, k);
        if(storage[nums[index]] != undefined ){
            console.log(`${nums[index]} found in storage`);
            nums.splice(index, 1);
            i++;
        }
        else{
            storage[nums[index]] = index;
            index++;
        }
        
        
        // console.log('After: storage->', storage, '\n Nums ->', nums, '\n i and index -> ', i, index);
    }
    // nums.fill(NaN, k-i);
    
    return k-i;
};

/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 170 ms
  Memory Usage: 45.5 MB
-------------------------------------------------------------- 
*/

var removeDuplicates = function(nums) {
    
    let k = nums.length;
    let storage = {};
    let i = 0;
    let index = 0;
    while( index < k-i){
        if(storage[nums[index]] != undefined ){
            nums.splice(index, 1);
            i++;
        }
        else{
            storage[nums[index]] = index;
            index++;
        }
    }
    
    return k-i;
};

