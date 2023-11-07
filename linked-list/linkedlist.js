class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.size++;
  }

  getByIndex(index) {
    let position = 0;
    let currentNode = this.head;

    while (position < index) {

      currentNode = currentNode.next;
      position++;
    }

    return currentNode;
  }

  getLength() {
    return this.size;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {

      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
console.log(linkedList);
console.log(linkedList.getByIndex(0));
console.log(linkedList.getLength());
console.log(linkedList.search(2));
