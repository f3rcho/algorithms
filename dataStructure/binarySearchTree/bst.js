class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // [10, 6, 15, 3, 8, 20]
  DFSPreOrder() {
    let visitedNode = [];
    let current = this.root;

    function traverse(node) {
      visitedNode.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedNode;
  }
  // [10, 6, 3, 8, 15, 20]

  DFSPostOrder() {
    let visitedNode = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNode.push(node.value);
    }
    traverse(current);
    return visitedNode;
  }
  //  [3, 8, 6, 20, 15, 10]

  DFSInOrder() {
    let visitedNode = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedNode.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedNode;
  }
  // [3, 6, 8, 10, 15, 20]
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
