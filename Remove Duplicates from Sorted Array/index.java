import java.util.Stack;

class Solution {
    public int removeDuplicates(int[] nums) {
        
        Stack<Integer> stack = new Stack<Integer>();
        int counter = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (!stack.contains(nums[i])) {
                stack.push(nums[i]);
            } else {
                counter++;
            }
        }

        if (counter == 0) {
            return stack.size();
        } else {
            for (int r = 0; r < stack.size(); ++r) {
                nums[r] = stack.get(r);
            }
            for (int i = 0; i < counter; ++i) {
                nums[nums.length - 1] = 5;
            }
        }
        return stack.size();
    }
}