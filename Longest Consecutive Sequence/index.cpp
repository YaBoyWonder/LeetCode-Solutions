class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        //maximum,
        //we need something similar to hashset to handle duplicates -> unordered_map...
        int maxVal=0;
        unordered_set<int>map(nums.begin(), nums.end());
        for (auto x : map) {
            if (!map.count(x - 1)) {
                int traverser = 1;
                while (map.count(x + traverser)) {traverser++;}
                maxVal = max(maxVal, traverser);
            }
        }
        return maxVal;
    }
};