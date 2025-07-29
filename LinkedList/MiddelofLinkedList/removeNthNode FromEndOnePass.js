/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	//first create a sentinel node

	let sentinel = new ListNode();
	sentinel.next = head;

	//start the first pointer ahead by n
	let first = sentinel;
	for (let i = 0; i < n; i++) {
		first = first.next;
	}
	//both pointer until the first pointer raches the last node
	let second = sentinel;
	while (first && first.next) {
		second = second.next;
		first = first.next;
	}
	second.next = second.next.next;
	return sentinel.next;
};
