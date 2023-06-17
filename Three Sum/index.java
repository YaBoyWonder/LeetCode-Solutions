import java.util.*;
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        Set<List<Integer>> list = new HashSet<>();

        for (int i=0; i < nums.length - 2; ++i) {
            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {
                int s = nums[i] + nums[j] + nums[k];
                if (s == 0) {
                    ArrayList<Integer> temp = new ArrayList<>();
                    temp.add(nums[i]);
                    temp.add(nums[j]);
                    temp.add(nums[k]);
                    list.add(temp);
                    j++;
                } else if (s < 0) { j++;} else { k--;}
            }

        }
        return new ArrayList<>(list);
    }
}