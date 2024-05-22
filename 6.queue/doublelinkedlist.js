const Node = require('./node.js');

module.exports = class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // Add node to the end of the list

    insertTail(item) {
        const newNode = new Node(item);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return newNode;
    }

    // Remove node from the beginning of the list
    removeHead() {
        if (this.length === 0) {
            return null;
        }

        const nodeToRemove = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToRemove.next;

            this.head.prev = null;
            nodeToRemove.next = null;
        }

        this.length--;

        return nodeToRemove.item;
    }

    firstNode() {

        if (!(this.head == null)) {
            return this.head.item;
        } else
            return null;
    }

    tailNode() {

        if (!(this.head == null)) {
            return this.tail.item;
        } else
            return null;
    }


    // Return list items

    toString() {
        const list = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            list.push(JSON.stringify(currentNode.item));
            currentNode = currentNode.next;
        }

        return list.toString();
    }
}