const { middleNode, createLinkedList } = require("./linkedList");

const linkedListToArray = (node) => {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
};

test("returns middle node from odd-length list", () => {
  const head = createLinkedList([1, 2, 3, 4, 5]);
  const middle = middleNode(head);
  expect(linkedListToArray(middle)).toEqual([3, 4, 5]);
});

test("returns second middle node from even-length list", () => {
  const head = createLinkedList([1, 2, 3, 4, 5, 6]);
  const middle = middleNode(head);
  expect(linkedListToArray(middle)).toEqual([4, 5, 6]);
});

test("returns head when list has one element", () => {
  const head = createLinkedList([42]);
  const middle = middleNode(head);
  expect(linkedListToArray(middle)).toEqual([42]);
});