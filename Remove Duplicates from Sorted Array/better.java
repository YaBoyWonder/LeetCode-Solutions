class Solution {
    public int removeDuplicates(int[] nums) {
    
        Set<Integer> set = new TreeSet<Integer>();
        for (int x : nums) { //for-each
            set.add(x);
        }

        int counter = 0;
        for (int x : set) {
            nums[counter] = x;
            ++counter;
        }

        return set.size();
    }
}