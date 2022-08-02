/* 
 * --------------------------------------------------------------
 * PROBLEM #20
 * --------------------------------------------------------------
 * 
 * @param {string} s
 * @return {boolean}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 65 ms
  Memory Usage: 42.1 MB
-------------------------------------------------------------- 
 */

var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++){
        
        //Closed Parentheses ()
        if(s[i] == ')'){
            if(stack[stack.length - 1] == '('){
                stack.pop();
            }
            else{return false;}
        }
        
        // Closed Square Brackets []
        else if(s[i] == ']'){ 
            if(stack[stack.length - 1] == '['){
                stack.pop();
            }
            else{return false;}
        }
        
        //Closed Sqiggly Brackets {}
        else if (s[i] == '}'){
            if(stack[stack.length - 1] == '{'){
                stack.pop();
            }
            else{return false;}
        }
        else{
            stack.push(s[i])
        }
    }
    return (stack.length > 0)? false: true;
        
};