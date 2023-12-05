# Binary Tree Traversal Three - Array
#### Problem
    Given a binary tree, find its preorder Inorder Postorder traversal.  
#### Example 1:
    **Input**:
            1      
          /          
        4    
      /    \   
    4       2
#### Examle 2:
    **Input**
         6
     /   \
    3     2
     \   / 
      1 2        
#### Solution 
```javascript
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
### Preorder Traversal
    class Solution {
         //Function to return a list containing the preorder traversal of the tree.
        preorders(root,res){
            if(root==null)
                return;
            res.push(root.data);
            this.preorders(root.left,res);
            this.preorders(root.right,res);
        }
        preorder(root)
        {
            let res=[];
            this.preorders(root,res);
        
             return res;
        }
    }
### Inorder Traversal
    class Solution {
        // Function to return a list containing the inorder traversal of the tree.
         inorders(root,res){
            if(root==null)
                return;
            this.inorders(root.left,res);    
            res.push(root.data);
            this.inorders(root.right,res);
        }

        inOrder(root) {
            let res=[];
            this.inorders(root,res);
            return res;
        }
    }   
### Postorder Traversal
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
```
### Approach
    The provided JavaScript code defines a class called `Solution` with three methods for traversing a binary tree:       `preorder`, `inOrder`, and `postOrder`. Each traversal method takes the root of the binary tree as an argument and returns an array containing the elements of the tree in the specified order.

    Let's break down each traversal method:
    
    1. **Preorder Traversal**:
       
        - The `preorders` method is a recursive helper function for preorder traversal. It takes the current node `root` and     an  array `res` as parameters.
        - The base case checks if the current node is null, and if so, it returns.
        - In the recursive calls, the value of the current node is pushed to the result array (res), and then the method is called recursively for the left and right subtrees.
        - The `preorder` method initializes an empty array res and calls the `preorders` method to perform the preorder traversal. It then returns the result array.
    
    2. **Inorder Traversal**
       
        - Similar to the preorder traversal, the `inorders` method is a recursive helper function for inorder traversal. It takes the current node `root` and an array `res` as parameters.
        - The base case checks if the current node is null, and if so, it returns.
        - In the recursive calls, the method is called recursively for the left subtree, the value of the current node is pushed to the result array (`res`), and then the method is called recursively for the right subtree.
        - The `inOrder` method initializes an empty array `res` and calls the `inorders` method to perform the inorder traversal. It then returns the result array.

    3. **Post Order Traversal ** 
        - The `postorders` method is a recursive helper function for postorder traversal. It takes the current node `root` and an array `res` as parameters.
        - The base case checks if the current node is null, and if so, it returns.
        - In the recursive calls, the method is called recursively for the left and right subtrees, and then the value of the current node is pushed to the result array (`res`).
        - The `postOrder` method initializes an empty array `res` and calls the `postorders` method to perform the postorder traversal. It then returns the result array.   

