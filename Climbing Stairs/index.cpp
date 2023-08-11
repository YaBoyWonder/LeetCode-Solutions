class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int first = 1;
        int second = 2;
        int temp = 0;
        for (int i=2; i<n; i++) {
            temp = first + second;
            first = second;
            second = temp;
        }
        return temp;
    }
};

//Note: Just found it funny that for .1 lower in mem, runtime speed is ~38%.
//int first = 1, second = 2, temp = 0;