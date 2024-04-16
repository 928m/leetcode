/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    const rootIndex = inorder.indexOf(rootVal);
    preorder.shift();

    root.left = buildTree(preorder, inorder.slice(0, rootIndex));
    root.right = buildTree(preorder, inorder.slice(rootIndex + 1));

    return root;
};
buildTree([3,9,20,15,7], [9,3,15,20,7]);