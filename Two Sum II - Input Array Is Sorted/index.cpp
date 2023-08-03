//Optimized run-time removing un-needed data structure
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0, right = numbers.size()-1;
        while (numbers[left] + numbers[right] != target) {
            if (numbers[left] + numbers[right] < target) {left++;} else {right--;}
        }
        return {left+1, right+1};
    }
};

//-- Older Version --

// class Solution {
// public:
//     vector<int> twoSum(vector<int>& numbers, int target) {
//         unordered_map<int, int> map;
//         vector<int> v;        
//         int left=0;
//         while (left <= numbers.size()-1) {
//             int value = target - numbers[left];
//             if (map.find(value) != map.end()) {
//                 v.push_back(map[value]);
//                 v.push_back(left+1);
//                 return v;
//             } else { map.insert(make_pair(numbers[left], left+1)); }
//             left++;
//         }
//         return v;
//     }
// };