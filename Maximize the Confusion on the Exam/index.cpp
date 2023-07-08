class Solution {
public:
    int maxConsecutiveAnswers(string answerKey, int k) {
        int i=0;
        int tracker = 0;
        int j=answerKey.length() - 1;
        int max_val = 0;
        unordered_map<char, int> map;
        while (i <= j) {
            map[answerKey[i]]++;
            max_val = max(max_val, map[answerKey[i]]);
            if (i - tracker + 1 > max_val + k) {
                map[answerKey[tracker]]--;
                tracker++;
            }
            i++;
        }
        return answerKey.length() - tracker;
    }
};