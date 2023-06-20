class BinarySeachTree<T> {
  root: T | null;
  constructor() {
    this.root = null;
  }
}

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

let btree = new BinarySeachTree<BinaryNode<number>>();
btree.root = new BinaryNode(10);
btree.root.right = new BinaryNode(15);
btree.root.left = new BinaryNode(7);
btree.root.left.right = new BinaryNode(9);

console.log(btree);
console.log(btree.root);
