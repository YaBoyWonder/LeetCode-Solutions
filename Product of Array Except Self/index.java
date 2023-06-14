import java.util.*;
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int counter = nums.length;
        int[] output = new int[counter];
        int value = 1;
        Arrays.fill(output, 1);

        for (int i = 0; i < counter; ++i) { //prefixes
            output[i] *= value;
            value *= nums[i];
        }

        value = 1;

        for (int i = counter - 1; i >= 0; --i) { //suffixes
            output[i] *= value;
            value *= nums[i];
        }

        return output;
    }
}