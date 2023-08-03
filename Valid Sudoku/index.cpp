class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        unordered_set<string> set;
        for (int i=0; i<9; i++) {
            for (int j=0; j<9; j++) {
                if (board[i][j] == '.') continue;
                string row_val = to_string(board[i][j]) + ": ROW ->" + to_string(i);
                string col_val = to_string(board[i][j]) + ": COL ->" + to_string(j);
                string box_val = to_string(board[i][j]) + ": BOX ->" + to_string(i / 3) + to_string(j / 3);
                if (set.find(row_val) != set.end() || set.find(col_val) != set.end() || set.find(box_val) != set.end()) return false; //This means that we found a value that is matching a value in our set (via row, col, or value duplicate in the box)
                set.insert(row_val);
                set.insert(col_val);
                set.insert(box_val);
            }
        }
        return true;
    }
};