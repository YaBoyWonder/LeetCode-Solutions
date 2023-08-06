class Solution {
public:
    bool canJump(vector<int>& nums) {
        int l = nums.size();
        int jump_length = 0;
        for (int i=0; i<l; i++) {
            if (i > jump_length) return false;
            jump_length=max(jump_length, i + nums[i]);
        }
        return true;
    }
};