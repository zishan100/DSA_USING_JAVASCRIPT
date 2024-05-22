const Stack = require('./stack');



/* Q1. Sort stack  */
// ip: [23, 60, 12, 42, 4, 97, 2] where 23 is the top
// op: [2, 4, 12, 23, 42, 60, 97] where 2 is the top

function sortStack(stack) {

    /* Approach 1 */
    /* T.C : O(n) + O(nlogn) ==> O(n*logn)  */
    /* S.C : O(n) */

    // let extSp = []

    // while( !stack.isEmpty() ){
    //      extSp.push(stack.items.pop());    
    // }

    // console.log(extSp.sort((a,b)=>(b-a)));

    // for(let i=0;i<extSp.length;i++){
    //     stack.items.push(extSp[i]);     
    // } 
    // return stack;

    /* Recursion Approach 2 */
    /* T.C : O(n^2) */
    /* S.C : O(1) */

    // if (!stack.isEmpty()) {

    //     let temp = stack.pop();
    //     sortStack(stack);

    //     // In post order recursion call
    //     insert(stack, temp);

    // }
    // return stack;
}

/* Helper function of sorting stack */
function insert(stack, value) {

    if (stack.isEmpty() || value < stack.getTop()) {
        return stack.push(value);
    } else {
        let temp = stack.pop();
        insert(stack, value);
        stack.push(temp);
    }
}

/* Q2. Next Greater Element */
// ip: [4, 6, 3, 2, 8, 1]
// op: [6, 8, 8, 8,-1,-1]

function nextGreaterElement(arr) {


    /* 1. Brute force approach */
    /* T.C : O(n^2) */
    /* S.C : O(1)  */

    // let opArr = [];
    // let flag =0; 
    // for(let i=0;i<arr.length;i++){
    //     flag = 0;
    //     for(let j = i+1 ;j<arr.length; j++ ){
    //        if( arr[i] < arr[j]){
    //            opArr.push(arr[j]);
    //            flag =1;
    //            break;
    //        }                
    //     }

    //     if( flag === 0){
    //         opArr.push(-1);
    //     }
    // } 
    // return opArr;

    /* 2. Optimize approach */
    /* T.C:  O(n) */
    /* S.C : Extra space(stack) is used to maintain next greater element */

    // let opArr = new Array(arr.length);

    // let stk = new Stack();

    // for(let i = arr.length -1;i>=0;i--){

    //     if( stk.isEmpty() ){
    //         stk.push(arr[i]);
    //         opArr[i] = -1;
    //     }else{

    //         if( stk.getTop() > arr[i]){
    //             opArr[i] = stk.getTop();
    //         }else{
    //            while( !stk.isEmpty() &&  stk.getTop() < arr[i] ){
    //                 stk.pop();
    //             }
    //             opArr[i] = stk.isEmpty() ? -1 : stk.getTop();    
    //         } 
    //         stk.push(arr[i]);   

    //     }
    // }
    // return opArr;

}

/* Q3. Check valid parenthesis */
// exp = "{[({})]}"
// true

function isBalanced(exp) {

    let stk = new Stack();

    for (let i = 0; i < exp.length; i++) {

        if (exp[i] === '{' || exp[i] === '(' || exp[i] === '[') {
            stk.push(exp[i]);
        } else {

            if (!stk.isEmpty() && (stk.getTop() === '[' && exp[i] === ']')) {
                stk.pop();
            } else if (!stk.isEmpty() && (stk.getTop() === '(' && exp[i] === ')')) {
                stk.pop();
            } else if (!stk.isEmpty() && (stk.getTop() === '{' && exp[i] === '}')) {
                stk.pop();
            }

        }
    }

    return stk.isEmpty();
}

/* Q4. Min value of stack in O(1) ?  */
// ip: [9, 3, 1, 4, 2, 5]
// op: 1

/* Refer solutions to educative app stack/queue chapter */
/* At there I had disscuss two different approach to solve min value stack */

