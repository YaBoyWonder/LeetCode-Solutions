class Solution {
public:
    int search(vector<int>& nums, int target) {
        
        int left=0;
        int right=nums.size() - 1;
        int pointer=0;
        
        while (left <= right) {
            int middle = (left + right)/2;
            if (nums[middle] == target) {
                return middle;
            }
            if (nums[left] <= nums[middle]) {
                if (nums[left] <= target && nums[middle] >= target) {
                    right=middle-1;
                } else {
                    left=middle+1;
                }
            } else {
                if (nums[right] >= target && nums[middle] <= target) {
                    left=middle+1;
                } else {
                    right=middle-1;
                }
            }
        }
        return -1;
    }
};