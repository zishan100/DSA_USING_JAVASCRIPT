class stack {

    constructor() {
        this.items = [];
        this.top = null;
    }

    /* Check stack isEmpty() */

    isEmpty() {
        return this.items.length === 0;
    }

    /* Check top element of stack */

    topElement() {
        return this.items.length === 0 ? null : this.top;
    }

    /* Size of stack */

    size() {
        return this.items.length;
    }

    /* Push operation of stack */

    pushOp(val) {
        this.items.push(val);
        this.top = val;
    }

    /* Pop operation of stack */

    popOp() {

        if (this.items.length > 0) {
            this.top = this.items[this.items.length - 2];
            return this.items.pop();
        } else {
            return null
        }
    }
}


module.exports = stack;
/* Checking all stack operation */

// let demoSk = new stack();

// let arrEle = [2, 3, 4, 56, 9];

// for (let i = 0; i < arrEle.length; i++) {
//     demoSk.pushOp(arrEle[i]);
// }
// console.log("top Element of stack :", demoSk.topElement());

// console.log("Size of stack :", demoSk.size());

// console.log("Check isEmpty or not : ", demoSk.isEmpty());

// console.log("Pop operation of stack :", demoSk.popOp());

// console.log("top of elemnent : ", demoSk.topElement(), "  size of stack :", demoSk.size());

