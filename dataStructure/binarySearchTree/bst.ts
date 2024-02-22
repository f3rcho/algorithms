class BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree<T> {
  root: BinaryNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    let node = new BinaryNode(value);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          }
          current = current.right;
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          }
          current = current.left;
        }
      }
    }
  }
}

let btree = new BinarySeachTree();
btree.insert(10);
btree.insert(9);
btree.insert(15);
btree.insert(11);
btree.insert(12);
// btree.root = new BinaryNode(10)
// btree.root.right = new BinaryNode(15)
// btree.root.left = new BinaryNode(7)
// btree.root.left.right = new BinaryNode(9)

console.log(btree);
console.log(btree.root);
