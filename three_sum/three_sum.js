/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// ------------   Time excessive result with O(n^3) time complexity --------------- // 
 var twoSum = function(numbers, target) {
    var pairs = [];
    for(let j = 0; j < numbers.length - 1; j++){
        for(let k = numbers.length -1; k > j; k--){
            if(numbers[j] + numbers[k] == target){
               pairs.push([numbers[j], numbers[k]]);
            }
        }
    }
    return (pairs == null)?null:pairs;
};

//swap function
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

//partition function for quicksort
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

//Quick sort function
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

var threeSum = function(nums) {    
//     const hashMap = new Map();
//     hashMap.set( index, sum);
    
    let arrs = [];
    //sort the nums array to make it more optmized for later
    var sortedNums = quickSort(nums, 0, nums.length - 1);
    
    //Look for triplets
    
    let i;

    for(let i = 0;  i < sortedNums.length -2; i++){
        const jk = twoSum(sortedNums.slice(i+1, sortedNums.length), 0-sortedNums[i] );
        if(jk != null){
            jk.map((subarr) =>{
                arrs.push([sortedNums[i], subarr[0], subarr[1]]);
            });
        }
    }
    // let solutions = []
    // let included = false;
    
    // for(let i = 0; i < arrs.length; i++){
    //     for(let j = 0; j < solutions.length; j++){
    //         //Check every array in the solution array to check to see if its included
    //         if(JSON.stringify(arrs[i]) == JSON.stringify(solutions[j])){
    //             //if it's included even once, don't add it to the solutions array
    //             included = true;
    //         }
    //     }
    //     if(!included){ 
    //         //it' not in the solutions array, add it and reset the 'included' variable
    //         solutions.push(arrs[i]);
    //     }
    //     included = false;
    // } 
    return arrs;
};




//----------- HashMap version ---------------//