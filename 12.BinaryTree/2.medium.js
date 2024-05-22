const TreeNode = require('./node');


/* 1.)  Build binary tree using preOrder & InOrder Traversal  */
// ip: preOrder: [1,2,3,4,5,6]
// ip: InOrder:  [5,4,2,1,3,6]
// op:
//            1
//          /   \
//         2     3
//        / \   / \
//       4   5  6  x

let preOrderIdx = 0;

function constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder) {

    /* Brute force approach */
    // T.C: O(n^2)
    // S.C: O(1)

    /* Optimize approach  */
    // T.C: O(n)
    // S.C: O(n)

    let hm = new Map();

    for (let i = 0; i < inorder.length; i++) {

        hm.set(inorder[i], i);

    }

    return buildBinaryTree(preorder, inorder, 0, inorder.length - 1, hm);
}

const buildBinaryTree = function (preOrder, inOrder, inS, inE, hm) {

    if (inS > inE) return null;

    const tNode = new TreeNode(preOrder[preOrderIdx++]);

    if (inS == inE) return tNode;


    let idx = hm.get(tNode.val);

    tNode.left = buildBinaryTree(preOrder, inOrder, inS, idx - 1, hm);
    tNode.right = buildBinaryTree(preOrder, inOrder, idx + 1, inE, hm);

    return tNode;
}

/* 2.) LCA of Binary tree */
// ip:
//         2  
//       /   \
//      5     7
//     / \   / \
//    11  8  19 3
//       / \
//      50  

// op: lca of (50,11) is 5

function commonAncestor(root, p, q) {

    if (root == null) return root;

    if (root.val == p.val || root.val == q.val) return root;

    let lNode = commonAncestor(root.left, p, q);
    let rNode = commonAncestor(root.right, p, q);

    if (lNode != null && rNode != null) return root;

    if (rNode == null) return lNode;
    else return rNode;

}

/* 3.) Construct Binary tree from inOrder & postOrder traversal */

let postIdx = 0;

function constructBinaryTreeFromPostorderAndInorderTraversal(inorder, postorder) {
    postOrderLen(postorder);

    return btHelper(inorder, postorder, 0, inorder.length - 1);
};

const btHelper = function (inorder, postorder, sIdx, eIdx) {

    if (sIdx > eIdx) return null;

    let tNode = new TreeNode(postorder[postIdx--]);

    if (sIdx == eIdx) return tNode;

    let mid;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] == tNode.val) {
            mid = i;
            break;
        }
    }

    tNode.right = btHelper(inorder, postorder, mid + 1, eIdx);
    tNode.left = btHelper(inorder, postorder, sIdx, mid - 1);

    return tNode;

}

const postOrderLen = function (postOrder) {
    postIdx = postOrder.length - 1;
}