const DoublyLinkedList = require('./doublelinkedlist');

class Queue {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    getFront() {
        if (!(this.isEmpty())) {
            return this.items.firstNode();
        } else
            return null;
    }

    getTail() {
        if (!(this.isEmpty())) {
            return this.items.tailNode();
        } else
            return null;
    }

    size() {
        return this.items.length;
    }

    // Add an item to the queue (Time complexity: O(1))
    enqueue(element) {
        return this.items.insertTail(element);
    }

    // Remove an item from the queue (Time complexity: O(1))
    dequeue() {
        return this.items.removeHead();
    }
}

// let arrVal = [2, 3, 4, 5, 6, 10];

// let demoQ = new Queue();

// for (let i = 0; i < arrVal.length; i++) {
//     demoQ.enqueue(arrVal[i]);
// }


// console.log(" Front element of Queue : ", demoQ.getFront());

// console.log(" Back element of Queue : ", demoQ.getTail());

// console.log("Size of Queue : ", demoQ.size());
