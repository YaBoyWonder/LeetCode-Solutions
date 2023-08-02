class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int max_val = INT_MIN, prefix=1, suffix=1;
        int arr_length = nums.size();
        for (int i=0; i<arr_length; i++) {
            if (prefix == 0) prefix = 1;
            if (suffix == 0) suffix = 1;
            prefix*=nums[i];
            suffix*=nums[arr_length - i - 1];
            max_val = max(max_val, max(prefix, suffix));
        }
        return max_val;
    }
};
//2, 3, -2, 4