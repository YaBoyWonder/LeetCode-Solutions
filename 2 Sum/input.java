import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int opp_val = target - nums[i];
            if (map.containsKey(opp_val)) {return new int[]{map.get(opp_val), i};} else map.put(nums[i], i);
        }
        return new int[] {};
    }
}