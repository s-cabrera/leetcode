/* 
 * --------------------------------------------------------------
 * PROBLEM #70
 * --------------------------------------------------------------
 *  
 * @param {number} n
 * @return {number}
 * 
*/
/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 86 ms
  Memory Usage: 41.6 MB
-------------------------------------------------------------- 
*/

var climbStairs = function(n) {
    let memo = [1, 1, 2]
    for(let i = 3; i <= n; i++ ){
     memo[i] = memo[i-1] + memo[i-2]   
    }
    return memo[n];
}

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 73 ms
  Memory Usage: 42 MB
-------------------------------------------------------------- 
*/

var climbStairs = function(n) {
    const memo = [1, 1, 2]
    for(let i = 3; i <= n; i++ ){
     memo[i] = memo[i-1] + memo[i-2]   
    }
    return memo[n];
}

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 67 ms
  Memory Usage: 41.8 MB
-------------------------------------------------------------- 
*/

var climbStairs = function(n) {
    let storage = [];
    storage[0] = 1;
    storage[1] = 1;
    for(let i = 2; i <= n; i++){
        storage[i] = storage[i-1] + storage[i-2];
    }
    return storage[n]
}

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 122 ms | 101 ms
  Memory Usage: 42.1 MB | 42.3 MB
-------------------------------------------------------------- 
*/

var climbStairs = function(n) {
    let storage = {};
    storage[0] = 1;
    storage[1] = 1;
    for(let i = 2; i <= n; i++){
        storage[i] = storage[i-1] + storage[i-2];
    }
    return storage[n]
}

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 85 ms
  Memory Usage: 41.8 MB
-------------------------------------------------------------- 
*/

var climbStairs = function(n) {
    let storage = new Array(n+1);
    storage[0] = 1;
    storage[1] = 1;
    for(let i = 2; i <= n; i++){
        storage[i] = storage[i-1] + storage[i-2];
    }
    return storage[n]
}

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 100 ms
  Memory Usage: 41.9 MB
-------------------------------------------------------------- 
*/

var climbStairs = function(n) {
    let storage = new Array(n);
    storage[0] = 1;
    storage[1] = 1;
    for(let i = 2; i <= n; i++){
        storage[i] = storage[i-1] + storage[i-2];
    }
    return storage[n]
}