class Node {
  constructor(data) {
    this.data = data;
    this.head = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverseLinkedList() {
    let prev = null;
    let current = this.head;
    while (current) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }

    this.head = prev;
  }

  getLinkedListLength() {
    let length = 0;
    let current = this.head;

    while (current) {
      length++;
      current = current.next
    }

    return length;
  }

  deleteNode(value){
    let current = this.head;
    if (!current) {
      return;
    }

    if (current.data == value) {
      current = current.next;
    }

    while (current.next) {
      if (current.next.data == value) {
        current.next = current.next.next;
        return
      }
      current = current.next
    }
  }
  
  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

console.log("Before reversed:");
linkedList.display();
linkedList.reverseLinkedList();

console.log("After reversed:");
linkedList.display();
console.log("Length of linkedlist:");
console.log(linkedList.getLinkedListLength());

linkedList.deleteNode(3);

console.log("After deleted:");
linkedList.display();


