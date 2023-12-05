//User function Template for javascript
/**
 * @param {Node} root
 * @returns {number[]}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    //Function to return a list containing the postorder traversal of the tree.
     postorders(root,res){
        if(root==null)
            return;
        this.postorders(root.left,res);    
        this.postorders(root.right,res);
         res.push(root.data);
    }
    postOrder(root)
    {
        let res=[];
        this.postorders(root,res);
        return res;
    }
}
