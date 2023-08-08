//47.85%, could optimize runtime
class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int bSize = board.size(), rSize=board[0].size();
        for (int i=0; i<bSize; i++)
            for (int j=0; j<rSize; j++) 
                if (board[i][j] == word[0]) { 
                    if (found(board, word, i, j, 0)) return true;}
        return false;
    }

    bool found(vector<vector<char>>& b, string w, int r, int c, int x) {
        if (x == w.size()) return true;
        if (r < 0 || r >= b.size() || c < 0 || c >= b[0].size()) return false;
        if (b[r][c] != w[x] || b[r][c]=='~') return false;
        else {
            b[r][c]='~';
            if (found(b, w, r+1, c, x+1) || found(b,w,r,c+1,x+1) || found(b,w,r-1,c,x+1) || found(b,w,r,c-1,x+1)) return true;
            b[r][c]=w[x];
            return false;
        }
    }
};