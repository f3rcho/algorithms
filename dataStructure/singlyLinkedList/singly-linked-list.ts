class ListNode<T> {
  value: T | null;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
// head -> node -> node -> tail
class LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add node at the end
  push(value: T): LinkedList<T> {
    const newNode = new ListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // add node in the begining
  unshift(value: T) {
    let newNode = new ListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, value: T) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value, 'traversing');
      current = current.next;
    }
  }
}

const listTest = new LinkedList();

listTest.push('hello');
listTest.push('world');
listTest.push('from');
listTest.push('listTest');
listTest.push('!!!');
console.log(listTest, 'listTest');
// listTest.unshift('...');
// listTest.push('!!!');

// listTest.pop()
// listTest.traverse();
// console.log(
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   require('util').inspect(listTest, {
//     showHidden: false,
//     depth: null,
//     colors: true,
//   }),
//   'listTest'
// );
