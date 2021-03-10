// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    //children array will hold this node's children nodes
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      //remove by filtering out what does NOT match in data
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    //trees have roots not heads
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift(); //take out first node

      arr.push(...node.children); //push in individual children elements instead of array
      //to avoid nested arrays -> [node [node children]]
      fn(node); //fn is just a function that you want to do to the node
      //ex: fn can be printNode(node) => (console.log(node))
      //this will print each node as it takes whatever node was taken from the front of the array.
    }
  }

  traverseDF(fn) {
    const arr = [this.root]; //put root node(which contains all children) into arr

    while (arr.length) {
      const node = arr.shift(); //take out first element of arr

      arr.unshift(...node.children); //push root node children into arr

      fn(node);
    }
  }
}

// const node = new Node(1);
// const tree = new Tree(); //initialized as empty;
// tree.root = node; //update tree root to give it first node.

module.exports = { Tree, Node };
