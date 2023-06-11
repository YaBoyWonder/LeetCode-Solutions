class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; ++i) {
            if (map.containsKey(target - nums[i])) { int[] output = {i, map.get(target - nums[i])}; return output;}
            map.put(nums[i], i);
        }
        return nums;
    }
}


// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         for (int i = 0; i < nums.length; i++) {
//             int val_1 = nums[i];
//             for (int y = i + 1; y < nums.length; y++) {
//                 int val_2 = nums[y];
//                 int[] sampel = {i, y};
//                 if (val_1 + val_2 == target && val_1 != val_2) {return sampel;}
//             }
//         }
//         return nums;
//     }
// }