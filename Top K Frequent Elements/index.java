import java.util.*;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        int[] output = new int[k];

        Map<Integer, Integer> map = new HashMap<>();

        for (int input : nums) {
            map.put(input, map.getOrDefault(input, 0) + 1);
        }
        PriorityQueue<Integer> queue = new PriorityQueue<>((a, b) -> map.get(b) - map.get(a));
        for (int input : map.keySet()) {
            queue.offer(input);
        }

        for (int i = 0; i < k; ++i) {
            output[i] = queue.poll();
        }
        return output;
    }
}
