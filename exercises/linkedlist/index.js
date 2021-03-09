// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    //next is next node, has default in case no next node was assigned
    this.data = data;
    this.next = next;
  }
}

//Linkedlist class only knows about the head.
//It will not know how many nodes are in the list.
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    //this.head(second arguement) is currently the exisisting node
    //that was initalized when this LinkedList
    //was created
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
      //you can call next because you are using
      //the whole node with contains the data and
      //the next referrence(arrow)
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }

    return node;
  }

  clear() {
    return (this.head = null);
  }

  removeFirst() {
    let node = this.head;

    if (!node) {
      return;
    }

    return (this.head = node.next);
  }

  removeLast() {
    let temp = this.head;
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    //while there is a next node
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    //alternative
    // while (temp) {
    //   if (!temp.next.next) {
    //     temp.next = null;
    //     return;
    //   }
    //   temp = temp.next;
    // }
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      //there's something in this linked list
      lastNode.next = new Node(data, null);
    } else {
      //there is nothing here!
      this.insertFirst(data);
    }
  }

  getAt(integer) {
    //linked list index system same as arrays
    //starts at 0 index
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === integer) {
        return node;
      } else {
        counter++;
        node = node.next;
      }
    }
    return null; //if the while loop can't find it
  }

  removeAt(integer) {
    if (!this.head) {
      return;
    }

    if (integer === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(integer - 1);
    //find previous node, so if index is 2,
    //it is pointing at index 1, so you can
    //update the next property to index 3
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (index === 0 || !this.head) {
      this.insertFirst(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
    // if (!previous || !previous.next) {
    //   previous ? (previous.next = new Node(data, null)) : this.insertLast(data);
    // } else {
    //   previous.next = new Node(data, previous.next);
    // }
  }
}

module.exports = { Node, LinkedList };
