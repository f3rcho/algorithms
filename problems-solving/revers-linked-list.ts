/*
2. Reverse a Linked List
Question
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val ?? 0);
      this.next = (next === undefined ? null : next);
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr) {
      let nextTemp: ListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  return prev;
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(head)); // Output: ListNode { val: 5, next: ListNode { val: 4, next: ListNode { val: 3, next: ListNode { val: 2, next: ListNode { val: 1, next: null } } } } }
