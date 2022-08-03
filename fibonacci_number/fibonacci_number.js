/* 
 * --------------------------------------------------------------
 * PROBLEM #509
 * --------------------------------------------------------------
 *  
 * @param {number} n
 * @return {number}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(2^n)
  Runtime: 87 ms | 143 ms
  Memory Usage: 41.9 MB | 41.5 MB
-------------------------------------------------------------- 
*/

var fib = function(n) {
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1
    }
    else{
     return fib(n-2) + fib(n-1);
    }
    
};

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 64 ms
  Memory Usage: 42 MB
-------------------------------------------------------------- 
*/

var fib = function(n) {
    let storage = {}
    if(n ==0 ){return 0}
    else if(n == 1){return 1}
    else{
        storage[0] = 0;
        storage[1] = 1;
        return calc(storage, n-2) + calc(storage, n-1);
    }
};

var calc = function(storage, n){
    if(storage[n] != undefined){
        return storage[n]
    }
    else{
        storage[n] = calc(storage, n-2) + calc(storage, n-1);
        return storage[n]
    }
}

