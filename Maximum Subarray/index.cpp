class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_val = INT_MIN, temp=0;
        for (int i=0; i<=nums.size()-1; i++) {
            temp+=nums[i];
            if (temp > max_val) {max_val=temp;}
            if (temp < 0) {temp=0;}
        }
        return max_val;
    }
};