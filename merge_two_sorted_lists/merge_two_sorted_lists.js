/* 
 * --------------------------------------------------------------
 * PROBLEM #21
 * --------------------------------------------------------------
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
*/

/*
-------------------------------------------------------------- 
  Time Complexity: O(n) 
  Runtime: 91 ms
  Memory Usage: 43.9 MB
-------------------------------------------------------------- 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 var mergeTwoLists = function(list1, list2) {
    
    let head = new ListNode();
    const result = head;
    
    while(list1 || list2){
        if(list1 && list2){// if both have values
            let digit;
            if(list1.val < list2.val){
                // list1 node is less than list2 node
                digit = list1.val;
                list1 = list1.next;
            }
            else if(list2.val < list1.val){
                // list2 node is less than list1 node
                digit = list2.val;
                list2 = list2.next;
            }
            else{
                //Equal values
                digit = list1.val;
                list1 = list1.next;
            }
            const node = new ListNode(digit)
            head.next = node;
            head = head.next;
            
        }
        else if(list1){
            head.next = list1;
            break;
        }
        else if(list2){
            head.next = list2;
            break;
        }
            
        else{break;}
    }
    
    return result.next;
};

