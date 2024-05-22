/* Q1. Implement queue using two stack  */

class queueUsingStack {

    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    // Insert into queue
    enqueue(val) {

        // First pop all element from s1 & push into s2
        while (this.s1.length !== 0) {
            this.s2.push(this.s1.pop());
        }

        this.s1.push(val)

        // Pop all element from s2 & push into s1

        while (this.s2.length !== 0) {
            this.s1.push(this.s2.pop());
        }

    }

    // Delete front ele from queue
    dequeue() {

        if (this.s1.length === 0) {
            console.log("Queue is empty");
            return;
        }

        const popVal = this.s1.pop();

        return popVal;
    }

    peek() {

        return this.s1.length > 0 ? this.s1[this.s1.length - 1] : null;
    }

    isEmpty() {
        return this.s1.length === 0;
    }
}

// const qu = new queueUsingStack();

// // enQueue element from 1 to n

// for (let i = 2; i <= 12; i += 2) {
//     qu.enqueue(i);
// }

// console.log("List of queue elemnt :", qu);

// // Peek element of Queue

// console.log("Peek element of Queue :", qu.peek());

// // Dequeue all element

// while (!qu.isEmpty()) {
//     console.log("Dequeue element from queue :", qu.dequeue());
// }




