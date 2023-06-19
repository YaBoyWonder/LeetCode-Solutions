class Solution {
    public int maxProfit(int[] prices) {
        int output = 0;
        int left = 0, right = 1;

        while (right < prices.length) { //since profit > 0 has to have length > 1
            if (prices[left] < prices[right]) { output = Math.max(output, (prices[right] - prices[left])); } 
            else { left = right; }
            right++;
        }

        return output;
    }
}