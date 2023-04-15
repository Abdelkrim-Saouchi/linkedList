class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    // adds new node to the end of list
    let lastNode = this.getTail();
    if (lastNode == null) this.head = new Node(value);
    else lastNode.nextNode = new Node(value);
  }
  prepend(value) {
    // adds new node to the start of list
    let tmp = null;
    if (this.head !== null) tmp = this.getHead();
    this.head = new Node(value);
    this.head.nextNode = tmp;
  }
  size() {
    // return the size of list
    if (this.head === null) return 0;
    let tmp = this.head;
    let counter = 1;
    while (tmp.nextNode !== null) {
      counter++;
      tmp = tmp.nextNode;
    }
    return counter;
  }
  getHead() {
    // return the first node of the list
    return this.head;
  }
  getTail() {
    // return the last node of the list
    let lastNode = this.head;
    if (lastNode === null) return lastNode;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    return lastNode;
  }
  at(index) {
    // return the node at given index
    if (this.head === null) return null;
    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return currentNode;
  }
  pop() {
    // remove the last element from the list
    if (this.head === null) return;
    let listSize = this.size();
    let beforeLastNode = this.at(listSize - 2);
    beforeLastNode.nextNode = null;
  }
  contains(value) {
    // return true if the node contains the passed value otherwise return false
    if (this.head === null) return false;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    // return the index of containing node or null
    if (this.head === null) return null;
    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return counter;
      }
      counter++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }
  toString() {
    // print on the console the list ( value ) -> ( value ) -> ( value ) -> null
    if (this.head === null) console.log('null');
    let print = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      print += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    print += 'null';
    return print;
  }
}

const linkedList = new LinkedList();
// linkedList.append(2);
// console.log(linkedList);
// linkedList.append(3);
// linkedList.prepend(0);
// // linkedList.pop();

// console.log(linkedList);
// console.log(linkedList.getHead());
// console.log(linkedList.size());
// console.log(linkedList.contains(5));
// console.log(linkedList.find(2));
// console.log(linkedList.toString());
