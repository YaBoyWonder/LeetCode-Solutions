    class Solution {
    public:
        int findMin(vector<int>& nums) {
            int output = nums[0];
            int left = 0;
            int right = nums.size() - 1;

            while (left <= right) {
                if (nums[left] < nums[right]) {output = min(output, nums[left]); break; }
                int middle = (right + left) / 2;
                output=min(output, nums[middle]);
                if (nums[middle] >= nums[left]) { left = middle + 1; } else { right = middle - 1; }
            }
            return output;
        }
    };