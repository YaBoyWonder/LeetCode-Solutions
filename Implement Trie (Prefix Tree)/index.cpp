class Trie {
public:
    struct trieNode {
        trieNode* tree[26];
        bool live;
        trieNode() {
            live=false;
            for (auto &i : tree) i = NULL; //set each value in node-struct null
        }
    };
    trieNode* root;
    Trie() {
       root = new trieNode(); 
    }
    
    void insert(string word) {
       trieNode* copy = root;
       for (char i : word) {
            if (copy->tree[i-'a']==NULL) copy->tree[i-'a'] = new trieNode();
            copy = copy->tree[i-'a'];
       } 
       copy->live=true;
    }
    
    bool search(string word) {
       trieNode* copy = root;
       for (char i : word) {
            if (copy->tree[i-'a']==NULL) return false;
            copy = copy->tree[i-'a'];
       } 
       return copy->live;
    }
    
    bool startsWith(string prefix) {
       trieNode* copy = root;
       for (char i : prefix) {
            if (copy->tree[i-'a'] == NULL) return false;
            copy = copy->tree[i-'a'];
       } 
       return true;
    }
};


// class Trie {
// public:
//     vector<string> v;
//     Trie() {
        
//     }
    
//     void insert(string word) {
//        v.push_back(word); 
//     }
    
//     bool search(string word) {
//        if (find(v.begin(), v.end(), word) != v.end()) return true;
//        return false;
//     }
    
//     bool startsWith(string prefix) {
//         int n = prefix.size();
//         for (int i=0; i<v.size(); i++) {
//             string words_val = v[i]; 
//             string word = words_val.substr(0, n);
//             if (word == prefix) return true;
//         }
//         return false;
//     }
// };

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */