class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> m;
        for (auto x: strs) {
            string temp = x;
            sort(x.begin(), x.end());
            m[x].push_back(temp); //aet -> [eat, tea, ate] ...
        }
        vector<vector<string>> output;
        for (auto x: m) {
            output.push_back(x.second);
        }
        return output;
    }
};