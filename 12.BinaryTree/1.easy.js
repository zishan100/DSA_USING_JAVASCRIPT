const TreeNode = require('./node');

/* 1.) Insert into binary tree */
/* Constructing Binary tree  */
//         10
//       /    \  
//      20     28
//      / \    / \
//     15 12  75 80

function insertLevelOrder(node, val) {

    if (node == null) {
        node = new TreeNode(val);
        return;
    }

    let q = [];
    q.push(node);

    while (q.length != 0) {

        let tempNode = q.shift();

        if (tempNode.left == null) {
            tempNode.left = new TreeNode(val);
            return;
        } else {
            q.push(tempNode.left);
        }

        if (tempNode.right == null) {
            tempNode.right = new TreeNode(val);
            return;
        } else {
            q.push(tempNode.right);
        }


    }

}

/* 2.) print binary tree */
function printPreOrder(node) {

    if (node == null) return;

    let q = [];
    let op = '';
    q.push(node);

    while (q.length != 0) {

        let temp = q.shift();

        op += temp.val + " ";

        if (temp.left != null) {
            q.push(temp.left);
        }


        if (temp.right != null) {
            q.push(temp.right);
        }
    }


    console.log(op);

}

const root = new TreeNode(10);

root.left = new TreeNode(20);

root.right = new TreeNode(28);

root.left.left = new TreeNode(15);

root.right.left = new TreeNode(75);

// insertLevelOrder(root, 12);
// insertLevelOrder(root, 80);


/* 3.) Height of BT (recursive approach ) */

function height(node) {

    if (node == null) {
        return 0;
    }

    let left = 1 + height(node.left);
    let right = 1 + height(node.right);

    return Math.max(left, right);
}

// console.log("Height of bt :", height(root));

/* 4.) Count no's of node in BT */

function countNode(node) {
    if (node == null) {
        return 0;
    }

    let left = 1 + height(node.left);
    let right = 1 + height(node.right);

    return 1 + left + right;
}

// console.log("Count no's of node :", countNode(root));

/* 5. Diameter of binary tree */
// T.C: O(n*n) ==> O(n^2)
// S.C: O(1)

function diameterOfBinaryTree(root) {

    if (root == null) return 0;

    let lh = height(root.left);
    let rh = height(root.right);

    let dia = lh + rh;

    let ld = diameterOfBinaryTree(root.left);
    let rd = diameterOfBinaryTree(root.right);

    return Math.max(ld, rd, dia);
}


/* 6. Right view of Binary tree */
// I/P:
//         10
//       /    \  
//      20     28
//      / \    / \
//     15 12  75 80
// O/P: [10,28,80] This is right view of Binary tree 



function rightViewBinaryTree(root) {
    // T.C: O(n)
    // S.C: O(1)

    let opRes = [];

    if (root == null) return null;

    let q = [];

    q.push(root);

    while (q.length != 0) {

        let k = q.length;

        while (k > 0) {

            let temp = q.shift();

            if (k == 1) {
                opRes.push(temp.val);
            }

            if (temp.left != null) {
                q.push(temp.left);
            }

            if (temp.right != null) {
                q.push(temp.right);
            }


            k--;
        }


    }

    return opRes;

}

/* 7. Mirror of BT */
// ip: 
//         10
//       /    \  
//      20     28
//      / \    / \
//     15 12  75 80

// op:
//         10
//       /    \  
//      28     20
//      / \    / \
//     80 75  12 15

function mirrorBinaryTree(root) {

    if (root == null) return root;


    let left = mirrorBinaryTree(root.left);

    let right = mirrorBinaryTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

/*8.) Boundary traveral of BT */
// ip: 
//          10
//         /  \
//        40   25
//        /    / \
//       16   15  12 
//        \   /   
//         8  9
// op: [10,40,16,8,9,12,25]

function binaryTreeBoundaryTraversal(root) {

    if (root == null) return root;

    let opArr = [];
    opArr.push(root.val);

    traverseLeftTree(root.left, opArr);

    traverseLeafTree(root.left, opArr);
    traverseLeafTree(root.right, opArr);

    traverseRightTree(root.right, opArr);

    // console.log(opArr);
    return opArr;
}

const traverseLeftTree = function (node, opArr) {

    if (node == null) return;

    if (node.left) {
        opArr.push(node.val);
        traverseLeftTree(node.left, opArr);
    } else if (node.right) {
        opArr.push(node.val);
        traverseLeftTree(node.right, opArr);
    }


}

const traverseLeafTree = function (node, opArr) {

    if (node == null) return;

    traverseLeafTree(node.left, opArr);

    traverseLeafTree(node.right, opArr);

    if (node.left == null && node.right == null)
        opArr.push(node.val);

}

const traverseRightTree = function (node, opArr) {

    if (node == null) return;

    if (node.right) {
        traverseRightTree(node.right, opArr);
        opArr.push(node.val);
    } else if (node.left) {
        traverseRightTree(node.left, opArr);
        opArr.push(node.val);
    }
}

/* 9.) Balanced Binary tree */
// ip: 
//           10             
//         /    \
//        40     25
//        / \    / \
//       16 18  15  12 
//        \      
//         8  
// op: true              

//          10 
//         /  \
//        40   25
//        /    
//       16    
//        \      
//         8
// op: false

function isBalancedBT(root) {
    /* 1st Approach */
    // T.C: O(n*n) => O(n^2)
    // S.C: O(1)

    // if (root == null) return true;

    // let lH = height(root.left);
    // let rH = height(root.right);

    // if (1 < Math.abs(lH - rH)) return false;

    // let tLeft = isBalancedBT(root.left);
    // let tRight = isBalancedBT(root.right);

    // return tLeft && tRight;

    /* 2nd Approach */
    // T.C: O(n)
    // S.C: O(1)

    if (root == null) return 0;

    let lh = isBalancedBT(root.left);

    if (lh == -1) return -1;

    let rh = isBalancedBT(root.right);

    if (rh == -1) return -1;

    if (Math.abs(rh - lh) > 1) return -1;

    return Math.max(lh, rh) + 1;


}

// console.log(isBalancedBT(root));

/* 10.) Check Symmetric binary tree */
// ip:
//              1
//           /    \ 
//          2      2
//         / \   /  \ 
//        3   4 4    3
// op: true

function isSymmetric(root) {

    return isSymmetricHelper(root.left, root.right);

};

const isSymmetricHelper = function (lT, rT) {

    if (lT == null && rT == null) return true;

    if (!lT || !rT) return false;

    if (lT.val != rT.val) return false;

    let left = isSymmetricHelper(lT.left, rT.right);
    let right = isSymmetricHelper(lT.right, rT.left);

    return left && right;

}

/* 11.) Find min/max element in Binary tree  */
// ip: 
//           10             
//         /    \
//        40     25
//        / \    / \
//       16 18  15  12 
//        \      
//         8  
// op : 40 (max) 8 (min)
