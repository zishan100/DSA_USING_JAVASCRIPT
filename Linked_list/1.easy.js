const LinkedList = require('./linked_list');
const Node = require('./node');

/* Q1. Find length of linked list  */
/* T.C : O(n) */
/* S.C : O(1) */
// i/p : 10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null
// o/p : Length of linked  :  10
function length(node){
    let length = 0; 
    let currentNode =  node.getHead();
   
    while(currentNode!==null){
      length++;
      currentNode = currentNode.nextElement;  
    }
    return length;
}

/* Q2. Remove duplicate from linked list */
// i/p : 1->2->2->2->3->4->4->5->6
// o/p : 1->2->3->4->6 

function removeDuplicate(list){

    /* 1. Brute force solutions */
    /* T.C : O(n^2) */
    /* S.C : O(1) */
    
    if(list.isEmpty()){
        return null;
    }

    let currNode = list.getHead();
    if( currNode.nextElement === null ){
        return list;
    } 

    while( currNode !== null ){

        let innerNode = currNode;
        while(innerNode !== null ){
                 
            if( innerNode.nextElement !== null && ( currNode.data === innerNode.nextElement.data ) ){
                innerNode.nextElement = innerNode.nextElement.nextElement;   
            }else{
                innerNode = innerNode.nextElement; 
            }     
        }
        currNode = currNode.nextElement;  
    }

    return list;  
}

/* Q3. Union of Linked list */
// i/p: list1 = 10->20->80->60
//      list1 = 15->20->30->60->45 
// o/p: union = 10->20->80->60->15->30->45

function union(list1, list2) {
    /* Brute force solution */
    /* T.C : O(n)(Joined two linked list) + O(n^2)(Taken By remove duplicacy) ==> O(n^2) */
    /* S.C : O(1) */

    if( list2.isEmpty()){
        return list1;
    }

    if( list1.isEmpty() ){
        return list2;
    }
    
    let currNode = list1.getHead();
    let head2 = list2.getHead();
    
    while(currNode.nextElement !==null ){
        currNode = currNode.nextElement; 
    } 
    currNode.nextElement = head2;
    removeDuplicate(list1);
    return list1;
}


/* Q4. Intersection of Linked list */
// i/p: list1 = 10->20->80->60
//      list1 = 15->20->30->60->45 
// o/p: intersection = 20->60 

function intersection(list1, list2) {
    /* Brute force solution */
    /* T.C : O(n^2) */
    /* S.C : O(k) where k is common element in both linked list */
    let h1 = list1.getHead();
    let h2 = list2.getHead();
    let opHead = new LinkedList();

    while( h1 !==null){
      h2 = list2.getHead();
      while( h2!==null ){
          
          if(h1.data === h2.data){
            opHead.insertAtHead(h1.data);
            break;
          }
          h2 = h2.nextElement;     
      } 
      
      h1 = h1.nextElement;
    } 
    return opHead;
} 

/* Q4. Function to find the nth node from the end of a Linked List */
// i/p : 22->18->60->78->47->39->99 and n = 3
// o/p:  47

function findNth(list, n) {
    let nthNode = null;
    
    /* 1. Brute force solutions  */
    /* T.C : O(n)(Cal length) + O(m)(Finding mth node in linked list ) => O(n) */
    /* S.C : O(1) */
    
    let currNode = list.getHead();
    let len = 0;
    
    while(currNode!==null ){
        len++;
        currNode = currNode.nextElement;
    }
    
    if( len < n ){
      return null;
    }
    
    let nthVal = (len - n); 
    currNode = list.getHead(); 
    while( nthVal > 0 ){
      currNode = currNode.nextElement;
      nthVal--;
    } 
    nthNode = currNode;
    return nthNode;
}

/* Q5. Delete nth node from end of list */
// Input: [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

function deleteNthNode(list){
    
    /* T.C : O(n) */
    /* S.C : O(1) */
    let nthNode = list.getHead();
    let currNode = list.getHead();
    let len = 0; 
    
    while( currNode !==null ){
        len++;
        currNode = currNode.nextElement;
    }
    
    let nthVal = len - n
    
    
    if( len === n ){
        nthNode = head.nextElement;
        return nthNode;
    }
    
    while(  nthVal > 1  ){
        nthNode = nthNode.nextElement;
        nthVal--
    }
    
    let nextNode = nthNode.nextElement;
    nthNode.next = nextNode.nextElement;
    nextNode.nextElement = null;
    return head;    
}

/* Q6. Find middle node of linked list */
// i/p: 1->2->3->5>10->12->null
// o/p: 5

