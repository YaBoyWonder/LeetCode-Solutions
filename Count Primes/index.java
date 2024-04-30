class Solution {
    public int countPrimes(int n) {
//        if (n <= 2) { return 0; } this increases mem 
        boolean[] nP = new boolean[n];
        int x = 0;
        for (int i=2; i<n; i++) {
            if (nP[i] == false) {
                x++;
                for (int j=2; j*i<n; j++) {
                    nP[j*i] = true;
                }
            }
        }
        return x;
    }

}
