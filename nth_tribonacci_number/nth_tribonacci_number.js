/* 
 * --------------------------------------------------------------
 * PROBLEM #1137
 * --------------------------------------------------------------
 *  
 * @param {number} n
 * @return {number}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 73 ms
  Memory Usage: 42 MB
-------------------------------------------------------------- 
*/

var tribonacci = function(n) {
    let storage = {}
    if(n === 0 ){return 0}
    else if(n === 1){return 1}
    else if(n === 2){ return 1}
    else{
        storage[0] = 0;
        storage[1] = 1;
        storage[2] = 1;
        return calc(storage, n-3) + calc(storage, n-2) + calc(storage, n-1);
    }
};

var calc = function(storage, n){
    if(storage[n] != undefined){
        return storage[n]
    }
    else{
        storage[n] = calc(storage, n-3) + calc(storage, n-2) + calc(storage, n-1);
        return storage[n]
    }
};