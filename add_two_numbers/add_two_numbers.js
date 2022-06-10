/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * --------------------------------------------------------------
 *   Time Complexity: 
 *  Runtime: 155 ms
 *   Memory Usage: 47.2 MB
 * --------------------------------------------------------------
*/

 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let digit = 0;
    let val1 = 0;
    let val2 = 0;
    
    let prevNode = new ListNode();
    const lsum = prevNode;
    
    while(l1 || l2 || carry){
        
        if(l1){
            val1 = l1.val;
            l1 = l1.next;
        }
        if(l2){ 
            val2 = l2.val;
            l2 = l2.next;
        }
        
        const sum = val1 + val2 + carry;
        carry = (sum > 9)? 1 : 0;
        digit = (sum > 9)? sum - 10: sum;
        
        const currNode = new ListNode(digit); // Make new node
        prevNode.next = currNode; //Make the lsum.next Node equal to the newNode
        prevNode = currNode; // move up to this new node
        
        val1 = 0; 
        val2 = 0;
    }
    
    return lsum.next;
};


