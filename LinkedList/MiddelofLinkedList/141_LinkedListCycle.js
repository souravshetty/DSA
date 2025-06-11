/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let curr = head;
	let seenNodes = new Set();
	while (curr != null) {
		if (seenNodes.has(curr)) {
			return true;
		}
		seenNodes.add(curr);
		curr = curr.next;
	}
	return false;
};
