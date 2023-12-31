const Node = require('./node');
module.exports = class LinkedList{
    constructor(){
        this.head = null;
    }

      //Insertion At Head  
      insertAtHead(newData) {
        let tempNode = new Node(newData);
        tempNode.nextElement = this.head;
        this.head = tempNode;
        return this; //returning the updated list
      }
      /* IsEmpty func for checking linked_list is empty or not ? */
      isEmpty() {
        return (this.head == null);
      }
    
      //function to print the linked list
      printList() {
        if (this.isEmpty()) {
          console.log("Empty List");
          return false;
        } else {
          let temp = this.head;
          while (temp != null) {
            process.stdout.write(String(temp.data));
            process.stdout.write(" -> ");
            temp = temp.nextElement;
          }
          console.log("null");
          return true;
        }
      }
      /* Get head of linked_list */
      getHead() {
        return this.head;
      }
      getListStr() {
        if (this.isEmpty()) {
          console.log("Empty List");
          return "null";
        } else {
          let st = "";
          let temp = this.head
          while (temp != null) {
            st += String(temp.data);
            st += " -> ";
            temp = temp.nextElement;
          }
          st += "null";
          return st;
        }
      }
      /* Insert At Tail */
      insertAtTail(newData) {
        //Creating a new Node with data as newData
        let node = new Node(newData);
    
        //check for case when list is empty
        if (this.isEmpty()) {
          //Needs to Insert the new node at Head
          this.head = node;
          return this;
        }
    
        //Start from head
        let currentNode = this.head;
    
        //Iterate to the last element
        while (currentNode.nextElement != null) {
          currentNode = currentNode.nextElement;
        }
    
        //Make new node the nextElement of last node of list
        currentNode.nextElement = node;
        return this;
      }
      /* Search node value in linked_list */
      search(value) {
        //Start from the first element
        let currentNode = this.head;
    
        //Traverse the list until you find the value or reach the end
        while (currentNode != null) {
          if (currentNode.data == value) {
            return true; //value found
          }
          currentNode = currentNode.nextElement
        }
        return false; //value not found
      }
      /* Delete node at head */
      deleteAtHead(){
         //Write code here
        if( this.isEmpty()){
            return null;
        }   
      
        let firstNode = this.head;
        this.head = firstNode.nextElement;
        
        return this;
      }
      /* Delete node by value */
      deleteByValue(value){
        
        //Write code here
        if( this.isEmpty() ){
            return false;
        }
        let currentNode = this.head;
        let prevNode;
        
        if( currentNode.data === value ){
            this.head = currentNode.nextElement;
            return true;
        }
        
        while(currentNode !==null ){

            if( currentNode.data === value ){
                prevNode.nextElement = currentNode.nextElement === null ? null : currentNode.nextElement;
                return true;
            }
            prevNode = currentNode;   
            currentNode = currentNode.nextElement; 
        }
        return false;
      }
      /* Delete node at tail  */
      deleteAtTail(){
          if( this.isEmpty() ){
            return this
          }

          let currentNode = this.head;
          
          while( currentNode.nextElement.nextElement !== null ){
                currentNode = currentNode.nextElement;  
          }

          currentNode.nextElement = null;
          return this;
      }
}