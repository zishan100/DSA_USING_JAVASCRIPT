class MinHeap{
   
    constructor(){
        this.heap = [];
    }

    getParentIdx(idx){
        return Math.floor((idx-1)/2);
    }

    getLeftChildIdx(idx){
        return 2*idx+1;
    }

    getRightChildIdx(idx){
        return 2*idx+2;
    }

    hasParent(idx){
        return this.getParentIdx(idx)>=0;
    }

    hasLeftChild(idx){
        return this.getLeftChildIdx(idx) < this.heap.length;
    }

    hasRightChild(idx){
        return this.getRightChildIdx(idx) < this.heap.length;
    }

    /*  
        Remove element from Heap data structure
      
        T.C: O(logn) 
    */    

    remove(){
       
        if( this.heap.length === 0 ) return;
        
        let item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown()
        
        return item;
    }
    
    /* 
        Insert element into Heap data structure
        T.C: O(logn)
    */

    add(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    

    heapifyUp(){
        let idx = this.heap.length-1;

        while(this.hasParent(idx) && this.heap[this.getParentIdx(idx)] > this.heap[idx] ){
           
            this.swap(this.getParentIdx(idx),idx);   
            
            idx = this.getParentIdx(idx);
        }
    }

    heapifyDown(){
        let idx = 0;

        while( this.hasLeftChild(idx) ){
           let smallestChildIdx = this.getLeftChildIdx(idx);
           
            if( this.hasRightChild(idx) && this.heap[this.getRightChildIdx(idx)] < this.heap[this.getLeftChildIdx(idx)] ){
                smallestChildIdx = this.getRightChildIdx(idx);
            }

            if( this.heap[idx] < this.heap[smallestChildIdx] ) {
                break;
            }else{
                this.swap(idx,smallestChildIdx);
            }
            idx = smallestChildIdx;
        }
    }

    swap(idx1,idx2){
       
        let temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;

    }

    peek(){
        if( this.heap.length === 0 ) return;

        return this.heap[0];
    }

    printHeap(){

        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]+"  ");   
        }
    }



}


let minHeap = new MinHeap();

minHeap.add(30);
minHeap.add(14);
minHeap.add(13);
minHeap.add(15);
minHeap.add(16);
minHeap.add(17);
minHeap.add(20);
minHeap.add(25);

minHeap.printHeap();
minHeap.remove();
minHeap.remove();
minHeap.remove();
console.log("Peek Element :",minHeap.peek());
