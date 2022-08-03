/* 
 * --------------------------------------------------------------
 * PROBLEM #242
 * --------------------------------------------------------------
 *  
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 175 ms
  Memory Usage: 49.3 MB
-------------------------------------------------------------- 
*/

var isAnagram = function(s, t) {
    
    if(s.length != t.length){return false}
    
    
    let s_arr = s.split('');
    let t_arr = t.split('');
    
    s_arr.sort();
    t_arr.sort();
        
    
    return (s_arr.join('') == t_arr.join(''))? true: false;
};

/*
-------------------------------------------------------------- 
  Time Complexity: O(n)
  Runtime: 86 ms | 152 ms
  Memory Usage: 41.6 MB | 42.5 MB
-------------------------------------------------------------- 
*/

var isAnagram = function(s, t) {
    
    if(s.length != t.length){return false}
    
    let char_cnt = 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for(let i = 0; i < s.length; i++){
        char_cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        char_cnt[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    for(const [index, element] of char_cnt.entries()){
        if(element != 0){return false}
    }
    return true
};