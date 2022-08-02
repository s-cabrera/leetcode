/* 
 * --------------------------------------------------------------
 * PROBLEM #13
 * --------------------------------------------------------------
 * 
 * @param {string} s
 * @return {number}  
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 181 ms
  Memory Usage: 47.3 MB
-------------------------------------------------------------- 
 */

/*
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100   
    D             500
    M             1000
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
*/
var romanToInt = function(s) {
    let num = 0;
    for(let i = 0; i < s.length; i++){
        
        //Look for the substring "CM" 
        if(s.indexOf("CM", i) == i){
            num += 900;
            i++; //increment one extra for the character
        }
        else if(s.indexOf("CD") == i){
            num += 400;
            i++;
        }
        else if(s.indexOf("XC") == i){
            num += 90;
            i++;
        }
        else if(s.indexOf("XL") == i){
            num += 40; 
            i++;
        }
        else if(s.indexOf("IX") == i){
            num += 9; 
            i++;
        }
        else if (s.indexOf("IV") == i){
            num += 4; 
            i++;
        }
        else if(s[i] == 'M'){
            num += 1000;
        }
        else if(s[i] == 'D'){
            num += 500;
        }
        else if(s[i] == 'C'){
            num += 100;
        }
        else if(s[i] == 'L'){
            num += 50;
        }
        else if(s[i] == 'X'){
            num += 10;
        }
        else if(s[i] == 'V'){
            num += 5;
        }
        else if(s[i] == 'I'){
            num += 1;
        }
    }
        
    return num
};