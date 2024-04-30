//Time - O(N)
//Space - O(k)
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        //count including duplicates
        priority_queue<int, vector<int>, greater<int>> pq;
        for (int i=0; i<k; i++) {pq.push(nums[i]);} //O(N)
        for (int i=k; i<nums.size(); i++) { //O(N)
            if (nums[i] > pq.top()) {
                pq.pop();
                pq.push(nums[i]);
            }
        }
        return pq.top(); //return the largest element in the heap
    }
};
