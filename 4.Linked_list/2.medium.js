const LinkedList = require('./linked_list');
const Node = require('./node');

/* Q11. Add two number in linked list */
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

function addTwoLL(l1, l2) {

    /* 1.Optimize solutions   */
    /* T.C : O(n) */
    /* S.C : O(1) */

    //     let h1 = l1;
    //     let h2 = l2;
    //     let uVal;
    //     let carry = 0, nodeVal;
    //     let newHead =null , newTail = null ;
    //     while( h1 !==null && h2 !==null ){

    //         nodeVal = +(h1.val + h2.val +carry);
    //         carry = 0;
    //         if( (nodeVal) >= 10 ){
    //             uVal =  (nodeVal % 10);
    //             carry = Math.floor(nodeVal/10);
    //         }

    //         if( newHead === null ){
    //             let newNode = new ListNode(( nodeVal >= 10 ? uVal : nodeVal ));
    //             newHead = newNode;
    //             newTail = newNode;
    //         }else{
    //             let newNode = new ListNode((nodeVal >= 10 ? uVal : nodeVal));
    //             newTail.next = newNode;
    //             newTail = newTail.next;
    //         }

    //         h1 = h1.next;
    //         h2 = h2.next;
    //     }

    //     while( h1!==null){

    //         nodeVal = (h1.val + carry)
    //         carry = 0;
    //         if( nodeVal >= 10 ){
    //             uVal = (nodeVal % 10);
    //             carry = (nodeVal/10);
    //         }
    //         let newNode = new ListNode( nodeVal >= 10 ? uVal : nodeVal );
    //         newTail.next = newNode;
    //         newTail = newTail.next;
    //         h1 = h1.next;
    //    }

    //     while( h2 !== null ){

    //         nodeVal = (h2.val + carry)
    //         carry = 0;
    //         if( nodeVal >= 10 ){
    //             uVal = (nodeVal % 10);
    //             carry = (nodeVal/10);
    //         }
    //         let newNode = new ListNode( nodeVal >= 10 ? uVal : nodeVal );
    //         newTail.next = newNode;
    //         newTail = newTail.next;
    //         h2 = h2.next;
    //     }

    //     if(carry >= 1 ){
    //         let newNode = new ListNode(carry);
    //         newTail.next = newNode;
    //         newTail = newTail.next;
    //     }

    //     return newHead;

}

/* Q12. Odd even linke list */
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

function oddEvenLL(head) {
    /* 1.Brute force solutions */
    /* T.C : O(n) */
    /* S.C : O(o+e) + O(n) ==> O(n) extra space taken */

    // if (head === null || head.next === null) {
    //     return head;
    // }

    // let odd = head;
    // let even = head.next;
    // let oddPos = [];
    // let evenPos = [];


    // while (odd !== null && even !== null) {

    //     oddPos.push(odd.val);
    //     evenPos.push(even.val);

    //     odd = odd.next ? odd.next.next : null;
    //     even = even.next ? even.next.next : null;
    // }

    // while (even !== null) {
    //     evenPos.push(even.val)
    //     even = even.next;
    // }

    // while (odd !== null) {
    //     oddPos.push(odd.val);
    //     odd = odd.next;
    // }

    // let merge = oddPos.concat(evenPos);

    // let newHead = null, tail;

    // for (let i = 0; i < merge.length; i++) {

    //     let newNode;
    //     if (newHead === null) {
    //         newNode = new ListNode(merge[i]);
    //         newHead = newNode;
    //         tail = newNode;
    //     } else {
    //         newNode = new ListNode(merge[i]);
    //         tail.next = newNode;
    //         tail = tail.next;
    //     }

    // }

    // return newHead;

    /* Optimize solutions */
    /* T.C : O(n) */
    /* S.C : O(1) */

    // if( head === null || head.next === null ){
    //     return head;
    // }

    // let odd = head , even = head.next , evenHead = even ;

    // while(even !== null && even.next !==null ){
    //       odd.next  = even.next;
    //       odd = odd.next;
    //       even.next = odd.next;
    //       even = even.next;
    // }

    // odd.next = evenHead;
    // return head;

}

/* Q13. Intersection of linked list */
// Input: intersectVal = 8, listA = [4,1,(8),4,5], listB = [5,6,1,(8),4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'

function intersectOfLL() {
    /* 1.Brute force solutions  */
    /* T.C : O(l1*l2) ==> O(l^2) */
    /* S.C : O(1) */
    // if (headA === null || headB === null) {
    //     return null;
    // }

    // while (headB !== null) {

    //     let temp = headA
    //     while (temp !== null) {
    //         if (headB === temp) {
    //             return headB;
    //         }
    //         temp = temp.next
    //     }
    //     headB = headB.next;
    // }
    // return null;

    /* 2. Optimize solutions  */
    /* T.C : O(l1) + O(l2) + O(l) ==> O(l)  */
    /* S.C : O(1) */

    // if (headA === null || headB === null) {
    //     return null;
    // }

    // let len1 = length(headA);
    // let len2 = length(headB);

    // let h1 = headA;
    // let h2 = headB;

    // let lenDiff = len1 < len2 ? (len2 - len1) : (len1 - len2)
    // let flagVal = len1 < len2 ? 1 : 0;

    // if (flagVal === 1) {
    //     while (lenDiff > 0) {
    //         h2 = h2.next;
    //         lenDiff--;
    //     }
    // } else {
    //     while (lenDiff > 0) {
    //         h1 = h1.next;
    //         lenDiff--;
    //     }
    // }


    // while (h1 !== null && h2 !== null) {

    //     if (h1 === h2) {
    //         return h1;
    //     }

    //     h1 = h1.next;
    //     h2 = h2.next;
    // }
    // return h1;

}

/* Q14. Copy List with Random Pointer */
// I faced challenges on question I will do it later on 

/* Q15 Sort linked list using merge sort */
// Thats question I had solved in crio platform refer from there.  




