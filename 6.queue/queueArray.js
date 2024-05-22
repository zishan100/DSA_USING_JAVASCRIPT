class Queue {

    constructor() {
        this.items = [];

    }

    /* Enqueue */
    enqueue(val) {
        this.items.push(val);
    }


    /* Dequeue */
    dequeue() {

        if (this.isEmpty()) {
            console.log("No element is present in queue.");
            return;
        }
        return this.items.shift();
    }

    /* Peek/Head  */
    peek() {

        if (this.isEmpty()) {
            console.log("No element is present in queue.");
            return;
        }
        return this.items[0];
    }

    /* IsEmpty */
    isEmpty() {
        return this.items.length === 0;
    }

}


const qu = new Queue();

// Adding element into queue

for (let i = 2; i <= 12; i += 2) {
    qu.enqueue(i);
}

console.log("List of queue element :", qu);

// Get peek element from queue

console.log("Front element of queue :", qu.peek());


// Dequeue element from queue

while (!qu.isEmpty()) {
    console.log("Dequeue element of queue :", qu.dequeue());
}
