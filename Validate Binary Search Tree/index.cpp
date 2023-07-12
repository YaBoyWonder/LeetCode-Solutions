/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    //39% runtime
    bool isValid(TreeNode* root, long long left, long long right) {
        if (root == NULL) {return true;}
        if (root->val > left and root->val < right) {
            return isValid(root->left, left, root->val) and isValid(root->right, root->val, right);
        } else {return false;}
    }

    bool isValidBST(TreeNode* root) {
        long long int min = -1000000000000, max = 1000000000000;
        return isValid(root, min, max);
    }
};

/*

/*
88.72% memory
class Solution {
public:

    bool isValid(TreeNode* root, long long left, long long right) {
        if (root == NULL) {return true;}
        if (root->val < right and root->val > left) {return isValid(root->left, left, root->val) && isValid(root->right, root->val, right); }
        else {return false;}
    }

    bool isValidBST(TreeNode* root) {
        long long int min = -1000000000000, max = 1000000000000;
        return isValid(root, min, max);
    }
};
*/