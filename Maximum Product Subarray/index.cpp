class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int max_val = INT_MIN, prefix=1, suffix=1;
        for (int i=0; i<nums.size(); i++) {
            if (prefix == 0) {prefix = 1;
                if (suffix == 0) {suffix = 1;}}
            prefix*=nums[i];
            suffix*=nums[nums.size()-1-i];
            max_val = max(max_val, max(prefix, suffix));
        }
        return max_val;
    }
};
//2, 3, -2, 4