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
    vector<int> input;
    int kthSmallest(TreeNode* root, int k) {
        calc(root);
        sort(input.begin(), input.end());
        return input[k-1];
    }

    void calc(TreeNode* root) {
        if (root == NULL) {return;}
        input.push_back(root->val);
        calc(root->left);
        calc(root->right);
    }


};