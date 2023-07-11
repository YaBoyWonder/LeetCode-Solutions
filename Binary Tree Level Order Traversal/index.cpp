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
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> vi;
        if (root == NULL) {return vi;}
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int length = q.size();
            vector<int>v;
            for (int i=0; i<length; i++) {
                TreeNode *node=q.front();
                q.pop();
                if (node->left!=NULL) {q.push(node->left);};
                if (node->right!=NULL) {q.push(node->right);};
                v.push_back(node->val);
            }
            vi.push_back(v);
        }
        return vi;
    }
};

/* SAME CODE, JUST WITH MY COMMENTS INCLUDED

class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> vi;
        if (root == NULL) {return vi;}
        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int length = q.size();
           // cout << "\nQueue Length  " << length << " " << endl;
            vector<int>v;
            for (int i=0; i<length; i++) {
                TreeNode *node=q.front(); //3...
                //cout << "Q Front Value --> " << node->val << " " << endl;
                q.pop();
                if (node->left!=NULL) {q.push(node->left);  
                //cout << "Node Left Value --> " <<node->left->val << " " << endl;
                };
                if (node->right!=NULL) {q.push(node->right); 
                //cout << "Node Right Value --> " <<node->right->val << " " << endl;
                };
                v.push_back(node->val);
                //cout << "Node Value -->  " << node->val << " " << endl;
            }
            vi.push_back(v);
        }
        return vi;
    }
}; */