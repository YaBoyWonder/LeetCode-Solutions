class Solution {
    public int maxArea(int[] height) {

        int start = 0, max = 0;
        int end = height.length - 1;

        while (start < end) {
            int w = end - start;
            int h = Math.min(height[start], height[end]);
            int area = h * w;
            max = Math.max(max, area);

            if (height[start] < height[end]) {start++;}
            else if (height[start] > height[end]) {end--;}
            else {start++; end--;}
        }
        return max;
    }
}