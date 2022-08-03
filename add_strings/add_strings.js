/* 
 * --------------------------------------------------------------
 * PROBLEM #415
 * --------------------------------------------------------------
 *  
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 765 ms
  Memory Usage: 51.8 MB
-------------------------------------------------------------- 
*/

var addStrings = function(num1, num2) {
    let arr1 = num1.split('');
    let arr2 = num2.split('');
    let arr3 = [];
    let x = arr1.length - 1;
    let y = arr2.length - 1;
    let min = Math.min(arr1.length, arr2.length)
    let diff = Math.abs(x-y);
    let sum = 0;
    let carry = 0;
    
    console.log(diff)
    for(let i = 0; i < min; i++){
         sum = Number(arr1[x-i]) + Number(arr2[y-i]) + carry;
         if(sum > 9){
             arr3.push(sum - 10)
             carry = 1;
         }
         else{
             arr3.push(sum)
             carry = 0;
         }
        
        console.log(i, arr3)
    }
    
    for(let i = 0; i < diff; i++){
        
        if(x < y){
           sum = Number(arr2[y-x-i-1]) + carry;
        }
        else if(x > y){
           sum = Number(arr1[x-y-i-1]) + carry;
        }
        console.log(sum)
        if(sum > 9){
            carry = 1
            arr3.push(sum -10)
        }
        else{
            arr3.push(sum)
            carry = 0;
        }
    }
    if(carry){
        arr3.push(carry);
    }
    return arr3.reverse().join('').toString()
};

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 76 ms
  Memory Usage: 44.1 MB
-------------------------------------------------------------- 
*/

var addStrings = function(num1, num2) {
    let max = Math.max(num1.length, num2.length) + 1;
    let sum = 0;
    let carry = 0;
    let result = new Array(max);
    let digit1 = 0;
    let digit2 = 0;
    
    for(let i = 0; i < max; i++){
        
        digit1 = parseInt(num1[num1.length - 1 - i] || 0, 10);
        digit2 = parseInt(num2[num2.length - 1 - i] || 0, 10);
        sum = digit1 + digit2 + carry;
        carry = 0;
        
        if(sum > 9){
            carry = 1;
            sum = sum - 10;
        }
        result[max - i -1] = sum;
        
    }
    
    if(result[0] == 0){
        result.shift();
    }
    return result.join('')
};
