/* 
 * --------------------------------------------------------------
 * PROBLEM #14
 * --------------------------------------------------------------
 * 
 * @param {string[]} strs
 * @return {string} 
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 64 ms
  Memory Usage: 42.4 MB
-------------------------------------------------------------- 
 */

 var longestCommonPrefix = function(strs) {
    //This means it only counts from index = 0 going on
    let lcp = "";
    let indexArray, indexString; 
    let checkLCP = true;
    
    if(strs.length < 2){
           lcp = strs[0];
    }
    else{
        indexString = 0;
        
        while(checkLCP){
            lcp += strs[0][indexString];
            for(indexArray = 0; indexArray < strs.length; indexArray++ ){ 
                if(indexString < strs[indexArray].length){
                    if(strs[indexArray][indexString] != lcp[indexString]){
                        //remove the character that was added to the lcp before the for loop
                        if(lcp.length > 1){
                            lcp = lcp.substr(0, indexString)
                        }
                        else{
                            lcp = "";
                        }
                        checkLCP = false;
                        break;
                    }
                }
                else{
                    if(lcp.length > 1){
                        lcp = lcp.substr(0, indexString)
                    }
                    else{
                        lcp = "";
                    }
                    checkLCP = false;
                    break;
                }

            }
            indexString++;
        }
    }
    return lcp;
};