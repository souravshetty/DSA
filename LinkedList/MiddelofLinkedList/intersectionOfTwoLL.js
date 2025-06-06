/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // move the all the nodes of head B into set 
    let data= new Set();
    while(headB){
        data.add(headB);
       headB=headB.next;
    }

    //compare each element of HeadA if they are presnet in set
    while(HeadA){
        if(data.has(headA)){
            return headA;
        }
        headA=headA.next;
    }
    returnnull
};