/* Q1) Two Sum problem  */
// i/p:  arr = [1,21,3,14,5,60,7,6]
// value = 81  
// o/p: arr = [21,60]

function findSum(arr,value){
    /*1.Brute force approach */
    /*  T.C : O(n^2)  */
    // let opArr = [];     
    // for(let i=0;i < arr.length;i++){
    //     for(j=i+1;j < arr.length;j++){
    //         if( (arr[i]+arr[j]) === value){
    //             opArr = [arr[i],arr[j]];
    //             return opArr;    
    //         }    
    //     }   
    // }
    // return false; 
    
    /*2.Looking for better Approach to optimize above solutions */
    /* T.C : O(logn) + O(nlogn) ==> O(nlogn) */
    // let opArr = []; 
    // let op_index;   
    // arr.sort((a,b)=>(a-b));   
     
    // for(let i=0;i<arr.length;i++){
    //     op_index = findSumHelper(arr,value-arr[i]);   
    //     if(op_index && op_index!== i ){
    //         opArr = [arr[i],arr[op_index]];
    //         return opArr;     
    //     } 
    // }  
    // return false;    
}

function findSumHelper(arr,val){

    let l=0,h=arr.length-1,m=0;

    while(l<h){

       m = Math.floor((l+h)/2);  
       if(arr[m] === val){
          return m;  
       }else if(arr[m] < val ){
            l = m+1; 
       }else  
            h = m-1;   
    }     
    return false;
}

/* Q2. Array of Product all element */
// arr = [1,2,3,4]
// arr = [24,12,8,6]

function findProduct(arr) {
    /*1.Brute force approach  */
    /* T.C :  O(n^2)  */
    
    // let opArr = []; 
    // let prod_val;
    // for(let i=0;i<arr.length;i++ ){
    //     prod_val = arr.reduce((total,item,index)=>{
    //         if( i !== index )
    //             total =  total * item
    //         return total;        
    //     },1)         
    //     opArr.push(prod_val); 
    // }
    // return opArr;
    
    /* 2.Optimize approach */
    /* T.C : O(n) + O(n) ==> O(n) */
    
    // let prod_val = 1;
    // let prod_arrs = [];
    // for(let i=0;i<arr.length;i++){
    //     prod_val = prod_val * arr[i];      
    // }
    
    // for(let i=0;i<arr.length;i++){
    //     prod_arrs.push((prod_val/arr[i])); 
    // }
    // return prod_arrs; 

}

/* Q3. Find min/max element of array  */

// i/p : arr = [9,2,3,6]
// o/p : 2 

function findMinimum(arr) {
    /* 1.Brute force solution */ 
    /* T.C : O(nlogn)  */
    // arr.sort((a,b)=>(a-b));       
    
    // return arr[0];
 
    /* 2.Optmize solution  */
    /* T.C : O(n) */
    
    // let min_val = Number.MAX_VALUE;
    
    // for(let i=0;i<arr.length;i++){
    //    if(arr[i] < min_val){
    //       min_val = arr[i];
    //    }    
    // }
    // return min_val; 
      
 }

/* Q4. Find first unique element from array-list */
// i/p : [9,2,3,2,6,6] 
// o/p : 9

function findFirstUnique(arr) {
    /* 1. Brute force approach  */  
    /* T.C : O(n^2) */
    
    // let count =0;
    // for(let i=0;i<arr.length;i++){
    //    count = 0;
    //    for(j=0;j<arr.length;j++){
          
    //       if( i===j) continue;
 
    //       if( arr[i]!== arr[j]) count++; 
    //    }
 
    //    if(count === arr.length-1){
    //       return arr[i];
    //    }     
    // }        
    // return null;   
    
    /* 2. Optimize approach solution  */
    /* T.C : O(n) & O(k)(Extra space for maintaining count of each element) */
 
    // let countPair = {};
    
    // for(let i=0;i<arr.length;i++){
    //    countPair[arr[i]] = (countPair[arr[i]] + 1) || 1 ;   
    // }  
    
    // for(let i=0;i<arr.length;i++){
    //    if( countPair[arr[i]] ===1 ) return arr[i];     
    // }
    
    // return null;
 }

/* Q5. Find second maximum element of array */
// i/p : [9,2,3,6]
// o/p : 6

function findSecondMaximum(arr) {

    /* 1.Brute force approach */
    /* T.C : O(nlog(n)) + O(n)  ==> O(nlogn)*/

    // arr.sort((a,b)=>(b-a));  

    // let max_val = arr[0]; 
    // for(let i=0;i<arr.length;i++){
    //     if(max_val!== arr[i]) return arr[i];      
    // } 
    // return false;

    /* 2.Optimize approach */
    /* T.C : O(n) */

    // let max_val = Number.MIN_VALUE;
    // let sec_max_val = Number.MIN_VALUE;

    // for(let i=0;i<arr.length;i++){
    //    if(max_val < arr[i]){
    //        sec_max_val = max_val;
    //        max_val = arr[i];       
    //    }     

    //    if( max_val > arr[i] && arr[i] > sec_max_val){
    //         sec_max_val = arr[i];          
    //    }
    // } 
    // return sec_max_val;
       
}

