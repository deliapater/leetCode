/**
 * Definition for singly-linked
 * function ListNode(val, next) {
 *      this.val = (val===undefined)
 *      this.next = (next===undefined)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const middleNode = (head) => {
  // Initialize two pointers:
  let slow = head;
  let fast = head;

  // While fast is not null and fast.next is not null:
  while (fast !== null && fast.next !== null) {
    // Move slow one step forward
    slow = slow.next;
    // Move fast two steps forward
    fast = fast.next.next;
  }
  // When loop ends, slow will be at the middle node.
  return slow;
};

// Helper to create a linked list from an array
const createLinkedList = (arr) => {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};

module.exports = { ListNode, middleNode, createLinkedList };