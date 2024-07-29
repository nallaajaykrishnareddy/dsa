class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkeList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  reverse() {
    let prev = null;
    let currentNode = this.head;
    while (currentNode) {
      const temp = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = temp;
    }

    this.head = prev;
  }

  print() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    let temp = "";
    while (currentNode) {
      temp += currentNode.value;
      temp += " -> ";
      currentNode = currentNode.next;
    }
    temp += " null";
    console.log(temp);
    return temp;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.value);
    return slow.value;
  }

  hasCycleDependancy() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (slow === fast) {
      console.log(slow === fast);

      return true;
    }

    return false;
  }

  removeNodeBasedOnValue(value) {
    if (this.head !== null && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    if (!currentNode.next) {
      throw new Error("Item not found");
    }
    currentNode.next = currentNode.next.next;
  }

  findMinValue() {
    let currentNode = this.head;
    let minValue = Infinity;
    while (currentNode) {
      if (minValue > currentNode.value) {
        minValue = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    console.log(minValue);
    return minValue;
  }

  insertAtPosition(newNode, position) {
    if (position === 1) {
      newNode.next = this.head;
    }

    let currentPostition = 1;
    let currentNode = this.head;

    while (currentNode && currentPostition < position) {
      currentNode = currentNode.next
      currentPostition += 1
    }

    if (!currentNode) {
      throw new Error("Not valid index")
    }

    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  removeDuplicates() {
    let currentNode = this.head
    while (currentNode && currentNode.next) {
      if (currentNode.value === currentNode.next.value) {
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }
  }

  removeNthFromEnd(position) {
    let dummyNode = new Node(0)
    dummyNode.next = this.head

    let ahead = dummyNode;
    let behind = dummyNode;

    for (let i = 0; i <= position; i++) {
      ahead = ahead.next
    }

    while (ahead) {
      behind = behind.next
      ahead = ahead.next
    }
    behind.next = behind.next.next

    return dummyNode.next
  }
}

const ll = new LinkeList();
[1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((item) => ll.append(item));
// ll.reverse();
ll.findMiddle();
ll.hasCycleDependancy();
ll.findMinValue();
ll.removeNodeBasedOnValue(8);
ll.insertAtPosition(new Node(11), 9)
ll.removeDuplicates()
ll.removeNthFromEnd(2)
ll.print();