/* Q6. Right Rotate of an array by n */
// i/p : arr = [1,2,3,4,5]  n = 3
// o/p : arr = [3,4,5,1,2]

function rightRotate(arr,n){
    /* 1.first approach solving using standard func of js */
    /* T.C:  O(n) + O(n) ==> O(n) */
    /* S.C : O(n) with extra space */
    // let remove_ele = arr.splice(arr.length-n,arr.length);    
    // remove_ele = [ ...remove_ele , ...arr  ];   
    
    // return remove_ele;
  
    /* 2.Moving to better approach in term of space & time complexity */
    /* T.C : O(m*n) where m is size of rotation & n is i/p size */
    /* S.C : no extra space */  
    // for(let i=0;i<n;i++){
    //   let lst_index = arr[arr.length-1];
    //   for(let j=arr.length-1;j>= 0 ;j--){
    //       arr[j] = arr[j-1];   
    //   }
    //   arr[0] = lst_index;
    // }
    
    // return arr; 
  }

/* Q7. Rearranging positive & negative value in arrays */
// i/p : [10,-1,20,4,5,-9,-6] 
// o/p : [-1,-9,-6,10,20,4,5]

function reArrange(arr) {
    /* 1.Brute force solutions */
    /* T.C : O(n) */
    /* S.C : O(n) for extra space */
     
    // let opArr = [];
  
    // for(let i=0;i<arr.length;i++){
    //     if( arr[i] < 0 ) opArr.push(arr[i]);  
    // } 
     
    // for(let i=0;i<arr.length;i++){
    //     if( arr[i] >= 0 ) opArr.push(arr[i]);  
    // }
    
    // return opArr;
  
    /* 2. Optimize based solutions */
    /* T.C : O(n) */
    /* S.C : Take no extra space */
    // i/p :  [-1,5,-4,-3] --> [ -1 , -4 , -3 , 5 ]
    
    // let i=0,j=0;
     
    // while(j< arr.length){
  
    //      if( arr[j] >= 0  ) j++;
    //      else if( arr[j] < 0  ){
    //          let temp = arr[j];
    //          arr[j] = arr[i];
    //          arr[i] = temp;
    //          i++;j++;
    //      }
           
    // } 
    // return arr;
}

/* Q8. Rearrange sorted array in max/min form  */
// i/p: [1,2,3,4,5]
// o/p: [5,1,4,2,3]

function maxMin(arr){
  
    /* 1.Brute force approach */
    /* T.C : O(n)  */
    /* S.C : O(n) extra space */
    
    // let op_arrs = [];
    // let i=0,j = arr.length -1; 
    // while(i<j){
    //   op_arrs.push([arr[j],arr[i]]);     
    //   i++;j--;
    // }
     
    // if(arr.length%2!==0){
    //   op_arrs.push(arr[j]);   
    // }
    
    // return op_arrs;
  
    /* 2. Optimize based solutions */     
    /* T.C : O(n/2 * n ) ==> O(m*n)  */
    /* S.C : O(1) */      
     
    // let s_index = 0;
    // let temp;
    // while(s_index < arr.length -1 ){
    //   temp = arr[arr.length-1]; 
    //   for( j = arr.length-1;j>=s_index+1;j--){
    //       arr[j] = arr[j-1];   
    //   }
    //   arr[s_index] = temp; 
    //   s_index+= 2;
    // }
    // return arr;
}

/* Q9. Maixmum sum subarray */
// i/p: [1,10,-1,11,5,-30,-7,20,25,-35]
// o/p:  45

function findMaxSumSubArray(A) {
    /* 1.Brute force solution */
    /* T.C :  O(n^2) */
    /* S.C : O(1) */
  
    // let max_sum = Number.MIN_SAFE_INTEGER;
    // for(let i=0;i<A.length;i++){
    //   cal_sum = 0;
    //   for(let j=i;j<A.length;j++){
    //     cal_sum+=A[j];        
        
    //     if(max_sum < cal_sum) 
    //       max_sum = cal_sum;
    //   }      
    // } 
  
    // return max_sum;
  
    /* 2. Optimize solution */
    /* T.C :  O(n) */
    /* S.C :  O(1) */
  
    // let max_sum = A[0]; 
    // let cal_sum = A[0];
  
    // for(let i=0;i<A.length;i++){
    //   if(cal_sum < 0 ){
    //     cal_sum = A[i];
    //   }else{
    //     cal_sum+=A[i];   
    //   }
      
    //   if(max_sum < cal_sum )
    //     max_sum = cal_sum; 
    // }
    // return max_sum;
};