function findMiddleNode(list){
    
    /* 1st Approach  */
    /* T.C : O(n) */
    /* S.C : O(1) */
    
    let len = length( list );
    let head = list.getHead();
    let midVal =  Math.ceil( len/2 );
    
    while( midVal > 0 ){
        head = head.nextElement;
        midVal--;
    }
    return head.data;
}

/* Q7. Reverse linked list  */
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

function reverseLL(list){
 
    // if linked list is empty
    let head = list.getHead();

    if( head === null ){
        return null;
    }
        
    let prevNode = head;
    let currNode = head.next === null ? null : head.next; 
        
    // if no next node  is present
    if( currNode === null ){
        return head;;
    }
        
    let nxtNode = currNode.next === null ? null : currNode.next;
    prevNode.next =null;
    
    // if no next node is present 
    if( nxtNode === null ){
        currNode.next = prevNode;
        return currNode;
    }
        
    while( nxtNode.next !==null  ){
            
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nxtNode;
        nxtNode = nxtNode.next;
    }
    currNode.next = prevNode;
    nxtNode.next = currNode;
        
    return nxtNode;

}

/* Q8. Merge two sorted array in linked list */
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
function mergeSortLL(head1,head2){

    /* 1.Brute force approach */
    /* T.C : O(l1) + O(l2) + O(nlogn) + O(n) ==> O(n) */
    /* S.C : O(n) */
    
    // let extSp = [];
    
    // while( list1!==null ){
    //      extSp.push(list1.val);
    //     list1 = list1.next;
    // }
    
    // while(list2!==null){
    //     extSp.push(list2.val);
    //     list2 = list2.next;
    // }
    
    // let head , tail;
    
    // extSp.sort((a,b)=>(a-b));
    // console.log(extSp);
    // head = null;tail =null;
    // for(let i=0;i<extSp.length;i++){
        
    //     let newNode;
    //     if(head === null ){
    //         newNode = new ListNode(extSp[i]);
    //         newNode.next = null;
    //         head = newNode;
    //         tail = newNode;
    //     }else{
    //         newNode = new ListNode(extSp[i]);
    //         tail.next = newNode;
    //         tail = tail.next;    
    //     }
        
        
    // }
    
    // return head;
    
    /* 2.Optimize approach solution */
    /* T.C : O(n) */
    /* S.C : O(1) */
    
    // let dNode = new ListNode(0);
    // let tail = dNode;
    
    // while(true){
       
    //    if( list1 === null ){
    //        tail.next = list2;
    //        break;
    //    }
        
    //    if( list2  === null ){
    //        tail.next = list1;
    //        break;
    //    } 
       
    //    if( list1.val<=list2.val  ){
    //        tail.next = list1;
    //        list1 = list1.next;
    //    }else{
    //        tail.next = list2;
    //        list2 = list2.next;
    //    } 
        
    //    tail = tail.next; 
    // }
    // return dNode.next;
}

/* Q9. Find Palindrome in linked list */
// Input: head = [1,2,2,1]
// Output: true

function findPalindromeLL(){
    
    /* 1.Brute force approach */ 
    /* S.C : O(n) */
    /* T.C : O(n) */
    
    // let extSp = []; 
    
    // while( head !== null ){
    //     extSp.push(head.val);
    //     head = head.next;
    // }
    
    // let i=0;
    // let j = extSp.length-1;
    // while ( i< j ){
        
    //     if( extSp[i] !== extSp[j] ){
    //         return false;
    //     }
    //     i++;j--;
    // }
    // return true;
    
    /* 2.Optimize approach solutions */
    /* T.C : O(n) + O(n/2) + O(n/2) ==> O(n) */
    /* S.C : O(1) */
    
    // let low = head ;
    // let high = findMiddleNode( head );
    // let revP =  reverseList (high );
    // console.log(revP);
    
    // while( low !== null && revP !== null  ){
           
    //      if( low.val !== revP.val ){
    //          return false;
    //      }
    //      low = low.next;
    //      revP = revP.next;
    // }
    
    // return true;
}


/* Q10. Detect cycle in linnked list */
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

function hasCycle(list){
    /* T.C : O(n) */
    /* S.C : O(1) */
    
    let slow = head;
    let fast = head;
    
    if( fast === null ){
        return false;
    }
    
    while( fast !== null ){
        slow = slow.next;
        
        if( fast.next === null || fast.next.next === null ){
            return false;
        }
        fast = fast.next.next;
        
        if( fast === slow ){
           
            return true;
        }
    }
    return false;
}