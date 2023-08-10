class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
       sort(candidates.begin(), candidates.end());
       vector<int> curr;
       vector<vector<int>> output;
       dfs(candidates, target, 0, 0, curr, output);
       return output; 
    }

private:
    void dfs(vector<int>& candidates, int target, int sum, int starting_pos, vector<int>& curr, vector<vector<int>>& output) { //recursive accumuliator
        if (starting_pos == candidates.size()) return;
        if (sum > target) return;
        if (sum == target) {output.push_back(curr); return;}
        for (int i=starting_pos; i<candidates.size(); i++) {
            curr.push_back(candidates[i]);
            dfs(candidates, target, sum+candidates[i], i, curr, output);
            curr.pop_back();
        }
    }
};